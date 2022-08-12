// Подключить функции из файла sudoku.js.
const fs = require('fs');
const sudoku = require('./sudoku');

function readAndSolve(error, fileData) {
  // Если чтение файла не удалось, выбросить ошибку с описанием проблемы и
  // завершить работу функции.
  if (error) {
    throw error;
  }
  const readFilePuzzleTxt = fs.readFileSync('./puzzles.txt', 'utf8');
  // Разбить содержимое файла построчно и отфильтровать все пустые строки.
  const puzzles = readFilePuzzleTxt
    .split('\n')
    .filter((line) => line !== '');

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  let puzzleNumber = Number(process.argv[2]) || 1;

  // Ограничить номер судоку максимальным числом массива с паззлами.
  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }

  // Получить желаемый судоку по индексу и вывести его в консоль.
  const puzzle = puzzles[puzzleNumber - 1].split('', 81);
  const sudokuArr = [[], [], [], [], [], [], [], [], []];
  for (let a = 0; a < sudokuArr.length; a += 1) {
    for (let i = 0; i < 9; i += 1) {
      sudokuArr[a].push(puzzle[a * 9 + i]);
    }
  }
  console.log(`Решаем судоку №${puzzleNumber}:`);
  console.table(sudokuArr);

  // Использовать функцию solve из файла sudoku.js для решения судоку.
  const solvedPuzzle = sudoku.solve(sudokuArr);
  console.table(solvedPuzzle);

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

readAndSolve();

module.exports = readAndSolve;
