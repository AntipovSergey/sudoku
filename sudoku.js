const fs = require('fs');
const process = require('process');
const box = fs.readFileSync('puzzles.txt', 'utf-8').split('\n');
let board = getRows();

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
  let str1 = board;
  for (let i = 0; i < 9; i += 3) {
    squares[i].push(str1[i][0], str1[i][1], str1[i][2], str1[i + 1][0], str1[i + 1][1], str1[i + 1][2], str1[i + 2][0], str1[i + 2][1], str1[i + 2][2]);
    squares[i + 1].push(str1[i][3], str1[i][4], str1[i][5], str1[i + 1][3], str1[i + 1][4], str1[i + 1][5], str1[i + 2][3], str1[i + 2][4], str1[i + 2][5]);
    squares[i + 2].push(str1[i][6], str1[i][7], str1[i][8], str1[i + 1][6], str1[i + 1][7], str1[i + 1][8], str1[i + 2][6], str1[i + 2][7], str1[i + 2][8]);
  }
  return squares;
}

function solve() {

  function finding() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] === '-') {
          return [i, j];
        }
      }
    }
    return null;
  }

  function validating(number, position) {
    const [i, j] = position;
    let rows = board;
    let columns = getColumns();
    let squares = getSquares();
    switch (i) {
      case 0:
      case 1:
      case 2:
        item = 0 + Math.floor(j / 3);
        break;
      case 3:
      case 4:
      case 5:
        item = 3 + Math.floor(j / 3);
        break;
      case 6:
      case 7:
      case 8:
        item = 6 + Math.floor(j / 3);
        break;
    }

    if (rows[i].includes(number) || columns[j].includes(number) || squares[item].includes(number)) {
      return false;
    }

    return true;
  }

  function solving() {
    const item = finding();
    if (item === null) {
      return true;
    }
    for (let i = 1; i <= 9; i++) {
      const itemNum = i.toString();
      const valid = validating(itemNum, item);

      if (valid === true) {
        const [q, w] = item;
        board[q][w] = itemNum;

        if (solving()) {
          return true;
        }
        board[q][w] = '-';
      }
    }
    return false;
  }

  solving();
  return board;
}

console.log('solve', solve());

function getSum(it) {
  return it.reduce((a, b) => (+a) + (+b), 0) === 45;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(array) {
  array = solve();
  return array.every((el) => getSum(el) === true)
}

console.log('isSolved:', isSolved());

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(x) {
  x = solve();
  return x.join('\n').replaceAll(',', ' | ')
}

console.log(`prettyBoard:`);
console.log(prettyBoard());

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  isSolved,
  prettyBoard,
  getRows,
  getColumns,
  getSquares
};