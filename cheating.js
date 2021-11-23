const fs = require('fs');
const solve = require('@mattflow/sudoku-solver');

const sudokuPuzzles = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function sudokuSolver2_1(content, puzzleNumber = 0) {
  const puzzle = content.split('\n')[puzzleNumber];
  const solved = solve(puzzle, {
    maxIterations: 9999999, emptyValue: '-', hintCheck: false,
  }); //Аргументы в объекте. Он не решал последние судоку из-за того, что было мало изначально заполненных значений. 
  // По правилам судоку их должно быть 17. Ошибка решается добавлением hintCheck: false в объект аргумента
  const solvedArr = [];
  for (let i = 0; i < 81; i += 9) {
   solvedArr.push(solved.slice(i, i + 9).split(''));
  }
  return solvedArr;
}

console.table(sudokuSolver2_1(sudokuPuzzles, 14));
