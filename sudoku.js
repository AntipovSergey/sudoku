/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const findEmpty = (boardStringToArray) => {
  const size = 9;
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (boardStringToArray[r][c] === '-') {
        // console.log(c, r);
        return [c, r];
      }
    }
  }
  return null;
};
// console.log(findEmpty('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));
function solve(boardString) {
}

const boardStringToArray = (boardString) => {
  const board = boardString.split('');
  const boardArray = [];
  for (let i = 0; i < board.length; i += 9) {
    boardArray.push(board.slice(i, i + 9));
  }
  // console.table(boardStringToArray(boardString))
  return boardArray;
};
console.table(boardStringToArray('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))



/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  const size = 9;
  const boxSize = 3;
  const boxRow = Math.floor(r / boxSize) * boxSize;
  const boxCol = Math.floor(c / boxSize) * boxSize;
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
