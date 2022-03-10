
import { importFileAsStringArray } from './importer.js';

let filename = 'input.txt';

let input = importFileAsStringArray(filename);

let fertilityStatus = input[0].split(',').map(x => parseInt(x, 10));

/// Part 1

// for (let tage = 0; tage < 80; tage++) {
//     let newBorn = [];
//     for (let i = 0; i < fertilityStatus.length; i++) {
//         fertilityStatus[i] = fertilityStatus[i]-1;
//         if (fertilityStatus[i] < 0) {
//             newBorn.push(8);
//             fertilityStatus[i] = 6;
//         }
//     }
//     for (var element of newBorn) {
//         fertilityStatus.push(element);
//     }
    
// }

// console.log(fertilityStatus.length); 





/*
* Part 2
*/

function sum(arr) {
	let counter = 0;
	for (let item of arr) {
		counter += item;
	}
	return counter
}

let fertilityStatusOnDay1 = fertilityStatus
let amountOfFertilityStatus = 9; // 0, 1, 2, ..., 8
let amountOfFishInCycle = new Array(9).fill(0);

for (let status of fertilityStatusOnDay1) {
	amountOfFishInCycle[status]++;
}


for (let tage = 0; tage < 256; tage++) {
	
	console.log('begin day', tage, '; already', sum(amountOfFishInCycle), 'fishies');

	let fishReachedDayMinus1 = amountOfFishInCycle.shift(); // takes first elem from array
	amountOfFishInCycle.push(0);
	
	amountOfFishInCycle[6] = amountOfFishInCycle[6] + fishReachedDayMinus1;


	for (let i = 0; i < fishReachedDayMinus1; i++) {
    	amountOfFishInCycle[8]++ // day 8 fish status
    }
}


console.log(amountOfFishInCycle, amountOfFishInCycle.length)
console.log(sum(amountOfFishInCycle))

