// const puzzle = require('./test');

const fs = require('fs');
const fileData = fs.readFileSync('./puzzles.txt', 'utf-8');

function puzzle() {
  const puzzles = fileData.split('\n').filter(line => line !== '');

  let puzzleNumber = Number(process.argv[2]) || 1;

  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }
  const strit = puzzles[puzzleNumber - 1];

  return strit;
}

function changeForm(oneSudoku) {
  let sudoku = oneSudoku();
  let board = [];
  let str = sudoku;

  for (let j = 0; j < 9; j += 1) {
    board[j] = [];
    for (let i = 0; i < 9; i += 1) {
      board[j][i] = sudoku[i];
    }
    str = sudoku.substring(9);
    sudoku = str;
  }
  return board;
}
//console.log(changeForm(puzzle));
module.exports = {puzzle, changeForm};
