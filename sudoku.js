// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {  //reshenie

}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) { //validator

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) { //выводит доску

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}

let sudoku = [
  ['3','.','4','.'],
  ['.','1','.','2'],
  ['.','4','.','3'],
  ['2','.','1','.']  
]



const validate = (num, pos, board) => {
  const [r,c] = pos;
  //Проверка на уникальность в строке
  for (let i = 0; i < size; i++) {
    if (board[i][c] === num && i !== r) { 
      return false;
    }
  }

  //Проверка на уникальность в колонках
  for (let i = 0; i < size; i++) {
    if (board[r][i] === num && i !== c)
      return false;
  }

  //Проверка на уникальность в секции/квадрате
  const boxRow = Math.floor(r / boxSize) * boxSize;
  const boxCol = Math.floor(c / boxSize) * boxSize; // получаем начало сектора

  for (let i = boxRow; i < boxRow + boxSize; i++) {
    for (let j = boxCol; j < boxCol + boxSize; j++) {
      if (board[i][j] === num && i !== r && j !== c) {
        return false;
      }
    }
  }
  return true;
}


