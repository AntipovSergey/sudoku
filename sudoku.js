const cfonts = require("cfonts");
const readAndSolve = require("./readAndSolve");
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(boardString) {
  const stringPuzzles = boardString.split("");
  const size = 9;
  const arrayPuzzles = [];
  for (let i = 0; i < stringPuzzles.length; i += size) {
    arrayPuzzles.push(stringPuzzles.slice(i, i + size));
  }
  return arrayPuzzles;
}

function validation(board, row, column, k) {
  for (let i = 0; i < 9; i += 1) {
    const a = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const b = 3 * Math.floor(column / 3) + (i % 3);
    if (board[row][i] == k || board[i][column] == k || board[a][b] == k) {
      return false;
    }
  }
  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] == "-") {
        for (let k = 1; k <= 9; k += 1) {
          if (validation(board, i, j, k)) {
            board[i][j] = `${k}`;
            if (isSolved(board)) {
              return true;
            }
            board[i][j] = "-";
          }
        }
        return false;
      }
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
  const boardToString = board.toString();
  const boardReplace = boardToString.replace(/,/g, " ");
  const regex =
    /\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}/gim;
  const matchStr = boardReplace.match(regex, /\d{18}/gim);
  const joinStr = matchStr.join("\n");
  const prettyFont = cfonts
    .render(joinStr, { font: "tiny", gradient: "blue,red", align: "center" })
    .array.join("\n");
  console.log(prettyFont);
  return "Ты красавчик!😜" + "                                                     Это просто радуга😉";
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
