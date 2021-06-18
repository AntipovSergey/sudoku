const fs = require('fs');
const contentFromTextFile = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
const contentInObj = contentFromTextFile.split('\n').map((elem)=>{
	return elem.split(',')
})

function solve(boardString) {
  let newArr = [];
  for (let i = 0; i < boardString.length; i += 9) {
    newArr.push(boardString.slice(i, i + 9).split(""));
  }
  return newArr;
}
// console.log(solve(contentInObj[0][0]));

let board = solve(contentInObj[3][0])
// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

function isValidRow(number, board, row) {
	return board[row].includes(number)
}

function isValidCol(board, col, number) {
	let arr = []
	for (let row = 0; row < 9; row++) {
		arr.push(board[row][col])
	}
	return isValidRow(arr, row, number)
}

function isValidSquare(number, board, row, col) {
	let newArr = [];
	let rowIndex = Math.floor(row / 3) * 3;
	let colIndex = Math.floor(col / 3) * 3;
	for (let i = rowIndex; i < (rowIndex + 3); i++) {
		for (let j = colIndex; j < (colIndex + 3); j++) {
			newArr.push(board[i][j]);
		}
	}
	return isValidRow(number, newArr);
}

function isValid(board, row, col, number) {
	return (isValidRow(number, board, row) && isValidCol(board, col, number) && isValidSquare(number, board, row, col)) 
}

function isSolved(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === '-') {
        for (let number = 1; number <= 9; number++) {
          if (isValid(board, row, col, number)) {
            board[row][col] = number;
            if (isSolved(board)) return board;
            else board[row][col] = '-'
          }
        }
				return false;
      }
    }
  }
	return board;
}

console.table(isSolved(board))
// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

//Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
