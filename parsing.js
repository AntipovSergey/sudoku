const fs = require('fs');

const contentOfFile = fs.readFileSync('./sudoku-puzzles.txt', 'utf8');

// функция getArrayBoard принимает текст и возвращает массив из 15 элементов (пазлы)

function getArrayPuzzles(string) {
  const boardRE = /([0-9\-]{81})/g;
  const arr = string.match(boardRE);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].split('');
  }
  return arr;
}

const arrPuzzles = getArrayPuzzles(contentOfFile);

// функция getSudokuBoard принимает (массив, порядковый номер пазла) и возвращает двумерный массив выбранного пазла

function getSudokuPuzzle(indexArr) {
  const puzzle = arrPuzzles[indexArr - 1];
  const result = [];
  let elem;
  let arr;
  for (elem = 0, arr = -1; elem < puzzle.length; elem += 1) {
    if (elem % 9 === 0) {
      arr += 1;
      result[arr] = [];
    }
    result[arr].push(puzzle[elem]);
  }
  return result;
}

module.exports = { getSudokuPuzzle };
