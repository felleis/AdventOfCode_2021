
import fs from 'fs';

export const importLines = (filename) => {
	return fs.readFileSync(filename)
		.toString()
		.split("\n");
}
