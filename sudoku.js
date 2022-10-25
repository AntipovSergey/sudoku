/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
 const check = require('./check');

function solve(boardString, count = 0) {
  let boardArr = [];
  let arr = []
  let obj = {}
  // !!!!!преобразуем строку в нормальный целочисленный массив!!!!!!
  for (let i = 0; i < 81; i++) {
    arr.push(+boardString[i]);
  }
  for (let i = 0; i < 9; i++) {
    boardArr.push(arr.slice(0, 9))
    arr.splice(0, 9)
  }
  // !!!!!создаем объект со значениями, которые можем поставить!!!!!
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (isNaN(boardArr[i][j])) {
        let newArr = []
        for (let k = 1; k < 10; k++) {
          if (!boardArr[i].includes(k) &&
            boardArr[0][j] !== k &&
            boardArr[1][j] !== k &&
            boardArr[2][j] !== k &&
            boardArr[3][j] !== k &&
            boardArr[4][j] !== k &&
            boardArr[5][j] !== k &&
            boardArr[6][j] !== k &&
            boardArr[7][j] !== k &&
            boardArr[8][j] !== k) {
            newArr.push(k)
            obj[`${i}${j}`] = newArr
          }
        }
      }
    }
  }
  // !!!!!!закидываем все возможные варианты, которых по 1!!!!!!
  console.log(obj)
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (obj.hasOwnProperty(`${i}${j}`)) {
        if (obj[`${i}${j}`].length === 1) {
          boardArr[i][j] = +(obj[`${i}${j}`].join(''))
        }
      }
    }
  }

  // !!!!!!проверка на квадраты!!!!!!

  let tempArr = []
  let unique = 0
  let a = 0
  let b = 0
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      tempArr.push(boardArr[i][j])
      if (isNaN(boardArr[i][j])) {
        a = i
        b = j
      }
    }
    if (isNaN(boardArr[a][b])) {
    if (tempArr.length === 9) {
      tempArr.sort()
      tempArr = tempArr.slice(0, 8)
      unique = 45 - tempArr.reduce((a, b) => a + b, 0)
      boardArr[a][b] = unique
    }
  }
  }

  //!!!!!!заново запускаем цикл!!!!!

  if (boardArr.join('').includes('NaN') && count < 100) {
    console.table(boardArr)
    return solve(boardArr.join(',').split(',').join('').replace(/NaN/g, '-'), count += 1)
  }
  console.table(boardArr)
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  

  return !board.join(',').split(',').join('').includes('-')

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {


}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};