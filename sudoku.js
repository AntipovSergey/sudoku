 const fs = require('fs')

function read() {
  const path = fs.readFileSync('./puzzles.txt', 'utf-8').slice(0,81).split('')
  const nein = 9
 let result = []
  for (let i = 0; i < path.length; i+= nein) {
    const chunk = path.slice(i, i + nein);
    result.push(chunk)
  }
  return result

}
console.table(read())


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
