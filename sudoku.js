// const { Cell } = require('./Cell');

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  console.log('~ boardString', boardString);
  // eslint-disable-next-line max-len
  const cellMap = Array.from({ length: 9 }, (_, rowInd) => boardString.substring(rowInd * 9, (rowInd + 1) * 9));
  cellMap.forEach((row, rowInd) => {
    cellMap[rowInd] = row.split('').map((val, colInd) => val);
  });
  solvePuzzle(cellMap);
  return cellMap.flat().join('');
}
const test = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
  return !board.includes('-');
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

// let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function prettyBoard(board) {
  let newStr;
  for (let i = 0; i < 9; i++) {
    newStr = board.slice(i * 9, (i + 1) * 9);
  }
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };
