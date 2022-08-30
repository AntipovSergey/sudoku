/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function solve(input) {
  const sudokuBoard = prettyBoard(input);

    let isValidNum = (row, col, num) => {

      //необходимо разобраться как работает этот блок
      for (let check = 0; check < sudokuBoard.length; check++) {
        let boxRow = (parseInt(row / 3) * 3) + parseInt(check / 3);
        let boxCol = (parseInt(col / 3) * 3) + check % 3;

        if (sudokuBoard[row][check] == num || sudokuBoard[check][col] == num || sudokuBoard[boxRow][boxCol] == num) {
          return false;
        }
      }
      return true;
    }

    let checkSudoku = () => {
      const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      for (let row = 0; row < sudokuBoard.length; row++) {
        for (let col = 0; col < sudokuBoard.length; col++) {

          if (sudokuBoard[row][col] === '-') {
            for (let num of numbers) {
              if (isValidNum(row, col, num)) {
                sudokuBoard[row][col] = String(num);
                if (checkSudoku(sudokuBoard)) { // разобраться как запустается рекурсия
                  return true;
                }
                sudokuBoard[row][col] = '-' // откатываемся на шаг назад и вместо цифры ставим -
              }
            }
            return false;
          }      
        }
      }
      return true;
    }
    checkSudoku(sudokuBoard);
    return sudokuBoard;
}

const fs = require('fs');
const inputStrings = fs.readFileSync('./puzzles.txt', 'utf-8')
const arrOfBoards = inputStrings.split('\n');

const solvedSudoku = solve(arrOfBoards[0]);
console.table(solvedSudoku);

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
 
function isSolved(board) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      if (board[row][col] === '-') {
        return 'Sudoku not solved';
      }
    }
    return 'Sudoku is solved correctly';
  }
}

console.log(isSolved(solvedSudoku))

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  let sudokuBoard = [];
  let i = 0;
  while (i < board.length) {
    const row = board.substring(i, i + 9);
    sudokuBoard.push(Array.from(row));
    i += 9;
  }
  return sudokuBoard;
}
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
}
