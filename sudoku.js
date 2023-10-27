const { log } = require('console');
const fs = require('fs');

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const strPazz = (fs.readFileSync('./puzzles.txt', 'utf8'));
  const newStr = strPazz.slice(0, 81);
  const sudoku = [];

  for (let i = 0; i < newStr.length; i += 9) {
    const newLine = newStr.slice(i, i + 9);
    sudoku.push(Array.from(newLine));
    for (let i = 0; i < sudoku.length; i++) {
      for (let j = 0; j < sudoku[i].length; j++) {
        // sudoku[i][j] = Number(sudoku[i][j]);
        if (sudoku[i][j] === '-') {
          sudoku[i][j] = '-';
        } else { sudoku[i][j] = Number(sudoku[i][j]); }
      }
    }
  }

  return sudoku;
}
console.log(read());

const arr = [
  [1, '-', 5, 8, '-', 2, '-', '-', '-'],
  ['-', 9, '-', '-', 7, 6, 4, '-', '5'],
  [2, '-', '-', 4, '-', '-', 8, 1, 9],
  ['-', 1, 9, '-', '-', 7, 3, '-', 6],
  [7, 6, 2, '-', 8, 3, '-', 9, '-'],
  ['-', '-', '-', '-', 6, 1, '-', 5, '-'],
  ['-', '-', 7, 6, '-', '-', '-', 3, '-'],
  [4, 3, '-', '-', 2, '-', 5, '-', 1],
  [6, '-', '-', 3, '-', 8, 9, '-', '-'],
];

function solve(arr) {
  const possibleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (typeof arr[i][j] === 'string') {
        for (const number of possibleNumbers) {
          if (!arr[i].includes(number)) {
            arr[i][j] = number;
          }
        }
      }
    }
  }
  return arr;
}
// console.log(solve(arr));

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {

}
