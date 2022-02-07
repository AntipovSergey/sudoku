const fs = require('fs');
const { kill } = require('process');
const sudoku = fs.readFileSync('./sudoku-puzzles.txt', 'UTF8');

const toPuzzle = (content, puzzleNumber = 0) => {
  return content.split('\n')[puzzleNumber]
};

let puzzle = toPuzzle(sudoku, 4)

const generateBoard = (str) => {
  let arr = [];
  for (let i = 0; i < str.length; i += 9) {
    arr.push(str.slice(i, i + 9).split(''));
  }
  return arr;
};
console.log(generateBoard(puzzle))

const testSolve = (board) => {
  let x
  let y
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '-') {
        x = i
        y = j
        if (filterString(board1, x, y).length === 1) {
          board[i][j] = `${filterString(board1, x, y)}`
        }
      };
    };
  };
  if (board.join().includes('-')) return testSolve(board)
  return board
};

const filterString = (board, x, y) => {
  let solution = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  solution = solution.filter((el) => !board[x].includes(el));
  let colon = []
  for (let p = 0; p < board.length; p++) {
    colon.push(board[p][y])
  }
  solution = solution.filter((el) => !colon.includes(el))
  //console.log(colon)!!!!!!!!!!!!!!!!!

  let qr = Math.floor(x / 3) * 3
  let qc = Math.floor(y / 3) * 3
  let square = board[qr].slice(qc, qc + 3).concat(board[qr + 1].slice(qc, qc + 3), board[qr + 2].slice(qc, qc + 3))
  solution = solution.filter((el) => !square.includes(el))
  //console.log(square, 'Квадрат')!!!!!!!!!!!!!!!
  return solution
};

let board1 = generateBoard(puzzle)
console.log(testSolve(board1))






















const prettyBoard = (board) => {
  return board.join('\n').replace(/,/gi, ' ');
};

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
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

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
