// Подключить функции из файла sudoku.js.
const sudoku = require('./sudoku');

function readAndSolve(error, fileData) {
  if (error) {
    throw error;
  }

  const puzzles = sudoku.splitBoards(fileData).map(sudoku.parseBoard);

  let puzzleNumber = Number(process.argv[2]) || 1;

  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }

  const puzzle = puzzles[puzzleNumber - 1];

  // const isValid = sudoku.validate(puzzle);

  // Получить желаемый судоку по индексу и вывести его в консоль.
  console.log(`Решаем судоку №${puzzleNumber}:`);
  console.log(puzzle, '\n');

  // Использовать функцию solve из файла sudoku.js для решения судоку.
  const solvedPuzzle = sudoku.solve(puzzle);

  // Использовать функцию isSolved из файла sudoku.js для проверки решения судоку.
  // if (!sudoku.isSolved(solvedPuzzle)) {
  //   console.log(`Не смогли решить судоку №${puzzleNumber} :(`, '\n');
  //   return; // Если судоку не решён, завершить работу этой функции.
  // }

  // Код ниже сработает, только если проверка решения судоку прошла успешно.
  console.log(`Судоку №${puzzleNumber} решён успешно!`);

  console.log(sudoku.prettyBoard(solvedPuzzle), '\n');
}

module.exports = readAndSolve;
