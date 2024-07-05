const checkRows = require('./checkRows');
const checkColumns = require('./checkColumns');
const checkBox = require('./checkBox');

function isValid(puzzle, num, row, col) {
  return (
    checkBox(puzzle, num, row, col) &&
    checkColumns(puzzle, num, row, col) &&
    checkRows(puzzle, num, row, col)
  );
}

module.exports = { isValid };
