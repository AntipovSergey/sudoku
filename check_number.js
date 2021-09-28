function checkNumber(arr, position, number) {
  const row = position[0];
  const colump = position[1];

  for (let i = 0; i < 9; i++) {
    if (+arr[i][colump] === number) {
      return false;
    }
  }

  for (let i = 0; i < 9; i++) {
    if (+arr[row][i] === number) {
      return false;
    }
  }

  let squareRow = Math.floor(row / 3) * 3;
  let squareCol = Math.floor(colump / 3) * 3;

  for (let i = squareRow; i < squareRow + 3; i++) {
    for (let j = squareCol; j < squareCol + 3; j++) {
      if (+arr[i][j] === number) {
        return false;
      }
    }
  }

  return true;
}

module.exports = checkNumber
