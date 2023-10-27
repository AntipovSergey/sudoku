const { log } = require('console');
const fs = require('fs')

function read(nameFile) {
  const file = fs.readFileSync(`${__dirname}/${nameFile}`, 'utf-8');
  const allFilds = file.trim().split('\n')
  // allFilds = allFilds.map((el) => el.split())
  // const arr = [];
  // for (let i = 0; i < allFilds.length; i += 9) {
  //   arr.push()
  // }
  const arr = [];
  for (let el of allFilds) {
    for (let i = 0; i < el.length; i += 9) {
      arr.push(el.slice(i, i+9))
    }
  }

  const newArr = [];
  for (let i = 0; i < arr.length; i += 9) {
    newArr.push(arr.slice(i, i+9))
  }

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      newArr[i][j] = newArr[i][j].split('')
    }
  }
  return newArr
}



read('puzzles.txt')

function solve(arr, numFild) {
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
