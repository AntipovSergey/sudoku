const fs = require('fs')
function read(num = 0) {

  const fullArr = fs.readFileSync('./puzzles.txt', 'utf-8').trim().split('\n')
  const newArr = fullArr[num].split('')
  const board = []
  for (let i = 0; i < 9; i++) {
    board.push(newArr.splice(0, 9))
  }
  return board

}

/**
 * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
 */


read()

function solve() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved(num, board, colum, row) {
  num = num.toString()
  for(let i = 0; i < board.length; i++) {
    if(board[row][i] === num || board[i][colum] === num) {
      return false
    }
    const startRow = Math.floor(startRow / 3)*3
    const startColum = Math.floor((startColum / 3)*3)
    for(let j = startRow; j < startRow + 3; j++) {
      for(let k = startColum; k < startColum + 3; k++) {
        if(board[j][k] === num) {
          return false
        }
      }

    } 
  }

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
