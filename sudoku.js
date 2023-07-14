

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const fs = require("fs");


function solve(boardString) {
  const inputBoard = [];
  const BOARD_SIZE = 9;
  const BOX_SIZE = 3;
  for (let i = 0; i < 9; i += 1) {
    inputBoard[i] = boardString.slice(0 + i * 9, 9 + i * 9).split('');
  }
  const solveSudoku = (board) => {
    // Ищет пустой элемент
    const findEmpty = (board) => {
      for (let r = 0; r < BOARD_SIZE; r += 1) {
        for (let c = 0; c < BOARD_SIZE; c += 1) {
          if (board[r][c] === '-') {
            return [r, c];
          }
        }
      }
      return null;
    };
    // Проверяет, повторяется ли данный элемент в строке, стобце или боксе
    const valid = (target, pos, board) => {
      const [r, c] = pos;
      // Проверки по строкам и столбцам
      for (let i = 0; i < BOARD_SIZE; i += 1) {
        // Проверка по строке
        if (board[r][i] === target && i !== c) {
          return false;
        }
        // Проверка по столбцу
        if (board[i][c] === target && i !== r) {
          return false;
        }
      }
      // проверка бокса
      const boxRow = Math.floor(r / BOX_SIZE) * BOX_SIZE;
      const boxCoil = Math.floor(c / BOX_SIZE) * BOX_SIZE;
      for (let i = boxRow; i < boxRow + BOX_SIZE; i += 1) {
        for (let j = boxCoil; j < boxCoil + BOX_SIZE; j += 1) {
          if (board[i][j] === target && i !== r && j !== c) {
            return false;
          }
        }
      }
      return true;
    };
    const choose = () => {
      const curPosition = findEmpty(inputBoard);
      if (curPosition === null) {
        return true;
      }
      for (let i = 1; i <= BOARD_SIZE; i += 1) {
        const curNumber = i.toString();
        const validated = valid(curNumber, curPosition, inputBoard);
        if (validated) {
          const [x, y] = curPosition;
          board[x][y] = curNumber;
          if (choose()) {
            return true;
          }
          board[x][y] = '-';
        }
      }
      return false;
    };
    choose();
    return board;
  };
  return solveSudoku(inputBoard);
}
// console.table(
//   solve(
//     '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------'
//   )
// );

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === "-") {
        return false; // судоку не решено, потому что есть пустые ячейки '-'
      }
    }
  }
  return true; // судоку решено
}
console.log()

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
