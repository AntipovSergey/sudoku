const fs = require('fs');

const board = fs.readFileSync('./puzzles.txt', 'utf-8');
const arrayBoard = board.split('\n');
const boardString = arrayBoard[process.argv[2]];


function arrayFromBoard(boardString) {
  const board = [];
  let index = 0;
  for (let i = 0; i < 9; i++) {
    const row = [];
    for (let j = 0; j < 9; j++) {
      const char = boardString.charAt(index);
      if (char === '-') {
        row.push(0);
      } else {
        row.push(parseInt(char));
      }
      index++;
    }
    board.push(row);
  }
  return board
}
arrayFromBoard(boardString);
const boardArrays = arrayFromBoard(boardString);

module.exports = {arrayFromBoard};
