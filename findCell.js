const sudoku = require('./sudoku');

const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

const board = [
  ['2', '9', '-', '5', '-', '-', '-', '-', '7'],
  ['7', '-', '-', '-', '-', '-', '4', '-', '-'],
  ['-', '-', '4', '7', '3', '8', '-', '1', '2'],
  ['9', '-', '2', '-', '-', '3', '-', '6', '4'],
  ['8', '-', '-', '-', '5', '-', '-', '7', '-'],
  ['5', '-', '-', '-', '6', '7', '2', '-', '-'],
  ['3', '-', '9', '-', '-', '4', '-', '-', '5'],
  ['-', '-', '-', '-', '8', '-', '7', '-', '-'],
  ['-', '8', '7', '-', '-', '5', '1', '-', '9'],
];
function findCell(board) {
  let coords = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === '-') {
        coords.push(i, j);
        //console.log(coords);
        return coords;
      }
    }
  }
  return false;
}
findCell(board);
////////////////////////////////////////////////////////////////
function checkRow(board, findCell, arr) {
  const emptyCell = findCell(board);
  const row = board[emptyCell[0]].map(el => el);
  const diff = arr.filter(el => {
    if (!row.includes(el)) return el;
  });
  // safe char if length = 1
  return diff;
}
checkRow(board, findCell, arr);

////////////////////////////////////////////////////////////////

function checkCol(board, findCell, checkRow) {
  const emptyCell = findCell(board);
  const sorted = checkRow(board, findCell, arr);
  //console.log(emptyCell);
  const col = board.map(el => el[emptyCell[1]]);

  const diff = sorted.filter(el => {
    if (!col.includes(el)) return el;
  });
  return diff;
}
checkCol(board, findCell, checkRow);
////////////////////////////////////////////////////
function safeCheckDate(board, findCell, checkRow, checkCol) {


}
module.exports = { findCell, checkRow, checkCol, safeCheckDate };
