
import { importFileAsStringArray } from './importer.js';


let filename = 'testinput.txt';

let input = importFileAsStringArray(filename);

//each digit must be compared to adjecent digits (up, down, left, right)
//input is string, each digit must be parsed


// compares digit in given position and returns true if the digits on its left and right are greater. 
// needs to run through loop for each line
// start

function left(horizontalInput, index)	{
	return horizontalInput[index-1] > horizontalInput[index];
}

function right(horizontalInput, index) {
	return horizontalInput[index+1] > horizontalInput[index];
}


let sumRiskLevels = 0	// all risklevels are added to this variable



for (let i = 0; i < input.length; i++) {
	
	let horizontalInput = input[i].split('')

	let horizontalInputIntegers = horizontalInput.forEach(x => {parseInt(x, 10)});

	console.log(horizontalInputIntegers)

	// for (let j = 0; j < horizontalInput.length; j++) {

	// 	let positionForLeft = horizontalInput[j+1]
	// 	let positionForRight = horizontalInput[j]

	// 	if (left(horizontalInput, positionForLeft) && right(horizontalInput, positionForRight)) {
	// 		sumRiskLevels = sumRiskLevels + 1 + positionForRight;
	// 		console.log(positionForRight)
	// 	}
	// }
//console.log(sumRiskLevels)

}



