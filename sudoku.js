const { Console } = require('console');
const fs = require('fs');
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const read = fs.readFileSync('./puzzles.txt', 'utf-8');
const slice = read.slice(0, 81);
// function boardString() {
//   return read.slice(0, 82)
// }
function solve(boardString) {
  const split = boardString.split('');
  for (let i = 9; i < split.length; i += 10) {
    split.splice(i, 0, ',');
  }
  const table = split.join('').split(',').map((x) => x.split('')); // превратить просто в переменную, с которой работать дальше

  // ----- Поиск пустых клеток----------

  function findEmpty(table) {
    for (let i = 0; i < table.length; i++) {
      for (let j = 0; j < table.length; j++) {
        if (table[i][j] === '-') {
          return [i, j];
        }
      }
    }
    return null;
  }

  // -------Проверка по строкам--------
  const marker = 0;

  function checkRows(table, pos, num) {
    const [i, j] = pos;
    for (let h = 0; h < table.length; h++) {
      if (table[h][j] === num && h !== i) return false;
    }

    for (let h = 0; h < table.length; h++) {
      if (table[i][h] === num && h !== j) return false;
    }

    // for (let h = o; h < table.length; h++) {
    //   h = String(h)
    //     if (table[i][j].includes(String(j))) {
    //       return false
    //     }
    //     return true
    // }
  }
}

console.table(solve(slice));

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
