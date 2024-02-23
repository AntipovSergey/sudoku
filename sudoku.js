const fs = require('fs');
function read(num) {
  const arrey = []
  const puzzle = fs.readFileSync('./puzzles.txt', 'utf-8').trim().split('\n')[num].split('');
  for (let i = 0; i < 9; i += 1) {
    arrey.push(puzzle.splice(0, 9));
  }
  return arrey;
}
// console.log(read());


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

function prettyBoard(board) {
  let format = '';
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[i].length; j += 1) {
      const value = board[i][j] !== '-' ? board[i][j] : ' ';
      format += `${value} `;
      if ((j + 1) % 3 === 0 && j !== 8) {
        format += '| ';
      }

    }
    format += '\n';

    if ((i + 1) % 3 === 0 && i !== 8) {
      format += '------+-------+------\n'
    }
  }

  return format;
}

const sudoku = [
  [1, '-', 5, 8, '-', 2, '-', '-', '-'],
  ['-', 9, '-', '-', 7, 6, 4, '-', 5],
  [2, '-', '-', 4, '-', '-', 8, 1, 9],
  ['-', 1, 9, '-', '-', 7, 3, '-', 6],
  [7, 6, 2, '-', 8, 3, '-', 9, '-'],
  ['-', '-', '-', '-', 6, 1, '-', 5, '-'],
  ['-', '-', 7, 6, '-', '-', '-', 3, '-'],
  [4, 3, '-', '-', 2, '-', 5, '-', 1],
  [6, '-', '-', 3, '-', 8, 9, '-', '-']
];

const formatSudoku = prettyBoard(sudoku);
console.log(formatSudoku);

