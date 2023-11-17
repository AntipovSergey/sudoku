const fs = require('fs');
function read() {
  const strPuzzles = fs.readFileSync('./puzzles.txt', 'utf8').slice(0, 81).split('');
  const sudoku = [];
  for (let i = 0; i < strPuzzles.length; i += 9) {
    const mat = strPuzzles.slice(i, i + 9);
    sudoku.push(mat);
  }
  for (let i = 0; i < sudoku.length; i++) {
    for (let j = 0; j < sudoku[i].length; j++) {
      if (sudoku[i][j] === '-') {
        sudoku[i][j] = 0;
      } else (sudoku[i][j] = Number(sudoku[i][j]));
    }
  }
  return sudoku;
}

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
