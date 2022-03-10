
import { importFileAsStringArray } from './importer.js';

let filename = 'input.txt';

let input = importFileAsStringArray(filename);

//console.log(input);


let coordinatesLog = [];

let multipleOccurrenceCounter = 0;

let gtOneOccurenceLog = [] // greater than one occurrence log

function updateMultipleOccurrences (coordinatesLog, newCoordinate, multipleOccurrenceCounter, gtOneOccurenceLog) {
	if(coordinatesLog.includes(newCoordinate)) {
		if (gtOneOccurenceLog.includes(newCoordinate)) {
			//do nothing
		} else {
			gtOneOccurenceLog.push(newCoordinate);
			multipleOccurrenceCounter++;
		}
	} else {
		coordinatesLog.push(newCoordinate);
	}
	return multipleOccurrenceCounter;
}

for (let i = 0; i < input.length; i++) {
	let separatedLine = input[i].split(' -> ');
	let departureCoordinates = separatedLine[0].split(',');
	let departureX = parseInt(departureCoordinates[0], 10);
	let departureY = parseInt(departureCoordinates[1], 10);
	let destinationCoordinates = separatedLine[1].split(',');
	let destinationX = parseInt(destinationCoordinates[0], 10);
	let destinationY = parseInt(destinationCoordinates[1], 10); 
	// console.log(departureX, departureY, destinationX, destinationY);

	if (departureX === destinationX) { // x is constant, line is on y axis
		if (destinationY > departureY) {
			let yDifference = destinationY - departureY;
				//console.log(yDifference)
			for (let j = 0; j < yDifference+1; j++) {
				let newCoordinate = departureX+'.'+(departureY+j);
				multipleOccurrenceCounter = updateMultipleOccurrences(coordinatesLog, newCoordinate, multipleOccurrenceCounter, gtOneOccurenceLog)
			}
		} else {
			let yDifference = departureY - destinationY;
			for (let j = 0; j < yDifference+1; j++) {
				let newCoordinate = departureX+'.'+(destinationY+j);
				multipleOccurrenceCounter = updateMultipleOccurrences(coordinatesLog, newCoordinate, multipleOccurrenceCounter, gtOneOccurenceLog)
			}
		}

	} else {

		if (departureY === destinationY) {  // y is constant, line is on x axis
			if (destinationX > departureX) {
				let xDifference = destinationX - departureX;
				for (let j = 0; j < xDifference+1; j++) {
					let newCoordinate = (departureX+j)+'.'+departureY;
					multipleOccurrenceCounter = updateMultipleOccurrences(coordinatesLog, newCoordinate, multipleOccurrenceCounter, gtOneOccurenceLog)
				}

			} else {
				if (destinationX < departureX) {
					let xDifference = departureX - destinationX;
					for (let j = 0; j < xDifference+1; j++) {
						let newCoordinate = (destinationX+j)+'.'+departureY;
						multipleOccurrenceCounter = updateMultipleOccurrences(coordinatesLog, newCoordinate, multipleOccurrenceCounter, gtOneOccurenceLog)
					}
				}
			}
		}
	}
}


//console.log(coordinatesLog); 
console.log(multipleOccurrenceCounter);