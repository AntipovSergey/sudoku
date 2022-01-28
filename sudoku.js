const {solveSudokuLinear} = 'linear-sudoku';

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const lineArr = boardString.split('').map(ch => (ch === '-')? 0 : +ch);
  let sudokuArr = [];
  for (let i = 0; i < 9; i++) {
    let line = [];
    for (let j = 0; j < 9; j++){
      line.push(lineArr[i * 9 + j]);
    }
    sudokuArr.push(line);  // Создаем массив 9 х 9 с исходными цифрами. Где цифры нет, ставим 0
  }

  sudokuArr = solveSudokuLinear(sudokuArr);

  // console.log(sudokuArr);
  return sudokuArr;        // Возвращаем массив, заполненный значениями после решения Судоку
}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  return board.includes(0);
}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  let res = '\x1B[90m┌───┬───┬───┬───┬───┬───┬───┬───┬───┐\n';
  for (let i = 0; i < 9; i++) {
    let s = '';
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== 0) {
        s += (j === 8)? `\x1B[90m│ \x1B[32m${board[i][j]}` : `\x1B[90m│ \x1B[32m${board[i][j]} `;
      } else s += (j === 8)? '\x1B[90m│ \x1B[91m■' : '\x1B[90m│ \x1B[91m■ ';
    }
    res += s + '\x1B[90m │\n';
    if (i < 8) res += '\x1B[90m├───┼───┼───┼───┼───┼───┼───┼───┼───┤\n';
  }
  res += '└───┴───┴───┴───┴───┴───┴───┴───┴───┘\x1B[0m\n';
  return res;
}



// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
