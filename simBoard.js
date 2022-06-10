const fs = require('fs');

function createBoard() {
  let allBoards = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8').split('\n');
  let firstBoard = allBoards[0].split('');
  let board = [];
  for (let i = 0; i < 81; i += 9) {
    board.push(firstBoard.slice(i, i + 9));
  }
  return board;
}

function createAllBoard() {
  let allBoard = fs
    .readFileSync('./sudoku-puzzles.txt', 'utf-8')
    .trim()
    .split('\n');
  let allBoards = [];
  for (let i = 0; i < allBoard.length; i += 1) {
    let board = [];
    for (let j = 0; j < 81; j += 9) {
      board.push(allBoard[i].split('').slice(j, j + 9));
    }
    allBoards.push(board);
  }
  return allBoards;
}

// console.log(createAllBoard());
// module.exports = createBoard;
module.exports = createAllBoard;
