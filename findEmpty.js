function findEmpty(input) {
  const size = 9;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (input[row][col] === '-') {
        return [row, col];
      }
    }
  }
  return null;
}

module.exports = findEmpty;
