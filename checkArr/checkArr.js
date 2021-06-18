//  let board = [
// [1, 0, 5, 8, 0, 2, 0, 0, 0],
// [0, 9, 0, 0, 7, 6, 4, 0, 5],
// [2, 0, 0, 4, 0, 0, 8, 1, 9],
// [0, 1, 9, 0, 10, 7, 3, 0, 6],
// [7, 6, 2, 0, 8, 3, 0, 9, 0],
// [0, 0, 0, 0, 6, 1, 0, 5, 0],
// [0, 0, 7, 6, 0, 0, 0, 3, 0],
// [4, 3, 0, 0, 2, 0, 5, 0, 1],
// [6, 0, 0, 3, 0, 8, 9, 0, 0]
// ];

function checkArr(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if(board[i][j] === 0) {
        return [i,j];
      }
    }
  }
  return null;
}

// console.log(checkArr(board));
