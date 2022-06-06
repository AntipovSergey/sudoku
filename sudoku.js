// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
	const solveInner = () => {
		const currPos = findEmpty(arr);

		if (currPos === null) {
			return true;
		}
		for (let i = 1; i < size + 1; i++) {
			const currNum = i.toString();
			const isValid = validate(currNum, currPos, arr);
			// console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
			if (isValid) {
				const [x, y] = currPos;
				arr[x][y] = currNum;

				if (solveInner()) {
					return true;
				}
				arr[x][y] = '-';
			}
		}
		return false;
	};
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
}
isSolved()
// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
}




// Exports all the functions to use them in another file.
module.exports = {
	solve,
	isSolved,
	prettyBoard,
};
