
// DAY 2

import fs from 'fs';

let dayNr = 2;
let filename = 'inputday' + dayNr + '.txt'

let input = fs.readFileSync(filename).toString().split("\n");

console.log("## DAY " + dayNr + " ##");

// Part 1		Calculate the horizontal position and depth you would have after following the planned course.

//let horizontalPos = 0;
//let depth = 0;

//Part 1
// for (let i of input){
// 	let distance = Number(i[i.length-1]);


// 	if (i.includes('forward')) {		
// 		horizontalPos = horizontalPos + distance; 
// 	}
// 	if (i.includes("down")) {
// 		depth = depth + distance;
// 	}
// 	if (i.includes("up")) {
// 		depth = depth - distance;
// 	}; 

	
// }; 
// console.log(horizontalPos*depth)		Puzzle solution = horizontal position * depth


//Part 2		Alternative interpretation of commands, added aim

let aim = 0 
let horizontalPos = 0;
let depth = 0;

for (let i of input){
	let distance = Number(i[i.length-1]);

	if (i.includes('down')) {
		aim = aim + distance} else {
			if (i.includes('up')) {
				aim = aim - distance } else {
				horizontalPos = horizontalPos + distance;
			}
			
		console.log(horizontalPos*depth)
	}
