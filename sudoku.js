const {arr} = require('./getboard.js')

function read(arr) {
  let num = 0;
  let emptySpaces = []
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr.length; y++) {
      if(arr[x][y] === 0){
        emptySpaces.push([x,y])
      }
    }
  }
  console.log(emptySpaces)
  return emptySpaces
}
read(arr)

function solve(arr) {
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
module.exports = {read}