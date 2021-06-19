const fs = require('fs');
const contentFromTextFile = fs.readFileSync('/home/ites/Documents/Elbrus/Phase 1/1w5d/project-sudoku/sudoku-puzzles.txt', 'utf-8');

function solve(boardString) {
  boardString = boardString.replace(/-/g, 0)
  let newArr = [];
  for (let i = 0; i < boardString.length; i += 9) {
    newArr.push(boardString.slice(i, i + 9).split('').map((a) => a = +a));
  }
  return newArr;
}

function isValidRow(number, board, row) {
  return board[row].includes(number)
}

function isValidCol(board, col, number, row) {
	let arr = []
	for (let i = 0; i < 9; i++) {
		arr.push(board[i][col])
	}
	return arr.includes(number)
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
	return newArr.includes(number);
}

function isValid(board, row, col, number) {
	return (!isValidRow(number, board, row) && !isValidCol(board, col, number, row) && !isValidSquare(number, board, row, col)  ) 
}

function isSolved(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === 0) {
        for (let number = 1; number <= 9; number++) {
          if (isValid(board, row, col, number)) {
            board[row][col] = number;
            if (isSolved(board)) return board;
            else board[row][col] = 0
          }
        }
				return false;
      }
    }
  }
	return board;
}

function prettyBoard(board) {
  console.table(isSolved(board))
}

module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
