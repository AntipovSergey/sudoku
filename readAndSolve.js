// Подключить функции из файла sudoku.js.
const sudoku = require('./sudoku');

function readAndSolve(error, fileData) {
  // Если чтение файла не удалось, выбросить ошибку с описанием проблемы и
  // завершить работу функции.
  if (error) {
    throw error;
  }

  function getString(boardString) {
    const board = boardString.split('');

    const newBoard = Array(9);
    for (let i = 0; i < 9; i += 1) {
      newBoard[i] = board.slice(i * 9, i * 9 + 9);
    }
    return newBoard;
  }

  // Разбить содержимое файла построчно и отфильтровать все пустые строки.
  const puzzles = fileData
    .split('\n')
    .filter((line) => line !== '');

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  let puzzleNumber = Number(process.argv[2]) || 1;

  // Ограничить номер судоку максимальным числом массива с паззлами.
  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }

  // Получить желаемый судоку по индексу и вывести его в консоль.
  const puzzle = puzzles[puzzleNumber - 1];
  console.log(`Решаем судоку №${puzzleNumber}:`);
  console.log(sudoku.prettyBoard(getString(puzzle)), '\n');

  // Использовать функцию solve из файла sudoku.js для решения судоку.
  const solvedPuzzle = sudoku.solve(puzzle);

  // Использовать функцию isSolved из файла sudoku.js для проверки решения судоку.
  if (!sudoku.isSolved(solvedPuzzle)) {
    console.log(`Не смогли решить судоку №${puzzleNumber} :(`, '\n');
    return; // Если судоку не решён, завершить работу этой функции.
  }

  // Код ниже сработает, только если проверка решения судоку прошла успешно.
  console.log(`Судоку №${puzzleNumber} решён успешно!`);

  // Использовать функцию prettyBoard из файла sudoku.js для форматирования
  // игрового поля в строку в желаемом формате.
  console.log(sudoku.prettyBoard(solvedPuzzle), '\n');
}

module.exports = readAndSolve;
