/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const fs = require('fs');
const boardString = fs.readFileSync('./puzzles.txt', 'utf8');

function solve(text) {
  const arr = boardString.split('\n');
  const arr2 = arr[0].split('').map((el) => (el !== '-' ? Number(el) : el));
  const res = [];
  for (let i = 0; i < arr2.length; i += 9) {
    const slice = arr2.slice(i, i + 9);
    res.push(slice);
  }
  console.log(res);
  return res;
}
solve(boardString);
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(num, position, bord) {
  const [r, c] = position;

  // проверка по строке
  for (let i = 0; i < size; i++) {
    if (bord[i][c] === num && i !== r) {
      return false;
    }

    // console.log(bordValidate(num, c, bord));
  }
  // проверка по колонке
  for (let i = 0; i < size; i++) {
    if (bord[i][r] === num && i !== c) {
      return false;
    }
  }
}

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
