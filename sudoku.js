/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
const fs = require('fs');

function makeArr() {
  const str = fs.readFileSync('./puzzles.txt', 'utf-8');
  const puzzles = str
  .split('\n')
  .filter((line) => line !== '');
  return puzzles
}

const sudStr = makeArr()
console.log(sudStr)

function randomNumber() {
  if (process.argv[2]) {
    return process.argv[2];
  }
  return Math.floor(Math.random() * 4);
}

const ranNum = randomNumber()

function arr(str) {
  return str.replace(/(.{9})/g, (match, n) => `${n}\n`)
            .split('\n')
            .filter((line) => line !== '')
            .map((el) => el.split(''));
}

const bString = arr(sudStr[randomNumber()])

function solve(boardString) {
  return boardString
}

console.log(solve(bString))

console('hello')



/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
/*module.exports = {
  solve,
  isSolved,
  prettyBoard,
};*/

const arr1 = [1, 2, '-', '-', 5, '-', 6, 9, '-']


function sud(arr) {
  const res = [];  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '-') {
      res.push(Number(arr[i]))
    } else {
       let ran = Math.ceil(Math.random() * (9 - 1) + 1)
       if (arr.includes(ran)) {
    return sud(res)
  } else {
    res.push(ran)
  }      
    }
  }
  return res
}


console.log(sud(arr1))



