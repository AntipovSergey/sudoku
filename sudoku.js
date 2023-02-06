const strToArr = require('./strToArr');
const findEmptyCell = require('./findEmptyCell');
const arrToStr = require('./arrToStr');
const checkBoard = require('./checkBoard');
const addNumber = require('./addNumber');

const TEST = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const boardArr = strToArr(boardString);
  const cell = findEmptyCell(boardArr);
  console.log('cell', cell);
  // return cell;
  if (cell === -1) {
    return arrToStr(boardArr);
  }
  for (let i = 1; i < 9; i++) {
    const result = checkBoard(boardArr, cell, i);
    console.log(result);
    if (!result) continue;
    
    const newArr = addNumber(boardArr, cell, i);
    console.table(newArr);
    const newStr = arrToStr(newArr);
    console.log(newStr);
    return solve(newStr);
  }
  // return newStr;
}
console.log(solve(TEST));
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
