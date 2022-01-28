const {isSolvedColumns, isSolvedRows} = require('./isSolved')

const anyBoard = [
  [1, 0, 5, 8, 0, 2, 0, 0, 0],
  [0, 9, 0, 0, 7, 6, 4, 0, 5],
  [2, 0, 0, 4, 0, 0, 8, 1, 9],
  [0, 1, 9, 0, 0, 7, 3, 0, 6],
  [7, 6, 2, 0, 8, 3, 0, 9, 0],
  [0, 0, 0, 0, 6, 1, 0, 5, 0],
  [0, 0, 7, 6, 0, 0, 0, 3, 0],
  [4, 3, 0, 0, 2, 0, 5, 0, 1],
  [6, 0, 0, 3, 0, 8, 9, 0, 0]
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
  return (isSolvedColumns(board, coords, num) && isSolvedRows(board, coords, num));
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

  return board;
}

console.table(solve(anyBoard));
