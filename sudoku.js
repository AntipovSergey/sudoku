const fs = require('fs');
const process = require('process');
const box = fs.readFileSync('puzzles.txt', 'utf-8').split('\n');

function getRows() {
  let rows = [];
  if (process.argv[2] === undefined) {
    rows = box[0].match(/.{9}/g).map((el) => el.split(''));
  } else {
    rows = box[process.argv[2]].match(/.{9}/g).map((el) => el.split(''));
  }
  return rows;
}

function getColumns() {
  const columns = [];
  let mincol = [];
  let board = getRows();
  for (let i = 0; i < board.length; i++) {
    mincol = [];
    for (let j = 0; j < board[i].length; j++) {
      mincol.push(board[j][i]);
    }
    columns.push(mincol);
  }
  return columns;
}

function getSquares() {
  const squares = [[], [], [], [], [], [], [], [], []];
  let str1 = getRows();
  for (let i = 0; i < 9; i += 3) {
    squares[i].push(str1[i][0], str1[i][1], str1[i][2], str1[i + 1][0], str1[i + 1][1], str1[i + 1][2], str1[i + 2][0], str1[i + 2][1], str1[i + 2][2]);
    squares[i + 1].push(str1[i][3], str1[i][4], str1[i][5], str1[i + 1][3], str1[i + 1][4], str1[i + 1][5], str1[i + 2][3], str1[i + 2][4], str1[i + 2][5]);
    squares[i + 2].push(str1[i][6], str1[i][7], str1[i][8], str1[i + 1][6], str1[i + 1][7], str1[i + 1][8], str1[i + 2][6], str1[i + 2][7], str1[i + 2][8]);
  }
  return squares;
}

function validating() {
  const [a, b] = finding();
  let item = 0,
  rows = getRows(),
  columns = getColumns(),
  squares = getSquares();
  switch (a) {
    case 0:
    case 1:
    case 2:
      item = 0 + Math.floor(b / 3);
      break;
    case 3:
    case 4:
    case 5:
      item = 3 + Math.floor(b / 3);
      break;
    case 6:
    case 7:
    case 8:
      item = 6 + Math.floor(b / 3);
      break;
  }

  for (let i = 1; i <= 9; i++) {
    if (rows[a].includes(i) || columns[b].includes(i) || squares[item].includes(i)) {
      return false;
    }
  }
}

function finding() {
  for (let a = 0; a < 9; a++) {
    for (let b = 0; b < 9; b++) {
      if (board[a][b] === '-') {
        return [a, b];
      }
    }
  }
  return null;
}

function solve(boardString) {

}



/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  getRows,
  getColumns,
  getSquares
};