function verticalValidation(board, col) {
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const colDigits = [];
  for (let row = 0; row < 9; row++) {
    colDigits.push(board[row][col]);
  }
  return digits.filter((digit) => colDigits.includes(digit));
}

module.exports = verticalValidation;
