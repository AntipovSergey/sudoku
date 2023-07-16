const {
  getStrFromFile,
  getOnePuzzleAsArray,
  printPuzzles,
  fillSudoku,
} = require('./utils');

// Не хватает только проверки исходной строки на корректность
const puzzles = getStrFromFile('./puzzles/puzzles.txt');
const puzzle = getOnePuzzleAsArray(puzzles);
const solvedPuzzle = fillSudoku(puzzle);
printPuzzles(puzzle, solvedPuzzle);
