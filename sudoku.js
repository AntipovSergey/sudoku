const fs = require('fs');
const { exit } = require('process');
const sudoku = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8')
const prepSudoku = prepareSudoku(sudoku)
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function prepareSudoku(str) {

  let mainArr = []

  for (let i = 0; i < 81; i += 9) {
    let arr1 = []
    for (let j = i; j < i + 9; j++) {
      arr1.push(sudoku[j])
    }
    mainArr.push(arr1)
  }

  return mainArr

}

function isDash(sudoku) {
  // const mappedSudoku = sudoku.map(el => el.flat(1))
  // console.log(mappedSudoku);
  // console.log(sudoku.flat())
  // exit
  return sudoku.flat().includes('-')
  
}

function solve(sudoku) {
  
  let controlNums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  let result = []
 
   

  for (const controlNum of controlNums) {
    for (let i = 0; i < sudoku.length; i++) {
      for (let j = 0; j < sudoku[i].length; j++) {
        // console.log(numbers)
        if (!sudoku[i].includes(controlNum) && sudoku[i][j] === '-')
        // console.log(sudoku[i][j])
          sudoku[i][j] = controlNum

        //console.log(sudoku[i])
      }
    }
  }
// console.log(isDash(sudoku));
  

if(isDash(sudoku)) {
  sudoku = solve(sudoku)
 } 

  return sudoku

  // console.log(sudoku)
}

// console.log(solve(sudoku))
console.log(solve(prepSudoku))



// console.log(solve());

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
