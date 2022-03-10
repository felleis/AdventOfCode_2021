
import fs from 'fs';

export const importFileAsStringArray = (filename) => {
	return fs.readFileSync(filename)
		.toString()
		.split("\n");
}

export const importFileAsIntArray = (filename) => {
	return importFileAsStringArray(filename)
		.map(line => parseInt(line, 10));
}
