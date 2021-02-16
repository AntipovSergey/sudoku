const strToArr = require('./strtoarr');
const { prettyBoard } = require('./sudoku');

function getThreeEmptyInColumn(board) {
  let tmpArr = [...board]; // если сломалось смотреть сюда
  let result = [];
  let possible = [];
  // console.log(prettyBoard(board));

  for (let x = 0; x < board.length; x++) {
    let rowNum = x;
    for (let y = 0; y < board.length; y++) {
      if (tmpArr[y][x] === '-') {
        possible.push([y, x]);
      }
    }

    if (possible.length <= 3) {
      let str = '';
      for (let k = 0; k < board.length; k++) {
        if (tmpArr[k][rowNum] !== '-') str += tmpArr[k][rowNum];
      }
      for (let k = 1; k <= 9; k++) {
        if (!str.split('').includes(k.toString())) {
          possible.push(k.toString());
        }
      }
      result.push(JSON.parse(JSON.stringify(possible)));
      possible.length = 0;
    }
  }
  return result;
}

// const board = strToArr('61873----24----46-3---6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--');
// console.log(getThreeEmptyInColumn(board));

module.exports = getThreeEmptyInColumn;
