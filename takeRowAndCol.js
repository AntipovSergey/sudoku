const takeRowAndCol(arr) {
  for (let row = 0; row < 9; row += 1) {
    for (let col = 0; col < 9; col += 1) {
      if (arr[row][col] === '-') {
        let point = [row, col];
        return point;
      }
    }
  }
};
