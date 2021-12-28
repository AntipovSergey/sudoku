function getCurrentSquare(row, col, arr) {
  const result = [];
  const leftCol = Math.floor(col / 3) * 3;
  const topRow = Math.floor(row / 3) * 3;

  for (let i = topRow; row < topRow + 3; i += 1) {
    for (let j = leftCol; col < leftCol + 3; j += 1) {
      if (arr[i][j] !== '-') {
        result.push(+arr[i][j]);
      }
    }
  }
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item) => !result.includes(item));
}

console.log();
