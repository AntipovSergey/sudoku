const fs = require('fs');
const process = require('process');
const box = fs.readFileSync('puzzles.txt', 'utf-8').split('\n');
let board;


function getColumns(board) {
  const col = [];
  let mincol = [];
  const columns = {};
  if (process.argv[2] === undefined) {
    board = box[0].match(/.{9}/g).map((el) => el.split(''));
  } else {
    board = box[process.argv[2]].match(/.{9}/g).map((el) => el.split(''));
  }
  for (let i = 0; i < board.length; i++) {
    mincol = [];
    for (let j = 0; j < board[i].length; j++) {
      mincol.push(board[j][i]);
    }
    col.push(mincol);
  }
  for (let i = 1; i <= 9; i++) {
    columns[i] = col[i - 1];
  }
  return columns;
}


console.log(getColumns());

/*********************************************************************************
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
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
};
