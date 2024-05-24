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
console.table(read())

function solve(game) {
  game = read();
  for (let i = 0; i < game.length; i++) {
    for (let y = 0; y < game[i].length; i++) {
      if (game[i][y] !==  && game[i][y] === '-') {
        
      }
    }
  }
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */

}

console.log(solve())
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