const fs = require('fs')

const contentOfFile = fs.readFileSync('./sudoku-puzzles.txt', 'utf8');

// функция getArrayBoard принимает текст и возвращает массив из 15 элементов (пазлы)

function getArrayPuzzles(string) {
  let boardRE = /([0-9-]{81})/g;
  let arr = string.match(boardRE);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split('');
  }
  return arr;
}

const arrPuzzles = getArrayPuzzles(contentOfFile)

// функция getSudokuBoard принимает (массив, порядковый номер пазла) и возвращает двумерный массив выбранного пазла

/* function getSudokuPuzzle(arr, indexArr) {
  let puzzle = arr[indexArr - 1];
  let result = [];
  let elem;
  let j;
  for (elem = 0, j = -1; elem < puzzle.length; elem++) {
    if (elem % 9 === 0) {
      j++;
      result[j] = [];
    }
    result[j].push(puzzle[elem]);
  }
  return result;
} */

function getSudokuPuzzle(indexArr) {
  let puzzle = arrPuzzles[indexArr - 1];
  let result = [];
  let elem;
  let arr;
  for (elem = 0, arr = -1; elem < puzzle.length; elem++) {
    if (elem % 9 === 0) {
      arr++;
      result[arr] = [];
    }
    result[arr].push(puzzle[elem]);
  }
  return result;
}

const arrayOfStrings = getSudokuPuzzle;


module.exports = { arrayOfStrings };

/* const {arrayOfStrings}  = require('./parsing');
console.log(arrayOfStrings(1)) */

