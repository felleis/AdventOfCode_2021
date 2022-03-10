
import { importFileAsStringArray } from './importer.js';

function printAll (array) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i])
	}
}

let filename = 'input.txt';

let input = importFileAsStringArray(filename);

/*
 * 
 * PART 1
 *
 * 

let outPutValuesOnly = []

input.forEach(x => {
	outPutValuesOnly.push(x.split(' | ')[1])
});  

let wurscht = outPutValuesOnly.join(' '); 

let singledOutInput = outPutValuesOnly.join(' ').split(' ')


console.log(singledOutInput)


let counterForOne = 0
let counterForFour = 0
let counterForSeven = 0
let counterForEight = 0

singledOutInput.forEach (x => {
	if(x.length === 2) {
		counterForOne++
	} else if (x.length === 4) {
		counterForFour++ 
	} else if (x.length === 3) {
		counterForSeven++
	} else if (x.length === 7) {
		counterForEight++
	}
});

console.log(counterForOne+counterForFour+counterForSeven+counterForEight);

*/




/*
 * PART II
 */ 


// checks whether the segment is included in the pattern, e.g. segment a in pattern abcd, and returns true or false
function includesSegment(segment, pattern) {		
	return pattern.includes(segment)
}; 

// checks which letters occur X times in a given pattern
function occurrences(patterns, amount) {
	let concatinatedPatterns = patterns.join('');
	let occurrencesByLetterMap = new Map(); // key: letter, value: amount of occurrence
	
	for(let letter of concatinatedPatterns) {					//runs through each letter
		if (occurrencesByLetterMap.has(letter) == false) {
			occurrencesByLetterMap.set(letter, 1);				//adds letter to map if it hasn't been added yet
		} else {
			let updatedCounter = occurrencesByLetterMap.get(letter) + 1;	//increases value by one if letter is already in map	
			occurrencesByLetterMap.set(letter, updatedCounter);
		}
	}

	let lettersWithAmountOccurrence = [];
	for (let letter of occurrencesByLetterMap.keys()) {
		if (occurrencesByLetterMap.get(letter) === amount) {
			lettersWithAmountOccurrence.push(letter);				//adds a letter to new array if it occurs X times
		}
	}

	return lettersWithAmountOccurrence.sort().join('');
}




// compares two patterns and returns the segments which only occur in the first pattern, e.g. pattern ACF minus pattern CF returns segment A
function minus(minuend, subtrahend) {
	for (let segment of subtrahend) {
		minuend = minuend.replaceAll(segment, '')
	}
	return sortAlphabetically(minuend); 
};

// turns string into array for alphabetical sorting
function sortAlphabetically(string){		
	let charArray = string.split('');
	return charArray.sort().join('');
}

//joins the segments needed for a specific combination
function joinSegments(segments, segmentIndices) {
	let joinedSegments = '';
	for (let index of segmentIndices) {
		joinedSegments = joinedSegments + segments[index];
	}
	return sortAlphabetically(joinedSegments);
}


let displayValue = 0;			// all displayvalues will be added to this variable for puzzle solution

for (let i = 0; i <input.length-1; i++) {			// loops through each line in the input array
	let signalPatterns = ''; 
	let outputValues = '';
	
	let combinations = new Array(10).fill('');		// signal pattern for N will be stored in combinations[N]

	signalPatterns = input[i].split(' | ')[0].split(' ').map(signalPattern => sortAlphabetically(signalPattern)); 	//splits left side of input line and sorts alphabetically
	outputValues = input[i].split(' | ')[1].split(' ').map(ouputValue => sortAlphabetically(ouputValue)); 			//splits right side of input line and sorts


	for (let signal of signalPatterns) {			// loops through signal patterns and stores pattern for renedering N in combination[N]
		
		if (signal.length === 2) {
			combinations[1] = signal

		} else if (signal.length === 3) {
			combinations[7] = signal

		} else if (signal.length === 4) {
			combinations[4] = signal

		} else if (signal.length === 7) {
			combinations[8] = signal
		}

	}		
	// now we know the patterns for 1, 4, 7 and 8 

	let segments = new Array(7).fill('') 			// segments are enumerated from top left to bottom right
	segments[0] = minus(combinations[7], combinations[1]); //top segment

	let fiveDigitPatterns = signalPatterns.filter(signal => signal.length === 5) //filters for patterns 2, 3 and 5
	let tripleOccurrenceSignals = occurrences(fiveDigitPatterns, 3)					//returns all letters which occur three times in all patterns with length = 5

	//bottom right segment is extracted by deleting all segments which render 4 and the top segment from the triple occurrences
	segments[6] = minus(minus(tripleOccurrenceSignals, combinations[4]), segments[0]);

	//top right segment is extracted by subtracting top segment and lower right segment	
	segments[3] = minus(minus(tripleOccurrenceSignals, segments[6]), segments[0]);

	//middle segment is extracted by subtracting all segments of 4, the top segment and the lower right segment from all segments for renderning 8
	segments[4] = minus(combinations[8], combinations[4] + segments[0] + segments[6]);

	//top left segment is extracted by looking for segments which only occur once in 2, 3 and 5 and subtracting the middle segment
	let singleOccurrenceSignals = occurrences(fiveDigitPatterns, 1);
	segments[1] = minus(singleOccurrenceSignals, segments[4]);

	for (let fiveDigitPattern of fiveDigitPatterns) {
		if (includesSegment(segments[4], fiveDigitPattern)) {
			combinations[2] = fiveDigitPattern;
		}
	}

	//lower left segment is needed for displaying 8; all other segments are subtracted by subtracing segments for 2 and 1 
	segments[5] = minus(combinations[8], combinations[2] + segments[1]);
	
	//we now know all segments needed for rendering the numbers 6, 0, 3 and 9  
	combinations[6] = joinSegments(segments, [0, 1, 3, 4, 5, 6]);
	combinations[0] = minus(combinations[8], segments[3]);
	combinations[3] = minus(combinations[8], segments[1] + segments[4]);
	combinations[9] = minus(combinations[8], segments[4]);

	//find segment 2 
	segments[2] = minus(combinations[8], combinations[6]);

	//activate segments for displaying 5 
	combinations[5] = minus(combinations[9], segments[2]);


	//replaces combinations in right part of input with the digits they are supposed to display 
	for (let l = 0; l < combinations.length; l++) {					
		for (let outputIndex = 0; outputIndex < outputValues.length; outputIndex++) {
			if(outputValues[outputIndex] === combinations[l]) {
				outputValues[outputIndex] = l
			}
		}

		//console.log(combinations[l])
		//outputValues = outputValues.replaceAll(combinations[l], l)			// signals need to be sorted alphabetically, only replace if complete combination matches (e.g. don't replace CF in ACF)
	} 
	console.log('out', outputValues)
	
	displayValue = displayValue + parseInt(outputValues.join(''), 10);			//adds up all displayvalues

	//console.log(combinations)
}

console.log('displayValue', displayValue);
