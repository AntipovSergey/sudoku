const fs = require('fs');
const { possibleValues } = require('./possibleValues');
// const { getRendering } = require("./getRendering");

function read(filename) {
  let result = [];
  const puzzles = fs.readFileSync(__dirname + filename, 'utf8');
  result = puzzles
    .replaceAll('-', 0)
    .split('\n')
    .map((row) => row.split('').map((el) => Number(el)));
  return result.slice(0, -1);
}

function solve(puzle) {
  const solution = possibleValues(pazle);
  getRendering(solution);
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard(puzzle) {
  let result = '';
  let index = '';
  for (let i = 0; i < puzzle.length; i++) {
    result += puzzle[i]+'  ';
    // index += i+'  ';
    if ((i+1) % 9 === 0) {
      // result += '     '+index;
      // index = '';
      result += "\n";
    }
  }
  return result;
}

module.exports = { read, solve, isSolved, prettyBoard };
