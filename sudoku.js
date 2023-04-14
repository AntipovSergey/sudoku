/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
// const fs = require('fs');
// const readFile = fs
//   .readFileSync('./puzzles.txt', 'utf-8')
//   .split('\n')
//   .slice(0, 5);

// console.log(readFile);

function solve(boardString) {
  const board = boardString.map((el) => el.split(''));
  const array = board.map((el) => {
    const game = [];
    for (let i = 0; i < el.length; i += 9) {
      game.push(el.slice(i, i + 9));
    }
    return game;
  });
  return array.flat();
}

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
