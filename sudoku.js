/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  const arrBoard = [];

  for (let i = 0; i < boardString.length; i += 9) {
    arrBoard.push(boardString.slice(i, i + 9).split(''));
  }

  return arrBoard;
}

const str ='1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
const ArrArr = solve(str);

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

function search(ArrArr) {
  const newArr = [];

  for (let y = 0; y < ArrArr.length; y += 1) {
    for (let x = 0; x < ArrArr.length; x += 1) {
      if (ArrArr[y][x] === '-') {
        newArr.push([y, x]);
      }
    }
  }

  return newArr;
}
console.log(search(ArrArr));
