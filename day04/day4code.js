
import { importFileAsStringArray } from './importer.js';

let filename = 'inputday4.txt';

let input = importFileAsStringArray(filename);

function replaceDoubleSpacesWithSpace(text) {
	if (text.includes('  ') === false) {
		if (text.startsWith(' ')) {			//if text starts with space, delete space
			return text.replace(' ','');
		} else {
			return text;
		}
	}
	text = text.replace('  ', ' ');
	return replaceDoubleSpacesWithSpace(text);
};

function checkHorizontal(bingoSheet) {
	for (let bingoSheetLine of bingoSheet) {
		if (bingoSheetLine.join('') === 'xxxxx') {
			return true;
		}	
	} 
	return false;
}


function checkVertical(bingoSheet) {
	for(let g = 0; g < bingoSheet.length; g++) {
		let checkedNo = 0 
		for (let bingoSheetLine of bingoSheet) {
			if (bingoSheetLine[g] === 'x') {
				checkedNo = checkedNo + 1;
				if (checkedNo === 5) {
					return true;
				}
			}	
		}
	}
	return false;
}

function sumUpNonX(bingoSheet) {
	let sum = 0 
	for (let line of bingoSheet) {
		for (let digit of line) {
			if (digit !== 'x') {
				digit = parseInt(digit, 10)
				sum = sum + digit
			}
		}
	}
	return sum
}

let callSequence = input[0].split(',');

//console.log(CallSequence)


let bingoSheetsAll = [];


for (let bingoSheetIndex = 0; bingoSheetIndex < (input.length-2); bingoSheetIndex = bingoSheetIndex + 6) {
	

	let bingoSheet = [
		replaceDoubleSpacesWithSpace(input[bingoSheetIndex + 2]).split(' '), 
		replaceDoubleSpacesWithSpace(input[bingoSheetIndex + 3]).split(' '), 
		replaceDoubleSpacesWithSpace(input[bingoSheetIndex + 4]).split(' '), 
		replaceDoubleSpacesWithSpace(input[bingoSheetIndex + 5]).split(' '),
		replaceDoubleSpacesWithSpace(input[bingoSheetIndex + 6]).split(' ') 
	] ; 
	//console.log(BingoSheet) 
	bingoSheetsAll.push(bingoSheet);
}


function loopdiloop(bingoSheetsAll, callSequence) {
	for (let calls of callSequence) {
		//console.log(calls)
		for(let i = 0; i < bingoSheetsAll.length; i++) {
			for (let j = 0; j < bingoSheetsAll[i].length; j++) {
				for(let k = 0; k < bingoSheetsAll[i][j].length; k++) {
					if (bingoSheetsAll[i][j][k] === calls) {
						bingoSheetsAll[i][j][k] = 'x'; 
						if (checkVertical(bingoSheetsAll[i])) {
							console.log('BINGO!!!');
							console.log('The final number called is ', calls)
							console.log('The winner is board ', i); 
							console.log(bingoSheetsAll[i]);
							let sum = sumUpNonX(bingoSheetsAll[i]);
							console.log('The end score is ', calls*sum);
							return; 
						
						} else {
							if(checkHorizontal(bingoSheetsAll[i])) {
								console.log('BINGO!!!');
								console.log('The final number called is ', calls)
								console.log('The winner is board ', i); 
								console.log(bingoSheetsAll[i]);
								let sum = sumUpNonX(bingoSheetsAll[i]);
								console.log('The end score is ', calls*sum);
								return;
							}
						}

					}
				}
			}
		}
	}


//	if (calls === "25") {
//		console.log(bingoSheetsAll[0]);
//	};
};


loopdiloop(bingoSheetsAll, callSequence)


//console.log(bingoSheetsAll[0][0][0])
