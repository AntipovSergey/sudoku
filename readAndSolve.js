// Подключить функции из файла sudoku.js.
const sudoku = require('./sudoku');
const cfonts = require('cfonts');

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
  myFonts(`Let's solve sudoku №${puzzleNumber}:`);
  let arr = puzzle.split('')
  const puzzleTable = [];
  for (let i = 0; i < arr.length; i += 9) {
    puzzleTable.push(arr.slice(i, i + 9));
  }

  console.table(puzzleTable.map(el => el.map((el) => el === '-' ? el = '😿' : Number(el))));


  // Использовать функцию solve из файла sudoku.js для решения судоку.
  const solvedPuzzle = sudoku.mainFunction(puzzle);

  // Использовать функцию isSolved из файла sudoku.js для проверки решения судоку.
  if (!sudoku.isSolved(solvedPuzzle)) {
    console.log(`Не смогли решить судоку №${puzzleNumber} :(`, '\n');
    return; // Если судоку не решён, завершить работу этой функции.
  }

  // Код ниже сработает, только если проверка решения судоку прошла успешно.
  myFonts(`Sudoku ${puzzleNumber} complete`);

  // Использовать функцию prettyBoard из файла sudoku.js для форматирования
  // игрового поля в строку в желаемом формате.
  sudoku.prettyBoard(solvedPuzzle);
}
function myFonts(str) {
  return cfonts.say(`${str}`, {
   
  font: 'chrome', // define the font face
  align: 'left', // define text alignment
  colors: ['yellow'], // define all colors
  background: 'transparent', // define the background color, you can also use `backgroundColor` here as key
  letterSpacing: 1, // define letter spacing
  lineHeight: 1, // define the line height
  space: true, // define if the output text should have empty lines on top and on the bottom
  maxLength: '0', // define how many character can be on one line
  gradient: ['green', 'yellow'], // define your two gradient colors
  independentGradient: false, // define if you want to recalculate the gradient for each new line
  transitionGradient: false, // define if this is a transition between colors directly
  env: 'node', // define the environment cfonts is being executed in
  });
  } 

module.exports = readAndSolve;
