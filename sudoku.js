let fs = require('fs')
let boardString = fs.readFileSync("./puzzles.txt","utf-8") 
//console.log(boardString.split('\n'))

function reader(boardString){
  let firstBoard = boardString.split('\n')
  let str = firstBoard[0]
  console.log(str)
  let arr = [];
  for(let i = 0;i < str.length; i=i+9){
    let row = [];
    for (let j = i; j < i+9; j++){
      row.push(str[j])
    }
    arr.push(row)
      
    
  }
  return arr;
}

console.table(reader(boardString))
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */


function solve(boardString) {
  
}


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
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};


