
// DAY 1

import fs from 'fs';

let dayNr = 1;
let filename = 'inputday' + dayNr + '.txt'

let input = fs.readFileSync(filename).toString().split("\n");

console.log("## DAY " + dayNr + " ##");


// Part 1		How many measurements are larger than the previous measurement?

// Start counter at 0, increase by 1 if measurement is larger than previous one. 

let numberIncreases = 0			

for (var i = 0; i < input.length; i++) {
	let measurement1 = parseInt(input[i], 10);
	let measurement2 = parseInt(input[i+1], 10);
	if (measurement1 < measurement2) {
		numberIncreases = numberIncreases+1;		
	}


}
console.log('Part 1:', numberIncreases);


//Part 2		Same as part 1, but compare sums of three-measurement sliding windows instead

let numberSumIncreases = 0

for (var i = 0; i < input.length; i++) {
	let measurement1 = parseInt(input[i], 10) + parseInt(input[i+1], 10) + parseInt(input[i+2], 10) ;
	let measurement2 = parseInt(input[i+1], 10) + parseInt(input[i+2], 10) + parseInt(input[i+3], 10);
	if (measurement1 < measurement2) {
		numberSumIncreases = numberSumIncreases+1;
	}
}
console.log('Part 2:', numberSumIncreases); 
