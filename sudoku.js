const fs = require('fs');
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
let text = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8')
let arr = text.split('\n')
let arr1 = []
for (let i = 0; i < 15; i ++) {
arr1.push(arr[i].split(''))
}
//console.log(arr1)
let r = ''
for(let i = 0; i < arr1[0].length; i ++) {
  if(i % 9 === 0) {
  r = r + '\n' + arr[0][i]
  } else { r = r + arr[0][i] }
//console.log(arr[0][i])
}
let re = r.split('\n').slice(1)
console.log(r.split('\n').slice(1))
let syd = re.map((a) => a.split(''))
console.log(syd)


function solve(boardString) {
  console.log('first changes');
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
  solve,
  isSolved,
  prettyBoard,
};
