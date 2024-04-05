const fs = require('fs');

function read() {
  const sudokuText = fs.readFileSync('./puzzles.txt', 'utf-8');
  const lines = sudokuText.trim().split('\n')[0].split('');
  const puzzles = [];
  for (let i = 0; i < lines.length; i += 9) {
    const puzzle = lines.slice(i, i + 9);
    puzzles.push(puzzle);
  }
  const puzzlesWithNull = puzzles.map((elArr) => elArr.map((el) => (el === '-' ? 0 : Number(el))));
  
}

console.table(read());

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
