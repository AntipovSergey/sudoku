const fs = require('fs');

function read(num) {
  if(num > 14){
    console.log('Функция принимает значения от 0 до 14')
    return false
  }
  let fileValue =fs.readFileSync('./puzzles.txt','utf8');
  let res = fileValue.split('\n')
  const indexStr = res[num];
  let sudokuArr = []
  // function createArr(indexStr){
  for (let index = 0; index < indexStr.length; index+=9) {
    let subArr = indexStr.slice(index, index + 9).split('');
    sudokuArr.push(subArr);
  }
  return sudokuArr
// }
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}
console.log(read(1))
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
