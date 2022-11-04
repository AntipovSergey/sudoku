const array = [
  [
    '1', '-', '5', '8', '-', '2', '-', '-', '-',
  ],
  [
    '-', '9', '-', '-', '7', '6', '4', '-', '5',
  ],
  [
    '2', '-', '-', '4', '-', '-', '8', '1', '9',
  ],
  [
    '-', '1', '9', '-', '-', '7', '3', '-', '6',
  ],
  [
    '7', '6', '2', '-', '8', '3', '-', '9', '-',
  ],
  [
    '-', '-', '-', '-', '6', '1', '-', '5', '-',
  ],
  [
    '-', '-', '7', '6', '-', '-', '-', '3', '-',
  ],
  [
    '4', '3', '-', '-', '2', '-', '5', '-', '1',
  ],
  [
    '6', '-', '-', '3', '-', '8', '9', '-', '-',
  ],
];
console.table(array);

function squareValidation(board, row, col, element) {
  for (let i = 0; i < 9; i++) {
    const squareRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const squareColumn = 3 * Math.floor(col / 3) + (i % 3);
    if (board[squareRow][squareColumn] === element) return false;
  }
  return true;
}

console.log(squareValidation(array, 1, 1, '3'));
