//Takes an index of sudoku from .txt file
//Converts into nested arrays with 9 elem-s
//Returns result [[1, '-', 2, 3, 4, '-', 6, '-', 8, 9], [...]]
function pars(index) {
	const fs = require("fs");

	let filePath = "./sudoku-puzzles.txt";
	let allSudoku = fs.readFileSync(filePath, "utf8").split("\n");
	let count = [0,0];
	let res = [[], [], [], [], [], [], [], [], []];

	for (let i of allSudoku[index]) {
		(i != '-') ? res[count[1]].push(Number(i)) : res[count[1]].push(i);
		count[0]++;
		(count[0] % 9 === 0) ? count[1]++ : null;
	}
	return res
}

console.table(pars(0));

//
function correctNum(arrBoard, num, r, c) {
	const obj = {
    0: 0, 1: 0, 2: 0, 3: 3, 4: 3, 5: 3, 6: 6, 7: 6, 8: 6,
  };

	for (let i =0; i < arrBoard.length; i++) {
		if (arrBoard[r][i] === num) {
			return false;
		}
		if (arrBoard[i][c] === num) {
			return false;
		}
	}
	for (let j = obj[r]; j <= obj[r] + 2; j++) {
		for (let x = obj[c]; x <= obj[c] + 2; x++) {
			if(arrBoard[obj[r]][obj[c]] === num) {
				return false;
			}
		}
	}

	return true
}

console.log(correctNum(pars(0), 3, 0, 1));


// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(arrBoard) {
  const size = 9;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (arrBoard[r][c] === '-') {
        for (let num = 9; num >= 1; num--) {
          if (correctNum(arrBoard, num, r, c) === true) {
            arrBoard[r][c] = num;
            if (solve(arrBoard)) {
              return true;
            }
            arrBoard[r][c] = '-';
          }
        }
      }
    }
  }
  return false
}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  return board.join(' ').replace(/(..................)/g, "$1\n");
}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
