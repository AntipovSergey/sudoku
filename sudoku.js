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

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
  return 0
}

console.log(read(2))
