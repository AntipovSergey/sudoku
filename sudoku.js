/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const { table } = require('console');
const fs = require('fs');

function solve(boardString) {
  const newArr = [];
  const preBoard = boardString.split('');
  const def = '';
  // const arr = [];
  for (let i = 0; i < preBoard.length; i += 9) {
    newArr.push(preBoard.slice(i, i + 9));
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[i][j] === '-') {
        newArr[i][j] = 0;
      } else {
        newArr[i][j] = Number(newArr[i][j]);
      }
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      // newArr[i][j] = 1;
      if (!newArr[i].indexOf(1) === newArr[i].lastIndexOf(1)) {
        newArr[i][j] += 1;
      }
    }
  }
  return newArr;
}

console.table(solve('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'));

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
