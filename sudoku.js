/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const fs = require('fs');

let sudokuBaza = fs.readFileSync('./puzzles.txt', 'utf-8');
sudokuBaza = sudokuBaza.split('\n');

const boradsudoku = prettyBoard(sudokuBaza[14]);

function solve(boardString) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let index = 0; index <= 14; index++) {
    // console.log(sudokuBaza[index]);

    const isValidNum = (row, col, num) => {
      for (let check = 0; check < boradsudoku.length; check++) {
        const boxRow = (parseInt(row / 3) * 3) + parseInt(check / 3);
        const boxCol = (parseInt(col / 3) * 3) + check % 3;

        if (boradsudoku[row][check] == num || boradsudoku[check][col] == num || boradsudoku[boxRow][boxCol] == num) {
          return false;
        }
      }
      return true;
    };

    const checkSudoku = () => {
      for (let row = 0; row < boradsudoku.length; row++) {
        for (let col = 0; col < boradsudoku.length; col++) {
          if (boradsudoku[row][col] === '-') {
            for (const num of numbers) {
              if (isValidNum(row, col, num)) {
                boradsudoku[row][col] = String(num);
                if (checkSudoku(boradsudoku)) {
                  return true;
                }
                boradsudoku[row][col] = '-';
              }
            }
            return false;
          }
        }
      }
      return true;
    };
    // console.table(boradsudoku)
    checkSudoku(boradsudoku);
    return boradsudoku;
  }
}
console.log(solve(boradsudoku));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved() {
  const solveSUdoku = solve(boradsudoku);
  for (let row = 0; row < boradsudoku.length; row++) {
    for (let col = 0; col < boradsudoku.length; col++) {
      if (solveSUdoku[row][col] === '-') {
        return false;
      }
    }
    return true;
  }
}
console.log(isSolved(solve(boradsudoku)));

// isSolved();
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {
  const sudokuBoard = [];
  let i = 0;
  while (i < board.length) {
    const row = board.substring(i, i + 9);
    sudokuBoard.push(Array.from(row));
    i += 9;
  }
  return sudokuBoard;
}
// [[0,1,2,3,4,5,6,7,8], [9,10,11,12,13,14,15,16,17]]

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
