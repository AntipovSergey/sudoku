const fs = require('fs');

function read() {
}
// console.log(read())

function free(arr) {
  for (let i=0; i < arr.length; i++){
    for (let j=0; j < arr[i].length; j++){
      if(arr[i][j] === '-'){
        return [i,j]
      }
    }
  }
  return null
}

function solve() {

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
