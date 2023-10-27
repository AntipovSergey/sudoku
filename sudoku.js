const fs = require('fs');

function read() {
  const data = fs.readFileSync('./puzzles.txt', 'utf8').trim();
  const arr = data.split('\r\n');
  const firstSudoku = arr[0];

  // for(let i = 0; i < firstSudoku.length; i ++) {
  //   let sudokuArr = []
  //   if(firstSudoku.length / 9 )
  // }
  // const sudoku = arr.map((el) => el.split(' '));
  // const sudokuStrings = sudoku.map((el) => el.split(' '));

  // const sudoku = arr.map((el) => el)
  // console.log(arr);
  // console.log(sudoku);
  // console.log(sudoku.length);
  // console.log(sudokuStrings);
  console.log(firstSudoku);
}
read();

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

// const inputArray = [
//   'Это первая строка',
//   'Это вторая строка',
//   'Это третья строка',
//   'И так далее...',
// ];

// // Преобразовываем массив в одну строку, разделяя элементы переносами строки
// const inputString = inputArray.join('\n');

// // Разделяем строку на массив строк, используя перенос строки в качестве разделителя

// const outputArray = inputArray.map((line) => line.split(' '));

// console.log(outputArray);
