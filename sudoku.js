/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const findEmpty = require('./findEmpty');
const validate = require('./validate');

function solve(boardString) {
  const arr = boardString.split('');
  const size = 9;
  const input = [];
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    input[i] = arr.slice((i * size), (i * size) + size);
  }

  const solveHelper = () => {
    const currPos = findEmpty(input);
    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, input);

      if (isValid) {
        const [x, y] = currPos;
        input[x][y] = currNum;
        if (solveHelper()) {
          return true;
        }
        input[x][y] = '-';
      }
    }
    return false;
  };
  solveHelper();
  return input;
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
  console.table(board);
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
