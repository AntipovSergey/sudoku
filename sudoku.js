/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
 const check = require('./check');

function solve(boardString) {
  let boardArr = [];
  let arr = []
  let obj = {}
  for (let i = 0; i < 81; i++) {
    arr.push(+boardString[i]);
  }
  for (let i = 0; i < 9; i++) {
    boardArr.push(arr.slice(0, 9))
    arr.splice(0, 9)
  }
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
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (obj.hasOwnProperty(`${i}${j}`)) {
        if (obj[`${i}${j}`].length === 1) {
          boardArr[i][j] = +(obj[`${i}${j}`].join(''))
        }
      }
    }

  }
  
  if(boardArr.join('').includes('NaN')){
    return solve(boardArr.join(',').split(',').join('').replace(/NaN/g, '-'))
  }
  //boardArr[1][1] = 2
  console.table(boardArr)
  console.log(check.squareIsCorrect(boardArr,6,6))
  console.log(check.squareIsCorrect(boardArr,6,8))
  console.log(check.boardIsCorrect(boardArr))
  
  return boardArr
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