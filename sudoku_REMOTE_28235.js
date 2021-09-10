// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function boardToArray(sudokuString) {
  const arrayOfString = sudokuString.match(/.{9}/g);
  const nestedArrayOfString = arrayOfString.map((el) => el.split(""));
  const nestedArrayNumbers = nestedArrayOfString.map((el) =>
    el.map((element) =>
      element === "-" ? (element = "-") : (element = +element)
    )
  );
  return nestedArrayNumbers;
}

function solve(boardString) {}

function validator (curNum, board ,curPos) {
	//row validation
	for(let i = 0; i <= size; i++) if(board[curPos.y][i] === curNum) return false; 
	//column validation
	for(let i = 0; i <= size; i++) if(board[i][curPos.x] === curNum) return false; 
	//box validation
	const startBoxCoordinateX = Math.floor(curpos.x / 3);
	const startBoxCoordinateY = Math.floor(curpos.y / 3);
	for(let i = startBoxCoordinateY; i < 3; i++) {
		for(let j = startBoxCoordinateX; k+j < 3; j++) return false;
	}
	return true;
};


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.

function prettyBoard(nestedArrayNumbers) {
  let prettySudoku = "\n";
  for (let i = 0; i < nestedArrayNumbers.length; i++) {
    prettySudoku += `${nestedArrayNumbers[i].join("  ")}\n` + `\n`;
  }
  return prettySudoku;
}
console.log(prettyBoard(sudoku));

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
