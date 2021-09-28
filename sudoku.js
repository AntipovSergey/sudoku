//Takes an index of sudoku from .txt file
//Converts into nested arrays with 9 elem-s
//Returns result [[1, '-', 2, 3, 4, '-', 6, '-', 8, 9], [...]]
function pars(index) {
	// const fs = require("fs");

	let filePath = "./sudoku-puzzles.txt";
	// let allSudoku = fs.readFileSync(filePath, "utf8").split("\n");
  let allSudoku = [
  '1 58 2    9  764 52  4  819 19  73 6762 83 9     61 5   76   3 43  2 5 16  3 89  ',
  '  5 3  819 285  6 6    4 5   74 283 34976   5  83  49 15  87  2 9    6   26 495 3',
  '29 5    77     4    4738 129 2  3 648   5  7 5   672  3 9  4  5    8 7   87  51 9',
  ' 8  2     4 5  32  2 3 9 466   9   4   64 5 1134 5 7  36   4  24 723 6     7  45 ',
  '6 873    2     46     6482  8   57 19  618  4 31    8 86 2   39 5    1  1  4562  ',
  '   6891  8      2915      84 3    5 2    5    9 24 8 1 847  91 5      6  6 41    ',
  ' 3 5  8 45 42   1   8  9   79 8 61 3     54   5      78     7 2   7 46  61 3  5  ',
  ' 96 4   11   6   45 481 39   795  43 3  8    4 5 23 18 1 63  59 59 7 83   359   7',
  '    754          8 8 19    3    1 6        34    6817 2 4   6 39      2 53 2     ',
  '3         5 7 3  8    28 7 7      43           39 41 54  3  8  1   4    968   2  ',
  '3 26 9  55  73          9     94          1 9    57 6   85    6        3 19 82 4 ',
  ' 2 5    48 5        48 9 2      5 73 9     6 25 9      3 6 18        4 71    4 9 ',
  '  7  8      2   6 65  79    7    3 5 83   67 2 1    8    71  38 2   5      4  2  ',
  '          2 65       18  4  9    6 4 3   57                   73      9          ',
  '                                                                                 ',
  ''
]


	let count = [0,0];
	let res = [[], [], [], [], [], [], [], [], []];

	for (let i of allSudoku[index]) {
		(i != ' ') ? res[count[1]].push(Number(i)) : res[count[1]].push(i);
		count[0]++;
		(count[0] % 9 === 0) ? count[1]++ : null;
	}
	return res
}

// console.table(pars(0));

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

//console.log(correctNum(pars(0), 3, 0, 1));


// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(arrBoard) {
  const size = 9;

  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (arrBoard[r][c] === ' ') {
        for (let num = 9; num >= 1; num--) {
          if (correctNum(arrBoard, num, r, c) === true) {
            arrBoard[r][c] = num;
            if (solve(arrBoard)) {
              return arrBoard;
            }
            arrBoard[r][c] = ' ';
          }
        }
        return false;
      }
    }
  }
  return arrBoard;
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

// console.log(prettyBoard(solve(pars(0))));
console.table(solve(pars(1)))

// Exports all the functions to use them in another file.
/*
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard,
  pars
}
*/
