const fs = require('fs')
const data = fs.readFileSync('./sudoku-puzzles.txt',
'utf-8')
console.log('получаем всё\n', data)


function getBoard(data) {
  let sudokuBoard = [];
  for (let i = 0; i < 81; i += 9) {
    sudokuBoard.push(data.slice(i, i + 9).split(''))
  }
  return sudokuBoard
}
console.log('отрисовываем доску')
console.table(getBoard(data))

const board = getBoard(data);

function findEmpty() {
  for (let horizon = 0; horizon < 9; horizon++) {
    for (let vertical = 0; vertical < 9; vertical++) {
      if (board[horizon][vertical] === '-') {
        return [horizon, vertical];
      }
    }
  }
  return 'done'
}
console.log('получаем пустое значение')
console.log(findEmpty(board))
// след функция берет это значение и проверяет, что можно подставить под него

// а для этого ей нужно сравнить все строки и столбцы, и квадраты на цифры   [1, 2, 3, 4, 5, 6, 7, 8, 9]
// затем подставляет 

// переходит к следующему и пока пустые значения не закончатся
// если не находит значение то откатывается назад и проверяет предыдущие значения 
function solve (){


  return getBoard;
}

let emptyValue = findEmpty(board)
// console.log('ddd', emptyValue); 
function check(emptyValue, board) {
  const horizon = emptyValue[0];
  const vertical = emptyValue[1];
  const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //идем по строке
  for (i = 0; i <= 9; i++) {
    for(j = 0; j < digits.length; j++){
      if(board[horizon][i] === digits[j])
    }
  }

}
// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}
// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}
