// Подключить функции из файла sudoku.js.
const fs = require('fs');
const sudoku = require('./sudoku');

/* function err(fileData) {
  const str = fs.readFileSync(fileData, 'utf-8');
  if (str.match(/[a-zA-Z]/g)) {
    throw Error('Invalid Input');
  }
  return str
} */


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
  // Если чтение файла не удалось, выбросить ошибку с описанием проблемы и
  // завершить работу функции.
  if (error) {
    throw error;
  }

  // Разбить содержимое файла построчно и отфильтровать все пустые строки.
  /* const puzzles = fileData
    .split('\n')
    .filter((line) => line !== ''); */

  const sudStr = makeArr();
  function makeArr() {
    const str = fs.readFileSync('./puzzles.txt', 'utf-8');
    const puzzles = str
      .split('\n')
      .filter((line) => line !== '');
    return puzzles;
  }

  // Разбить содержимое файла построчно и отфильтровать все пустые строки.
  const puzzles = fs.readFileSync('./puzzles.txt', 'utf-8')
    .split('\n')
    .filter((line) => line !== '');
  console.log('puzzles >>>', puzzles);

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.

  const puzzleNumber = Number(process.argv[2]) || 0;

  /* // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  let puzzleNumber = Number(process.argv[2]) || 1; */

  const ranNum = randomNumber();

  function randomNumber() {
    if (process.argv[2]) {
      return process.argv[2];
    }
    return Math.floor(Math.random() * 4);
  }

  // Number(process.argv[2]) || 0;

  /* const puzzleNumber = randomNumber(); */

  function arr(str) {
    return str.replace(/(.{9})/g, (match, n) => `${n}\n`)
      .split('\n')
      .filter((line) => line !== '')
      .map((el) => el.split(''));
  }

  /* // Ограничить номер судоку максимальным числом массива с паззлами.
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
  const solvedPuzzle = sudoku.solve(make());

  // Использовать функцию isSolved из файла sudoku.js для проверки решения судоку.
  if (!sudoku.isSolved(solvedPuzzle)) {
    console.log(`Не смогли решить судоку №${puzzleNumber} :(`, '\n');
    return; // Если судоку не решён, завершить работу этой функции.
  }

  // Код ниже сработает, только если проверка решения судоку прошла успешно.
  console.log(`Судоку №${puzzleNumber} решён успешно!`);

  // Использовать функцию prettyBoard из файла sudoku.js для форматирования
  // игрового поля в строку в желаемом формате.
  console.log(sudoku.prettyBoard(solvedPuzzle), '\n'); */
  console.log(`Судоку №${Number(ranNum) + 1} решён успешно!`);
  return sudoku.solve(arr(sudStr[ranNum]));
}

console.table(readAndSolve());

module.exports = readAndSolve;
