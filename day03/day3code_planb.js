
// DAY 3
// Part 1
import fs from 'fs';

let dayNr = 3;
let filename = 'inputday' + dayNr + '.txt'

let input = fs.readFileSync(filename).toString().split("\n");

console.log("## DAY " + dayNr + " ##");

let gammaRate = input[0] 
let epsilonRate = input[0]


// for (let digit of gammaRate){
// 	let iteration = Number(digit); 
// 	for (let element of input)
// 		console.log(input[0])
// 		//if (input[digit] === ("0"))
// }

function ZeroOrOne(list, digit) {

	let result = 0;
	let zeroCount = 0;
	let oneCount = 0;

	for (let i of list) {

		 if (i[digit] === "0") {
			zeroCount++} else {
		 	oneCount++; 
		 }
	}

	//console.log(zeroCount, oneCount)
	if(oneCount > zeroCount) {
		result = "1"} else {
			result = "0"; }
	//console.log(oneCount, zeroCount)
	return result; 
}

 // for (let letters of gammaRate) {
	// console.log(ZeroOrOne(input, letters))
 // 	gammaRate[letters] === ZeroOrOne(input,letters)
 // 	console.log(gammaRate)
 // }


for (let j = 0; j < gammaRate.length; j++)
	console.log(ZeroOrOne(input, j));


//console.log(ZeroOrOne(input, 0) + ZeroOrOne(input, 1) + ZeroOrOne(input, 2) + 
	//ZeroOrOne(input, 3) + ZeroOrOne(input, 4) + ZeroOrOne(input, 5) + ZeroOrOne(input, 6) + 
	//ZeroOrOne(input, 7) + ZeroOrOne(input, 8) )


