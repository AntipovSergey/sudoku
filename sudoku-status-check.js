// let arr = [
//   [1, 0, 5, 8, 0, 2, 0, 0, 0],
//   [0, 9, 0, 0, 7, 6, 4, 0, 5],
//   [2, 0, 0, 4, 0, 0, 8, 1, 9],
//   [0, 1, 9, 0, 0, 7, 3, 0, 6],
//   [7, 6, 2, 0, 8, 3, 0, 9, 0],
//   [0, 0, 0, 0, 6, 1, 0, 5, 0],
//   [0, 0, 7, 6, 0, 0, 0, 3, 4],
//   [4, 3, 0, 0, 2, 0, 5, 0, 1],
//   [6, 0, 0, 3, 0, 8, 9, 0, 0],
// ];

function checkSudokuStatus(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

module.exports = checkSudokuStatus;
