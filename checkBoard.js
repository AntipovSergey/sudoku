const checkCol = require('./checkCol');
const checkRow = require('./checkRow');
const checkSquare = require('./checkSquare');

function checkBoard(board, coords, value) {
  return (
    checkSquare(board, coords, value)
    && checkCol(board, coords, value)
    && checkRow(board, coords, value)
  );
}

module.exports = checkBoard;
