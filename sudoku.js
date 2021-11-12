const fs = require('fs');

function getBoards(path) {
  let input = fs.readFileSync(`${__dirname}${path}.txt`, 'utf-8')
  return input.trim().split('\n');
}
function taskToArr(num){
  let arr = [];
  let unformattedStr = getSudokuTask(num)
  for (let i = 0; i < unformattedStr.length -8; i = i + 9) {
    let temp = unformattedStr.slice(i, i + 9)
    arr.push(temp.split(''))
  }
  return arr;
}

function getSudokuTask(num) {
  let allTasks = getBoards('/sudoku-puzzles')
  return allTasks[num];
}

const board = taskToArr(0)


console.log(board[0][0]);



// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  function solve(board, n) {
    for (let y = 0; y < board.length; x++) {
      for (let x = 0; x < board.length; y++) {
        if (board[x][y] === n || board[y][x] === n) return false;
      }
    }
    return true;
  }
  board = [
    [1, 0, 5, 8, 0, 2, 0, 0, 0],
    [2, 0, 0, 4, 0, 0, 8, 1, 9],
    [7, 6, 2, 0, 8, 3, 0, 9, 0],
    [0, 0, 7, 6, 0, 0, 0, 3, 0],
    [6, 0, 0, 3, 0, 8, 9, 0, 0],
    [0, 9, 0, 0, 7, 6, 4, 0, 5],
    [4, 3, 0, 0, 2, 0, 5, 0, 1],
    [0, 0, 0, 0, 6, 1, 0, 5, 0],
    [0, 1, 9, 0, 0, 7, 3, 0, 6],
  ];
  console.log(solve(board, 2));
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  for (let n = 1; n < 10; n++){
    for (let col = 0; col < board.length; col++) {
      for (let row = 0; row < board[col].length; row++) {
        console.log('row: ', board[row]);
        if (board[col][row] === '-'){
          console.log('check');
          return n;
        }

      } 
      console.log('col: ', board[col]);
    }
    }
}
prettyBoard(board)

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
