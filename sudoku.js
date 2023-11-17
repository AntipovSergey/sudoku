const fs = require("fs");
function read() {
  const strPuzzles = fs
    .readFileSync("./puzzles.txt", "utf8")
    .slice(0, 81)
    .split("");
  const sudoku = [];
  for (let i = 0; i < strPuzzles.length; i += 9) {
    const mat = strPuzzles.slice(i, i + 9);
    sudoku.push(mat);
  }
  for (let i = 0; i < sudoku.length; i++) {
    for (let j = 0; j < sudoku[i].length; j++) {
      if (sudoku[i][j] === "-") {
        sudoku[i][j] = 0;
      } else sudoku[i][j] = Number(sudoku[i][j]);
    }
  }
  return sudoku;
}

const sudoku = read();
const solvedSudoku = solve(sudoku);
function solve(sudoku) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < sudoku.length; i++) {
    for (let j = 0; j < sudoku[i].length; j++) {
      if (sudoku[i][j] === 0) {
        sudoku[i][j] = Math.floor(Math.random() * numbers.length);
      }
    }
  }
  return sudoku;
}
  

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

const output = solve(sudoku);
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
