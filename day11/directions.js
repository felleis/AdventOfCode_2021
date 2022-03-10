
export function left(input, pos) {
	if(pos.x - 1 < 0) {
		return undefined;
	} 

	let leftPos = {
		x: pos.x-1, 
		y: pos.y
	};	
	return leftPos;
} 

export function right(input, pos) {
	if(pos.x + 1 >= input[pos.y].length) {
		return undefined;
	}

	let rightPos = {
		x: pos.x + 1,
		y: pos.y
	};
	return rightPos;
}

export function up(input, pos) {
	if(pos.y - 1 < 0) {
		return undefined;
	}

	let upPos = {
		x: pos.x,
		y: pos.y - 1
	};
	return upPos;
}

export function down(input, pos) {
	if (pos.y + 1 >= input.length) {
		return undefined;
	}

	let downPos = {
		x: pos.x,
		y: pos.y + 1
	};
	return downPos;
}

export function upLeft(input, pos) {
	let upPos = up(input, pos);
	if (upPos === undefined) {
		return undefined;
	}

	let upLeftPos = left(input, upPos); 
}

export function upRight(input, pos) {
	let upPos = up(input, pos);
	if (upPos === undefined) {
		return undefined;
	}

	let upRightPos = right(input, upPos);
	return upRightPos;
}

export function downLeft(input, pos) {
	let downPos = down(input, pos); 
	if (downPos === undefined) {
		return undefined;
	}

	let downLeftPos = left(input, downPos);
	return downLeftPos;
}

export function downRight(input, pos) {
	let downPos = down(input, pos); 
	if (downPos === undefined) {
		return undefined;
	}

	let downRightPos = right(input, downPos);
	return downRightPos;
}
