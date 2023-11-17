const { log } = require('console');
const fs = require('fs');

function read() {
  const strPazz = (fs.readFileSync('./puzzles.txt', 'utf8'));
  const newStr = strPazz.slice(0, 81);
  const sudoku = [];

  for (let i = 0; i < newStr.length; i += 9) {
    const newLine = newStr.slice(i, i + 9);
    sudoku.push(Array.from(newLine));
    for (let i = 0; i < sudoku.length; i++) {
      for (let j = 0; j < sudoku[i].length; j++) {
        if (sudoku[i][j] === '-') {
          sudoku[i][j] = '-';
        } else { sudoku[i][j] = Number(sudoku[i][j]); }
      }
    }
  }

  return sudoku;
}

const arr = read();

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

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

const output = solve(arr);

function prettyBoard(output) {
  for (const str of output) {
    for (let i = 2; i < output.length; i += 3) {
      str[i] = `${str[i]}|`;
    }
    for (let i = 0; i < output.length; i += 9) {
      str[i] = `|${str[i]}`;
    }
  }

  const result = `

  - - - - - - - - - - - - - - -\n
  ${output[0].join('  ')}\n
  ${output[1].join('  ')}\n
  ${output[2].join('  ')}\n
  - - - - - - - - - - - - - - -\n
  ${output[3].join('  ')}\n
  ${output[4].join('  ')}\n
  ${output[5].join('  ')}\n
  - - - - - - - - - - - - - - -\n
  ${output[6].join('  ')}\n
  ${output[7].join('  ')}\n
  ${output[8].join('  ')}\n
  - - - - - - - - - - - - - - -\n`;

  return result;
}
console.table(prettyBoard(output));
