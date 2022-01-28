

const anyBoard = [
  [ 5, 5, 0, 6, 2, 0, 9, 1, 2 ],
  [ 6, 7, 2, 1, 9, 5, 0, 0, 8 ],
  [ 1, 0, 8, 3, 0, 2, 5, 6, 7 ],
  [ 8, 5, 0, 7, 6, 1, 4, 2, 0 ],
  [ 0, 2, 6, 8, 5, 3, 7, 9, 1 ],
  [ 7, 1, 3, 0, 2, 0, 8, 5, 6 ],
  [ 9, 6, 1, 5, 3, 7, 2, 0, 4 ],
  [ 2, 8, 7, 0, 1, 9, 6, 3, 5 ],
  [ 3, 4, 5, 2, 8, 6, 1, 7, 9 ],
];

function findFirstEmpty(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1){
      if (board[i][j] === 0) return [i,j]
    }
  }
}

function solve(board) {
  let copyOfBoard = [...board];

  for (let i = 1; i <= 9; i += 1) {
    const currentEmptyPos = findFirstEmpty(copyOfBoard);
    
    copyOfBoard[currentEmptyPos[0],currentEmptyPos[1]] = i;

    solve(board)
  }

  return board;
}

console.table(solve(anyBoard));
