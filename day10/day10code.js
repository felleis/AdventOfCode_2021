
import { importFileAsStringArray } from './importer.js';

function printAll (array) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i])
	}
}


let filename = 'testinput.txt';

let input = importFileAsStringArray(filename);

let errorScore = 0

function charOpeningMatch (closingChar) {
	
	let openingMatch = ''
	if (closingChar === ')') {
		openingMatch = '('
	
	} else if (closingChar === ']') {
		openingMatch = '['
	
	} else if (closingChar === '}') {
		openingMatch = '{'
	
	} else if (closingChar === '>') {
		openingMatch = '<'
	}

	return openingMatch 
}

// function checkIfCorrupted (chunk, lineIndex) {

// 	for (let charIndex = 0; charIndex < chunk.length; charIndex++) {

// 		let char = chunk[charIndex]

// 		let match = charMatch(char)

// 		let nextMatchIndex = chunk.indexOf(match, charIndex+1)

// 		let charsBetween = countOBracketsBtwCharAndMatch(char, charIndex, nextMatchIndex, chunk)

// 	//console.log(
// 			// 'The match for', char, 
// 			// ' on position', charIndex, 
// 			// 'can be found in position', nextMatchIndex, 
// 			// ' but there are ', charsBetween, char, ' in between')

// 		// if (chunk.indexOf(match, charIndex+1) === -1) {
// 		// 	console.log('Missing ', match, 'on position', charIndex, 'in line', lineIndex)
// 		// 	matchIndex =
// 		// 	errorScore = chunk
// 		// 	return
		
// 	}
// }

// function countOBracketsBtwCharAndMatch (char, charIndex, nextMatchIndex, chunk) {
	
// 	let counter = 0

// 	for (let i = charIndex+1; i < nextMatchIndex; i++) {
// 		if (chunk[i] === char) {
// 			counter = counter +1
// 		}
// 	}

// 	return counter;
// }

for (let i = 0; i < input.length;  i++) {

	let chunk = input[i].split('');

	//checkIfCorrupted(chunk, i)

	// let charsCounter = new Map([
	// 	['(', 0],
	// 	['[', 0],
	// 	['<', 0],
	// 	['{', 0]
	// ]);

	let memoryStack = [];

	for (let j = 0; j < chunk.length; j++) {

		let char = chunk[j];

		if (['(', '[', '<', '{'].includes(char)) {
			// let counter = charsCounter.get(char)+1;
			// charsCounter.set(char, counter)
			
			memoryStack.push(char);
		
		
		} else {				// write function that checks whether char is a closing bracket, deduct 1 from equivalent counter, give warning about position and expected char
			
			let openingChar = charOpeningMatch(char);
			// let counter = charsCounter.get(openingChar)-1;

			// if (counter < 0) {									// already covered with checking memoryStack
			// 	console.log(
			// 		'Warning', 
			// 		' No Matching Opening Char for Line ', i+1, 
			// 		' Position', j, 
			// 		' Char', char
			// 	);
			// 	continue;
			// }
			// charsCounter.set(openingChar, counter);

			let previousOpeningChar = memoryStack.pop();
			if (previousOpeningChar != openingChar) {
				console.log(
					'Error',
					' Wrong Closing Char on Line', i+1, 
					' Position', j, 
					' Expected counterpart to', previousOpeningChar,
					' Found Char', char, 'instead'
				);
 			}



			// if (char === ')') {
			// 	charsCounter.set('(', charsCounter.get('(')-1)
			// 	if (charsCounter.get('(') <0) {
			// 		console.log('Warning line ', i, 'position', j  )
			// 	}
			// } else {
			// 	if (char === '}') {
			// 		charsCounter.set('{', charsCounter.get('{')-1)
			// 	} else {
			// 		if (char === '>') {
			// 			charsCounter.set('<', charsCounter.get('<')-1)
			// 		} else {
			// 			if (char === ']') {
			// 				charsCounter.set('[', charsCounter.get('[')-1)
			// 			}
			// 		}
			// 	}
			// }
		}
	

	} 

	console.log('line', i+1, 'remaining memoryStack:', memoryStack.join(''));
	// console.log('line', i+1, charsCounter);

	// 	//console.log('The chunk starts with', char, 'at position', j, ' and closes at position', chunk.indexOf(match, j+1))
	// }
}
//console.log(input)