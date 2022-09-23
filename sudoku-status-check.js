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
