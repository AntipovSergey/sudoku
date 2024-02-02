const fs = require('fs');

function read() {
  const puzz = fs.readFileSync('./puzzles.txt', 'utf-8');
  git pull origin master
  const firstArr = puzz.trim().split('\n')[0].split('');
  const newArrSudoku = [];
  for (let i = 0; i < firstArr.length; i += 9) {
    newArrSudoku.push(firstArr.slice(i, i + 9));
  }
  return newArrSudoku;

}

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
