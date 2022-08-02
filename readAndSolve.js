// Подключить функции из файла sudoku.js.

const sudoku = require("./sudoku");

function readAndSolve(fileData) {
  // Если чтение файла не удалось, выбросить ошибку с описанием проблемы и
  // завершить работу функции.

  if (fileData.match(/[a-z]/gi)) {
    throw "Имеется некорректный символ!";
  }

  // Делаем массив всех судоку
  const puzzles = fileData.split("\n").filter((line) => line !== "");

  // Делаем массив массивов заданого судоку

  // Разбить содержимое файла построчно и отфильтровать все пустые строки.

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  let puzzleNumber = Number(process.argv[2]) || 1;

  // Ограничить номер судоку максимальным числом массива с паззлами. //
  if (puzzleNumber > puzzles.length) {
    puzzleNumber = puzzles.length;
  }

  // Получить желаемый судоку по индексу и вывести его в консоль. //
  const puzzle = puzzles[puzzleNumber - 1];
  console.log(`Решаем судоку №${puzzleNumber}:`);
  console.log(puzzle, "\n");

  const array = puzzle
    .replace(/(.{9})/g, (match, n) => `${n}\n`)
    .split("\n")
    .filter((line) => line !== "")
    .map((el) => el.split(""));

  // Использовать функцию solve из файла sudoku.js для решения судоку.

  const solvedPuzzle = sudoku.solve(array);

  for (let i = 0; i < solvedPuzzle.length; i++) {
    for (let j = 0; j < solvedPuzzle.length; j++) {
      if (solvedPuzzle[i][j] !== Number(solvedPuzzle[i][j])) {
        // приводим к числовому значению
        solvedPuzzle[i][j] = Number(solvedPuzzle[i][j]);
      }
    }
  }

  console.table(solvedPuzzle);

  console.log(`Не решенный судоку\n\n${sudoku.prettyBoard(solvedPuzzle)}\n`);

  // Использовать функцию isSolved из файла sudoku.js для проверки решения судоку.
  if (!sudoku.isSolved(solvedPuzzle)) {
    console.log(`Не смогли решить судоку №${puzzleNumber} :(`, "\n");
    return; // Если судоку не решён, завершить работу этой функции.
  }

  // Код ниже сработает, только если проверка решения судоку прошла успешно.
  console.log(`Судоку №${puzzleNumber} решён успешно!`);

  // Использовать функцию prettyBoard из файла sudoku.js для форматирования
  // игрового поля в строку в желаемом формате.
  console.log(`Решенный судоку\n\n${sudoku.prettyBoard(solvedPuzzle)}\n`);
}

module.exports = readAndSolve;
