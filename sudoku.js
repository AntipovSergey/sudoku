const fs = require ('fs')

function read() {
  const dataText = fs.readFileSync('./puzzles.txt', 'utf8').trim().split('\n');
  const dataLine = dataText[0].split('');
  const sudokuFirstLine = [];
  for (let i = 0; i < dataLine.length; i += 9){
    const line9 = dataLine.slice(i, i + 9)
    sudokuFirstLine.push(line9)
  }
  console.log(sudokuFirstLine)
}
read()

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
