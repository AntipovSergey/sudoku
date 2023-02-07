function findEmptyCell(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === '-') {
        return [i, j];
      }
    }
  }
  return -1;
}

module.exports = findEmptyCell;
