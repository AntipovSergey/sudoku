/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

const { isNoMatchVH } = require("./horizontal_vertikal_search");
const { isNoMatchSquare } = require("./isNoMatchSquare");
const { toCorrectType } = require("./toCorrectType");
const { findEmptyCell } = require("./findEmptyCell");
const { getNumbCount, transboard, extractSquares } = require("./isSolved");

function solve(boardString) {
  let board = toCorrectType(boardString);

  function solveBoard() {
    const emptyCell = findEmptyCell(board);

    if (emptyCell === null) {
      return true;
    }

    const [i, y] = emptyCell;
    for (let num = 1; num <= 9; num += 1) {
      const rightNum = num.toString();
      if (
        isNoMatchVH(rightNum, i, y, board) &&
        isNoMatchSquare(rightNum, i, y, board)
      ) {
        board[i][y] = rightNum;

        if (solveBoard()) {
          return true;
        }

        board[i][y] = "-";
      }
    }
    return false;
  }
  solveBoard();
  return board;
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  let resI;
  let resY;
  let resS;
  let num = 45;
  let transb = transboard(board); // переворот массива для вертикали
  let squares = extractSquares(board); // получение массива квадратов
  for (let i = 0; i < board.length; i++) {
    let sumofboardI = board[i].map((el) => +el).reduce((a, b) => a + b, 0);
    let sumoftransb = transb[i].map((el) => +el).reduce((a, b) => a + b, 0);
    let sumofsquares = squares[i].map((el) => +el).reduce((a, b) => a + b, 0);
    resI = getNumbCount(board[i]);
    const values = Object.values(resI);
    resY = getNumbCount(transb[i]);
    const valuesY = Object.values(resY);
    resS = getNumbCount(squares[i]);
    const valuesS = Object.values(resS);
    if (sumofboardI !== num || sumoftransb !== num || sumofsquares !== num) {
      return false;
      
    }
    if (
      values.reduce((a, b) => a + b, 0) > 0 ||
      valuesY.reduce((a, b) => a + b, 0) > 0 ||
      valuesS.reduce((a, b) => a + b, 0) > 0
    ) {
      return false;
    }
  }
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
 function prettyBoard(board) {
  let prettyBoard = board.map((el) => (el = el.join(" "))).join("\n")
    .replace(/(\d \d \d) (\d \d \d) (\d \d \d)/g, "| $1 | $2 | $3 |")
    .replace(/(.+?\n.+?\n.+?\n)/g, '$1_________________________\n')
    .replace(/^(.+)/, '_________________________\n$1')
    .replace(/(.+)$/, '$1\n_________________________')

  return prettyBoard;
}
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
