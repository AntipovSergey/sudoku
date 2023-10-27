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
}
