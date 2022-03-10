
// DAY 1
// Part 1
import fs from 'fs';

let dayNr = 1;
let filename = 'inputday' + dayNr + '.txt'

let input = fs.readFileSync(filename).toString().split("\n");

console.log("## DAY " + dayNr + " ##");

// let numberIncreases = 0
// for (var i = 0; i < input.length; i++) {
// 	let measurement1 = parseInt(input[i], 10);
// 	let measurement2 = parseInt(input[i+1], 10);
// 	if (measurement1 < measurement2) {
// 		numberIncreases = numberIncreases+1;
// 	}


// }
// console.log('Part 1:', numberIncreases);


//Part 2

let numberIncreases = 0
for (var i = 0; i < input.length; i++) {
	let measurement1 = parseInt(input[i], 10) + parseInt(input[i+1], 10) + parseInt(input[i+2], 10) ;
	let measurement2 = parseInt(input[i+1], 10) + parseInt(input[i+2], 10) + parseInt(input[i+3], 10);
	if (measurement1 < measurement2) {
		numberIncreases = numberIncreases+1;
	}
}
console.log('Part 2:', numberIncreases); 
