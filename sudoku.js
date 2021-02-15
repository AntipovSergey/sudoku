// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.

function createBoard(str) {
  const matrix = [];
  let idx = 0;
  for (let i = 0; i < 9; i += 1) {
    matrix[i] = [];
    for (let j = 0; j < 9; j += 1) {
      matrix[i].push(str[idx]);
      idx += 1
    }
  }
  return matrix;
}

function findEmpty(matrix) {
  let result = null;
  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix.length; j++) {
      if(matrix[i][j] === '-'){
        return [i, j];
      }
    }
  }
}

const { iteratee } = require("lodash")

// How you represent your board is up to you!
function solve(boardString) {

}
const checkVertical = (board, y, x) => {
  let allvariants = ['1','2','3','4','5','6','7','8','9'];
  let news = [];
  for(let i = 0; i < board.length; i += 1){
    // allvariants = allvariants.filter(el => el !== board[i][x]);
    if (board[i][x].push(news)) {
      return false;
    }
  }
  return true;
  // return allvariants;
} 

console.log(checkVertical(board, 0,2))

const board = [
  ['1','-','5','8','-','2','-','-','-'],
  ['-','9','-','-','7','6','4','-','5'],
  ['2','-','-','4','-','-','8','1','9'],
  ['-','1','9','-','-','7','3','-','6'],
  ['7','6','2','-','8','3','-','9','-'],
  ['-','-','-','-','6','1','-','5','-'],
  ['-','-','7','6','-','-','-','3','-'],
  ['4','3','-','-','2','-','5','-','1'],
  ['6','-','-','3','-','8','9','-','-']
  ] 

// console.log(board);

// const gorizontal = (arr, y, x) => {
//   // let 
//   for (let i = 0; i < arr.length; i++) {
//     // const element = arr[i];
//     if(board[i] === '-') {
//     
//   }
// }


  
// let gorizontal = function() {
//   const find = (board) => {
//     for (let i = 0; i < 9; i++) {
//       for (let j = 0; j < 9; j++) {
//         if(board[i][j] === '-') {
//             return [i,j];
//       } else if(board[i][j] != j ) {
              // return false;
//         }
//     }
//   }
// }


const board = [
['1','-','5','8','-','2','-','-','-'],
['-','9','-','-','7','6','4','-','5'],
['2','-','-','4','-','-','8','1','9'],
['-','1','9','-','-','7','3','-','6'],
['7','6','2','-','8','3','-','9','-'],
['-','-','-','-','6','1','-','5','-'],
['-','-','7','6','-','-','-','3','-'],
['4','3','-','-','2','-','5','-','1'],
['6','-','-','3','-','8','9','-','-']
] 


// pos = [0, 1]

function blockCheckout(board) {
  let newArr = [];
  for (let j = 0; j < board.length; j++) {
    let arr = [];
    for (let i = 0; i < board[j].length; i++) {
      arr.push(board[j][i]);
    }
    newArr.push(arr);
  }
  return newArr;
  // const size = 9;
  // const boxSize = 3;
  // let boxRow;
  // let boxCol;

  // for (let i = 0; i < size; i++) {
  //   for (let j = 0; j < size; j++) {
  //     boxRow = Math.floor(board[i] / boxSize) * boxSize;
  //     boxCol = Math.floor(board[i][j] / boxSize) * boxSize;
  //   }
  // }

  // for (let i = boxRow; i < boxRow + boxSize; i++) {
  //   for (let j = boxCol; j < boxCol + boxSize; j++) {
  //     if (board[i][j] === num && )
  //   }
    
  // }
}
console.log(blockCheckout(board));


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
