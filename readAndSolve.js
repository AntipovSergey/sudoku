// Подключить функции из файла sudoku.js.
const sudoku = require('./sudoku');

function readAndSolve(error = null, fileData) {
  if (error) {
    throw error;
  }

  const puzzles = fileData
    .split('\n')
    .filter((line) => line !== '');

  let puzzleNumber = Number(process.argv[2]) || 1;

  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }

  const puzzle = puzzles[puzzleNumber - 1];
  console.log(`Решаем судоку №${puzzleNumber}:`);
  console.log(puzzle, '\n');
  
  const solvedPuzzle = sudoku.solve(puzzle);

  if (!sudoku.isSolved(solvedPuzzle)) {
    console.log(`Не смогли решить судоку №${puzzleNumber} :(`, '\n');
    return;
  }
  
  console.log(`Судоку №${puzzleNumber} решён успешно!`);

  console.log(sudoku.prettyBoard(solvedPuzzle), '\n');
}

module.exports = readAndSolve;
