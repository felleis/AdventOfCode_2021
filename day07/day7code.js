
import { importFileAsStringArray } from './importer.js';

function printAll (array) {
	for (let i = 0; i < array.length; i++) {
		console.log(array[i])
	}
}



let filename = 'input.txt';

let input = importFileAsStringArray(filename);

let verticalPositions = (input[0].split(','));


verticalPositions = verticalPositions.map(x => parseInt(x, 10)); 

//console.log(printAll(verticalPositions)); 


//verticalPositions = [16,1,2,0,4,2,7,1,2,14] /// Test with example positions from prompt --> works

//verticalPositions.sort(function(a, b) {
//	return a-b
//});

//let fuelCost = 0;


/*
*
Part 1
* 
*/

// let median = verticalPositions[verticalPositions.length/2-1];

// for (let i = 0; i < verticalPositions.length; i++) {
// 	fuelCost = fuelCost+Math.abs(verticalPositions[i]-median)
// }

//console.log('Fuel cost for task 1: ' + fuelCost)


/*
*
Part 2
* 
*/




function howMuchFuel (distance) {
	let fuel = 0
	for (let i = 1; i < (distance+1); i++) {
		fuel = fuel + i; 
	}
	return fuel;
}
 
//console.log(verticalPositions.length)
let summedUpPositions = 0

for (let i = 0; i < verticalPositions.length; i++) {
	summedUpPositions = summedUpPositions + parseInt(verticalPositions[i], 10)
}
let averagePosition = Math.round(summedUpPositions / verticalPositions.length)

//console.log('The destination position is: ' + averagePosition)

let fuelVer2 = 0

for (let indivCrab = 0; indivCrab < verticalPositions.length; indivCrab++) {
	let indivCrabMovement = 0; 
	indivCrabMovement = Math.abs(verticalPositions[indivCrab]-averagePosition); 
	let indivCrabFuelNeeded = 0; 
	indivCrabFuelNeeded = howMuchFuel(indivCrabMovement); 
	console.log('Crab ' + indivCrab + ' moves ' + indivCrabMovement + ' positions and needs ' + indivCrabFuelNeeded + ' Fuel'); 
	fuelVer2 = fuelVer2 + indivCrabFuelNeeded; 
}

console.log('Fuel cost for task 2: ' + fuelVer2);
