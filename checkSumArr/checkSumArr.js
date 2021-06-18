// let board = [
//   [1, 0, 5, 8, 0, 2, 0, 0, 0],
//   [0, 9, 0, 0, 7, 6, 4, 0, 5],
//   [2, 0, 0, 4, 0, 0, 8, 1, 9],
//   [0, 1, 9, 0, 0, 7, 3, 0, 6],
//   [7, 6, 2, 0, 8, 3, 0, 9, 0],
//   [0, 0, 0, 0, 6, 1, 0, 5, 0],
//   [0, 0, 7, 6, 0, 0, 0, 3, 0],
//   [4, 3, 0, 0, 2, 0, 5, 0, 1],
//   [6, 0, 0, 3, 0, 8, 9, 0, 0],
// ];

function checkSumArr(board) {
  let sum = board.reduce((a, x) => a + x.reduce((aa, y) => aa + y), 0);
   console.log(sum);
  
  if (sum === 405) {
    return true;
  } else {
    return false;
  }
}

// console.log(checkSumArr(board));


