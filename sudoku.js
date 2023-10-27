const fs = require('fs');

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const data = fs.readFileSync('./puzzles.txt', 'utf-8');
  // console.log(data);
}

read();

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved(solve) {
  // Принимает игровое поле в том формате, в котором его вернули из функции solve.
  // Возвращает булевое значение — решено это игровое поле или нет.
  let sumOfOneThing = 0;
  for (let i = 0; i <= 9; i++) {
    sumOfOneThing += i;
  }

  let sumOfAll = 0;
  for (let i = 0; i < 9; i++) {
    sumOfAll += sumOfOneThing;
  }
  return sumOfAll;

  const row;
  const column;
  const littleSquare;
  let sumOfRows;
  let sumOfColumns;
  let sum;
  // for (let row = 0; row < 9; row++) {
  //   for (let column = 0; column < 9; column++) {
  //   }
  // }
  for (let i = 0; i < 9; i++) {
    const a = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const b = 3 * Math.floor(col / 3) + i % 3;
    if (board[row][i] == n || board[i][column] == n || board[a][b] == n) {
      return false;
    }
  }
  return true;

}

console.log(isSolved());

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

module.exports = {
  read,
  solve,
  isSolved,
  prettyBoard
};
