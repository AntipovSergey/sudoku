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
    const line = Array.from(newLine);
    for (let element of line) {
      element = parseInt(element);
      console.log(typeof (element));
    }
    sudoku.push(Array.from(line));
  }

  return sudoku;
}

// [
//   [1, '-', 5, 8, '-', 2, '-', '-', '-'],
//   ['-', 9, '-', '-', 7, 6, 4, '-', '5'],
//   [2, '-', '-', 4, '-', '-', 8, 1, 9],
//   ['-', 1, 9, '-', '-', 7, 3, '-', 6],
//   [7, 6, 2, '-', 8, 3, '-', 9, '-'],
//   ['-', '-', '-', '-', 6, 1, '-', 5, '-'],
//   ['-', '-', 7, 6, '-', '-', '-', 3, '-'],
//   [4, 3, '-', '-', 2, '-', 5, '-', 1],
//   [6, '-', '-', 3, '-', 8, 9, '-', '-'],
// ];
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
console.log(read());

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  const output = solve(arr);

  output = `
${arr[0]}\n
${arr[1]}\n
${arr[2]}\n
${arr[3]}\n
${arr[4]}\n
${arr[5]}\n
${arr[6]}\n
${arr[7]}\n
${arr[8]}\n`;
console.log
}
