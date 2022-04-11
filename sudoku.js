// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
//преобразует строку в массив 
let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
let board = [['1', '-', '5', '8', '-', '2', '-', '-', '-']
['-', '9', '-', '-', '7', '6', '4', '-', '5']
['2', '-', '-', '4', '-', '-', '8', '1', '9']
['-', '1', '9', '-', '-', '7', '3', '-', '6']
['7', '6', '2', '-', '8', '3', '-', '9', '-']
['-', '-', '-', '-', '6', '1', '-', '5', '-']
['-', '-', '7', '6', '-', '-', '-', '3', '-']
['4', '3', '-', '-', '2', '-', '5', '-', '1']
['6', '-', '-', '3', '-', '8', '9', '-', '-']]

function solve(boardString) {
  let arr = []
  for(let i = 0; i < boardString.length; i +=9) {
    arr.push(boardString.slice(i, i+9).split(''))
  }

  return arr
  console.log('first changes');
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
//проверяет решилась или нет 
const cellCheck = (board) => {
for(let i = 0; i < board.length; i++) {
  for(let j = 0; j < board[i].length; j++) {
  if( board[i][j] == '-')
  return [i, j]
  }
 }
 
}


function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
//приводит к виду доски 
function prettyBoard(board) {
  let el = board.join('\n').replaceAll(',','')
  console.table(el);
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
