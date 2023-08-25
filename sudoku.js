const fs = require('fs');

function read(num) {
  const strRead = fs.readFileSync('./puzzles.txt', 'utf8')
  .trim()
  .split('\n') 

  const strReadnum = strRead[num-1]
  .split('')
  
  const mapStr = strReadnum.map((el) => {
    if (el === '-') {
      return 0
    }else { 
      return Number(el)
  }})

  function slice (arr) {
  const result  = [];
  for (let i = 0; i<arr.length; i+=9) {
    result.push(arr.slice(i,i+9))
  }
  return result;
  }

return slice(mapStr).map(el => el.join('')).join('\n');
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
const arr = [[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9]]
function prettyBoard(array) {
  // let resultBoard=board.map((row)=> {return row.map((el) => {return emojis[el]})});
  return array.map((el) => el.join(' ')).join('\n')
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Выводит в консоль/терминал судоку.
 * Подумай, как симпатичнее его вывести.
 */




// function prettyBoard(arr) {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//    * Выводит в консоль/терминал судоку.
//    * Подумай, как симпатичнее его вывести.
//    */

// }

