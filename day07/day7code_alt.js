// function howMuchFuel (distance) {
// 	let fuel = 0
// 	for (let i = 1; i < (distance+1); i++) {
// 		fuel = fuel + i; 
// 	}
// 	return fuel;
// }
 
// //console.log(verticalPositions.length)
// let summedUpPositions = 0

// for (let i = 0; i < verticalPositions.length; i++) {
// 	summedUpPositions = summedUpPositions + verticalPositions[i]
// }
// let averagePosition = Math.round(summedUpPositions / verticalPositions.length) // FIXME Math.floor

// //console.log('The destination position is: ' + averagePosition)

// let fuelVer2 = 0

// for (let indivCrab = 0; indivCrab < verticalPositions.length; indivCrab++) {
// 	let indivCrabMovement = 0; 
// 	indivCrabMovement = Math.abs(verticalPositions[indivCrab]-averagePosition); 
// 	let indivCrabFuelNeeded = 0; 
// 	//indivCrabFuelNeeded = howMuchFuel(indivCrabMovement); 
// 	indivCrabFuelNeeded = indivCrabMovement*(indivCrabMovement+1)/2 
// 	console.log(
// 		'Crab ' + indivCrab + ' from ' + verticalPositions[indivCrab] + ' to ' + averagePosition + 
// 		' moves ' + indivCrabMovement + ' positions and needs ' + indivCrabFuelNeeded + ' Fuel'
// 	); 
// 	fuelVer2 = fuelVer2 + indivCrabFuelNeeded; 
// }

// console.log('Fuel cost for task 2: ' + fuelVer2);






// verticalPositions = [16,1,2,0,4,2,7,1,2,14] /// Test with example positions from prompt --> works


// function avg(array) {
// 	const sum = array.reduce((a, b) => a + b, 0);
// 	const avg = (sum / array.length) || 0;
// 	return avg;
// }

function fuelCosts(distance) {
	let fuel = 0;
	for (let i = 1; i <= distance; i++) {
		fuel = fuel + i;
	}
	return fuel;
}

// 1.1 2.3 3.6 4.10 5.15 6.21

// const avgPos = Math.round(avg(verticalPositions));
// console.log(avgPos)


let minFuelSum = 99999999999999999999999;


for (let i = 0; i < 1000; i++) {

	let fuelSum = 0;
	for (let crabPos of verticalPositions) {
		// const distance = Math.abs(avgPos - crabPos);
		const distance = Math.abs(i - crabPos);
		fuelSum = fuelSum + fuelCosts(distance);

		// console.log(
			// 'Crab ' + crabPos + ' from ' + verticalPositions[crabPos] + ' to ' + avgPos + 
			// ' moves ' + distance + ' positions and needs ' + fuelCosts(distance) + ' Fuel'
		// ); 
	}

	if (fuelSum < minFuelSum) {
		minFuelSum = fuelSum;
		// console.log(i, avgPos);
	}
}

// console.log(fuelSum);
console.log(minFuelSum);



let smallerThanAverage = 0 ;
let greaterThanAverage = 0 ;
verticalPositions.forEach(x => {
	if (x <= 478) {
		smallerThanAverage++
	} else if (x >= 479) {
		greaterThanAverage++
	};
console.log(smallerThanAverage, greaterThanAverage) 
})
