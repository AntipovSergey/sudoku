const strToArr = require('./strToArr');
const findEmptyCell = require('./findEmptyCell');
const arrToStr = require('./arrToStr');
const checkBoard = require('./checkBoard');
const addNumber = require('./addNumber');

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const boardArr = strToArr(boardString);
  const cell = findEmptyCell(boardArr);
  if (cell === -1) {
    return arrToStr(boardArr);
  }
  for (let i = 1; i <= 9; i += 1) {
    const result = checkBoard(boardArr, cell, i);
    if (!result) continue;

    const newArr = addNumber(boardArr, cell, i);
    const newStr = arrToStr(newArr);
    const res = solve(newStr);
    if (res) {
      return res;
    }
    boardArr[cell[0]][cell[1]] = '-';
  }
  return null;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  return Boolean(solve(board));
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  const arr = strToArr(board).map((el) => el.join(' | '));
  const prettyArr = [];
  const str = '—' + '—|——'.repeat(8);
  for (let i = 0; i < arr.length; i += 1) {
    i === arr.length - 1 ? prettyArr.push(arr[i]) : prettyArr.push(arr[i], str);
  }

  return prettyArr.join('\n');
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
