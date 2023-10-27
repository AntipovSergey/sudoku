const fs = require('fs');

function read() {
  const data = fs.readFileSync('./puzzles.txt', 'utf8').split('\n');
  const sudoku = data[0].split('')
  const opt = 9
  let result = []
  for (let i = 0; i < sudoku.length;i+=opt) {
    const hun = sudoku.slice(i,i + opt);
    result.push(hun)
  }
  console.log(result)
  return result
  
}
read();

// function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
// }

// function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
// }

// function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
// }

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
