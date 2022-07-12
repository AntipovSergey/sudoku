// Подключить функции из файла sudoku.js.
const fs = require('fs');
const sudoku = require('./sudoku');



function make() {
  const sudStr = makeArr();
  function makeArr() {
    const str = fs.readFileSync('./puzzles.txt', 'utf-8');
    const puzzles = str
      .split('\n')
      .filter((line) => line !== '');
    return puzzles;
  }

  const ranNum = randomNumber();
  function randomNumber() {
    if (process.argv[2]) {
      return process.argv[2];
    }
    return Math.floor(Math.random() * 4);
  }

  function arr(str) {
    return str.replace(/(.{9})/g, (match, n) => `${n}\n`)
      .split('\n')
      .filter((line) => line !== '')
      .map((el) => el.split(''));
  }
  return arr(sudStr[ranNum]);
}


// Если чтение файла не удалось, выбросить ошибку с описанием проблемы и
// завершить работу функции.
function readAndSolve(error, fileData) {
  if (error) {
    throw error;
  }

  // Разбить содержимое файла построчно и отфильтровать все пустые строки.
  const puzzles = fs.readFileSync('./puzzles.txt', 'utf-8')
    .split('\n')
    .filter((line) => line !== '');
  console.log('puzzles >>>', puzzles);

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  function randomNumber() {
    if (process.argv[2]) {
      return process.argv[2];
    }
    return Math.floor(Math.random() * 4);
  }// Number(process.argv[2]) || 0;

  const puzzleNumber = randomNumber();

  // Ограничить номер судоку максимальным числом массива с паззлами.
  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }

  // Получить желаемый судоку по индексу и вывести его в консоль.
  const puzzle = puzzles[puzzleNumber];
  console.log(`Решаем судоку №${puzzleNumber}:`);
  console.log('>>>>>>>', puzzle, '\n');

  
  function make() {
    const sudStr = makeArr();
    function makeArr() {
      const str = fs.readFileSync('./puzzles.txt', 'utf-8');
      const puzzles = str
        .split('\n')
        .filter((line) => line !== '');
      return puzzles;
    }
  
    // const ranNum = randomNumber();
    // function randomNumber() {
    //   if (process.argv[2]) {
    //     return process.argv[2];
    //   }
    //   return Math.floor(Math.random() * 4);
    // }
  
    function arr(str) {
      return str.replace(/(.{9})/g, (match, n) => `${n}\n`)
        .split('\n')
        .filter((line) => line !== '')
        .map((el) => el.split(''));
    }
    return arr(sudStr[ranNum]);
  }

  
  
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
