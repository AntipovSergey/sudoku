const board = [
  [
    '-', '-', '-',
    '6', '8', '9',
    '1', '-', '-',
  ],
  [
    '8', '-', '-',
    '-', '-', '-',
    '-', '2', '9',
  ],
  [
    '1', '5', '-',
    '-', '-', '-',
    '-', '-', '8',
  ],
  [
    '4', '-', '3',
    '-', '-', '-',
    '-', '5', '-',
  ],
  [
    '2', '-', '-',
    '-', '-', '5',
    '-', '-', '-',
  ],
  [
    '-', '9', '-',
    '2', '4', '-',
    '8', '-', '1',
  ],
  [
    '-', '8', '4',
    '7', '-', '-',
    '9', '1', '-',
  ],
  [
    '5', '-', '-',
    '-', '-', '-',
    '-', '6', '-',
  ],
  [
    '-', '6', '-',
    '4', '1', '-',
    '-', '-', '-',
  ],
];

function isSolved(board) {
  let nonPossibilities = {}; let impossibleNumber; let
    emptySpaces = 81;
  for (let vert = 0; vert < board.length; vert++) {
    for (let horz = 0; horz < board.length; horz++) {
      if (board[vert][horz] === '-') {
        nonPossibilities = {};
        for (let i = 0; i < 9; i++) {
          if (board[vert][i] > 0) {
            nonPossibilities[board[vert][i]] = true;
          }
          if (board[i][horz] > 0) {
            nonPossibilities[board[i][horz]] = true;
          }
          console.log(nonPossibilities);
        }
        for (let vertBox = Math.floor(vert / 3) * 3; vertBox < Math.floor(vert / 3) * 3 + 3; vertBox++) {
          for (let horzBox = Math.floor(horz / 3) * 3; horzBox < Math.floor(horz / 3) * 3 + 3; horzBox++) {
            if (board[vertBox][horzBox]) {
              nonPossibilities[board[vertBox][horzBox]] = true;
            }
          }
        }
        impossibleNumber = Object.keys(nonPossibilities);
        if (impossibleNumber.length === 8) {
          for (let i = 0; i < 10; i++) {
            if (impossibleNumber.indexOf((i.toString()) < 0)) {
              board[vert][horz] = i;
            }
          }
        } else {
          emptySpaces++;
        }
      }
    }
  }
  return board;
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = { isSolved };
