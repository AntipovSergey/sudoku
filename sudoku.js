const { log } = require('console');
const fs = require('fs')

function read(nameFile) {
  const file = fs.readFileSync(`${__dirname}/${nameFile}`, 'utf-8');
  const allFieldsStr = file.trim().split('\n')
  const allRows = [];
  for (let el of allFieldsStr) {
    for (let i = 0; i < el.length; i += 9) {
      allRows.push(el.slice(i, i+9))
    }
  }

  const allFields = [];
  for (let i = 0; i < allRows.length; i += 9) {
    allFields.push(allRows.slice(i, i+9))
  }

  for (let i = 0; i < allFields.length; i++) {
    for (let j = 0; j < allFields[i].length; j++) {
      allFields[i][j] = allFields[i][j].split('')
    }
  }
  return allFields
}

function solve(arr, numFild) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */

  const Field = arr[numFild];
  console.table(Field);

}
solve(read('puzzles.txt'),0)

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
