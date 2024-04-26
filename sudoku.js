const fs = require('fs');

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const sudokuTxt = fs.readFileSync('puzzles.txt', 'utf-8');
  const line = sudokuTxt.trim().split('\n')[0].split('');
  // console.log(line);
  const puzless = [];
  for (let i = 0; i < line.length; i += 9) {
    const puzle = line.slice(i, i + 9);
    puzless.push(puzle);
  }

  const puzleDone = puzless.map((elArr) => elArr.map((el) => (el === '-' ? 0 : Number(el))));
  console.log(puzleDone);
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
