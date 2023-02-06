const checkCol = require('./checkCol');
const checkRow = require('./checkRow');
const checkSquare = require('./checkSquare');

// const strToArr = require('./strToArr');
// const findEmptyCell = require('./findEmptyCell');
// const arrToStr = require('./arrToStr');
// // const checkBoard = require('./checkBoard');
// const addNumber = require('./addNumber');
// const TEST = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function checkBoard(board, coords, value) {
  return (
    checkSquare(board, coords, value) &&
    checkCol(board, coords, value) &&
    checkRow(board, coords, value)
  );
}

// console.log(checkBoard(strToArr(TEST)), [0, 1], 5);

module.exports = checkBoard;
