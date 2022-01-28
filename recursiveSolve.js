const {isSolvedColumns, isSolvedRows} = require('./isSolved')
const isSolvedBlock = require('./isSolvedBlock');

const anyBoard = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function findFirstEmpty(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1){
      if (board[i][j] === 0) return [i,j];
    }
  }
  return -1;
}

function isBoardValidAfterInsert(board, coords, num){
  return (isSolvedColumns(board, coords, num) && isSolvedRows(board, coords, num) && isSolvedBlock(board, coords, num));
}

function solve(board) {

  const currentEmptyPos = findFirstEmpty(board);

  if(currentEmptyPos === -1) return board;

  for (let i = 1; i <= 9; i += 1) {
    if (isBoardValidAfterInsert(board, currentEmptyPos, i)) {
      board[currentEmptyPos[0]][currentEmptyPos[1]] = i;
      solve(board);
    } 
  }

  if(findFirstEmpty(board) !== -1){
    board[currentEmptyPos[0]][currentEmptyPos[1]] = 0;
  }

  return board;
}

console.table(solve(anyBoard));
