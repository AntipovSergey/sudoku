// Подключить функции из файла sudoku.js.
const fs = require('fs');
const sudoku = require('./sudoku');

function readAndSolve(error, fileData) {
  // Если чтение файла не удалось, выбросить ошибку с описанием проблемы и
  // завершить работу функции.
  fs.readFile('./puzzles.txt', 'utf8', (err, data) => {
    if (err) throw err;
    data.split('\n')
      .filter((line) => line !== '');

    const box = data.split('\n')
      .map((el) => el.split('')
        .map((el) => (el == '-' ? 0 : Number(el))));

    let sudoku;
    const sudokuNumber = Number(process.argv[2]) - 1;
    // здесь будем прописывать АРГВ ggg
    for (let i = 0; i < box.length; i++) {
      sudoku = box[sudokuNumber];
    }
    console.log({sudoku});

    const arr = [];
    let tmp = {};

    sudoku.forEach((el2) => {
      if (el2 == 0) {
        for (i = 1; i < 10; i += 1) {
          tmp[i] = 'maybe';
        }
        arr.push(tmp);
        tmp = {};
      } else {
        for (i = 1; i < 10; i += 1) {
          if (i === el2) { tmp[i] = 'yes'; } else {
            tmp[i] = 'no';
          }
        }
        arr.push(tmp);
        tmp = {};
      }
    });
    return arr;
  });

  // // Разбить содержимое файла построчно и отфильтровать все пустые строки.
  // const puzzles = fileData
  //   .split('\n')
  //   .filter((line) => line !== '');

  // // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.
  // let puzzleNumber = Number(process.argv[2]) || 1;

  // // Ограничить номер судоку максимальным числом массива с паззлами.
  // if (puzzleNumber > puzzles.length) {
  //   puzzleNumber = puzzles.length;
  // }

  // // Получить желаемый судоку по индексу и вывести его в консоль.
  // const puzzle = puzzles[puzzleNumber - 1];
  // console.log(`Решаем судоку №${puzzleNumber}:`);
  // console.log(puzzle, '\n');

  // // Использовать функцию solve из файла sudoku.js для решения судоку.
  // const solvedPuzzle = sudoku.solve(puzzle);

  // // Использовать функцию isSolved из файла sudoku.js для проверки решения судоку.
  // if (!sudoku.isSolved(solvedPuzzle)) {
  //   console.log(`Не смогли решить судоку №${puzzleNumber} :(`, '\n');
  //   return; // Если судоку не решён, завершить работу этой функции.
  // }

  // // Код ниже сработает, только если проверка решения судоку прошла успешно.
  // console.log(`Судоку №${puzzleNumber} решён успешно!`);

  // // Использовать функцию prettyBoard из файла sudoku.js для форматирования
  // // игрового поля в строку в желаемом формате.
  // console.log(sudoku.prettyBoard(solvedPuzzle), '\n');
}// закрытие функции
readAndSolve();
module.exports = readAndSolve;
