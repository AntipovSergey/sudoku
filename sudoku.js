const fs = require('fs');

function getBoards(path) {
  let input = fs.readFileSync(`${__dirname}${path}.txt`, 'utf-8')
  return input.trim().split('\n');
}
function taskToArr(num){
  let formattedStr = '';
  let arr = [];
  let unformattedStr = getSudokuTask(num)
  for (let i = 0; i < unformattedStr.length -8; i = i + 9) {
    formattedStr += unformattedStr.slice(i, i + 9) + '\n'
  }
  arr = formattedStr.trim().split('\n');
  return arr;
}
console.log(taskToArr(0))

function getSudokuTask(num) {
  let allTasks = getBoards('/sudoku-puzzles')
  return allTasks[num];
}

const board = taskToArr()

// Takes a board as a string in the format
// you see in the board file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// function solve(boardString) {

// }


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// function isSolved(board) {

// }


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// function prettyBoard(board) {

// }

// Exports all the functions to use them in another file.
// module.exports = {
// 	solve: solve,
// 	isSolved: isSolved,
// 	prettyBoard: prettyBoard

// }
