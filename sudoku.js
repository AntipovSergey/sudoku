/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */


const isNoMatchVH = (n, i, j, p) => !(p[i].includes(n)) && !(p.map((element) => element[j]).includes(n))

let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'


function toCorrectType(boardString) {
  let board = [];
  while (boardString.length > 7) {
  board.push(boardString.split('', 9));
  boardString = boardString.slice(9);
  }
  return board;
}
let board = toCorrectType(boardString);

function solve(board) {
  function findEmptyCell(board) {
    for (let i = 0; i < board.length; i += 1) {
      for (let y = 0; y < board.length; y += 1) {
        if (board[i][y] === '-') {
          return [i, y];
        }
      }
    }
    return null;
  }
  function solveBoard() {
    const emptyCell = findEmptyCell(board);

    if (emptyCell === null) {
      return true;
    }

    let [i, y] = emptyCell;
    for (let num = 1; num <= 9; num += 1) {
      const rightNum = num.toString();
      const isValid = isNoMatchVH(rightNum, i, y, board);
      if (isValid) {
        board[i][y] = rightNum;

        if (solveBoard()) {
          return true;
        }

        board[i][y] = '-';
      }
    }
    return false;
  }
  solveBoard();
  return board;
}

console.log(solve(board))

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  let sum = 45;
  for (let i = 0; i < board.length; i += 1) {
    for (let y = 0; y < board.length; y += 1) {
      let sumofboardI = board[i].map((el) => +el).reduce((a, b) => a + b, 0);
      let sumofboardY = board[y].map((el) => +el).reduce((a, b) => a + b, 0);
      if (sumofboardI === sum) {
        return true;
      }
      if (sumofboardY === sum) {
        return true;
      }
    }
  }
  return false;
}
isSolved(board);

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let prettyBoard = board.map((el) => (el = el.join(" "))).join("\n");
  return prettyBoard;
}
// console.log(prettyBoard(board));
// console.table(board);
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };