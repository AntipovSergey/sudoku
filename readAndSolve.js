// Подключить функции из файла sudoku.js.
const chalk = require('chalk');
const sudoku = require('./sudoku');

function readAndSolve(error, fileData) {
  // Если чтение файла не удалось, выбросить ошибку с описанием проблемы и
  // завершить работу функции.
  if (error) {
    throw error;
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
  let newPuzzle = puzzle;
  let boardNew = [];
  for (let i = 0; i < newPuzzle.length; i += 9) {
    let n = newPuzzle.slice(i, i + 9);
    boardNew.push(n);
  }
  console.log(chalk.bgBlue.whiteBright`Решаем судоку №${puzzleNumber}:\n`);
  console.log(chalk.bgWhiteBright.underline.magentaBright(boardNew.join('\n').replaceAll(',', '|').replaceAll('','|').replaceAll('-',' ')));

  // Использовать функцию solve из файла sudoku.js для решения судоку.
  const solvedPuzzle = sudoku.solve(puzzle);
  //console.log(sudoku.solve(puzzle))

  // Использовать функцию isValid из файла sudoku.js для проверки решения судоку.
  if (!solvedPuzzle) {
    console.log(`Не смогли решить судоку №${puzzleNumber} :(`, '\n');
    return; // Если судоку не решён, завершить работу этой функции.
  }

  // Код ниже сработает, только если проверка решения судоку прошла успешно.
  console.log(chalk.bgBlue.whiteBright`\nСудоку №${puzzleNumber} решён успешно!\n`);

  // Использовать функцию prettyBoard из файла sudoku.js для форматирования
  // игрового поля в строку в желаемом формате.
  console.log(chalk.bgWhiteBright.underline.blueBright(sudoku.prettyBoard(solvedPuzzle)));
}

module.exports = readAndSolve;