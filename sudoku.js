const fs = require('fs');

const read = (n) => {
  n = process.argv[2]
  const game = [];
  const board = fs.readFileSync('./puzzles.txt', 'utf-8').trim().split('\n');
  const  allGames = board[n].split('')
  for (let i = 0; i < 9; i++) {
    game.push(allGames.splice(0, 9))
  }
  return game
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