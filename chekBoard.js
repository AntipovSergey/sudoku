const checkRow = require('./checkRow');
const checkCol = require('./checkCol');
const checkSquare = require('./checkSquare');

function checkBoard(board, coords, value) {
  return (
    checkRow(board, coords, value) &&
    checkCol(board, coords, value) &&
    checkSquare(board, coords, value)
  );
}
module.exports = {
  checkBoard,
};
