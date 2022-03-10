
import { importLines } from './importer.js';
import { up, down, left, right, upLeft, upRight, downLeft, downRight } from './directions.js'


let filename = 'input.txt';

let input = importLines(filename);


for (let i = 0; i < input.length; i++) {
	input[i] = input[i].split('');

	for (let j = 0; j < input[i].length; j++) {
		input[i][j] = parseInt(input[i][j], 10); 
	}
}


//helper functions

function printPretty(input) {
	for (let line of input) {
		let textline = line.join(' ')
		console.log(textline)
	}
}

function getValue(input, pos) {
	if(pos === undefined) {
		throw new Error('Position is undefined')
	}

	let value = input[pos.y][pos.x];
	return value;
}

//execution





//debugging

printPretty(input);


let pos = {x: 2, y: 2}
let dirPos = downLeft(input, pos)
console.log(pos)
console.log(getValue(input, pos))
console.log(dirPos);
console.log(getValue(input, dirPos));

