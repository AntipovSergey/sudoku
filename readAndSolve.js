// Подключить функции из файла sudoku.js.
const sudoku = require('./sudoku');

function readAndSolve(dataFile) {  

  // Если чтение файла не удалось, выбросить ошибку с описанием проблемы и
  // завершить работу функции.
  // Разбить содержимое файла построчно и отфильтровать все пустые строки.

  const sudStr = makeArr()   
  
  function makeArr(){
    const str = dataFile
    if (str.match(/[a-zA-Z]/g)) {
      throw Error('Invalid Input');
    } else {      
     return str.split('\n')
     .filter((line) => line !== '');
    }
  }
 
  console.log('puzzles >>>', sudStr);

  // Получить номер судоку из process.argv, либо взять 1-й судоку по умолчанию.

  const ranNum = randomNumber();

  function randomNumber() {
    if (process.argv[2]) {
      return process.argv[2];
    }
    return Math.floor(Math.random() * 14);
  }  

  function arr(str) {
    return str.replace(/(.{9})/g, (match, n) => `${n}\n`)
      .split('\n')
      .filter((line) => line !== '')
      .map((el) => el.split(''));
  }


  // Получить желаемый судоку по индексу и вывести его в консоль.
  const puzzle = sudStr[ranNum];
  console.log(`Решаем судоку №${Number(ranNum) + 1}:`);
  console.log('>>>>>>>', puzzle, '\n');
  console.log(`Судоку №${Number(ranNum) + 1} решён успешно!`);
  console.log(sudoku.solve(arr(sudStr[ranNum])).join('\n'));
}

module.exports = readAndSolve;
