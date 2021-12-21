// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// const text = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
function solve(boardString) {
  console.log('>>>>>', boardString)
  let sudokuBoard = [];
  for (let i = 0; i < 81; i += 9) {
    sudokuBoard.push(boardString.slice(i, i + 9).split(''))
  }
  return sudokuBoard
}

// console.table(solve(text))

const board = solve();

function findEmpty(board) {

  for (let horizon = 0; horizon < 9; horizon++) {
    for (let vertical = 0; vertical < 9; vertical++) {
      if (board[horizon][vertical] === '-') {
        return [horizon, vertical];
      }
    }
  }
  return 'done'
}
//  console.log(findEmpty(board))


// след функция берет это значение и проверяет, что можно подставить под него

// а для этого ей нужно сравнить все строки и столбцы, и квадраты на цифры   [1, 2, 3, 4, 5, 6, 7, 8, 9]
// затем подставляет 

// переходит к следующему и пока пустые значения не закончатся
// если не находит значение то откатывается назад и проверяет предыдущие значения 
function check() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (i = 0; i < arr.length; i++) {

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

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
