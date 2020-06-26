// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.

const { randomBytes } = require("crypto");

// How you represent your board is up to you!
function solve(boardString) {
  let result = puzzleParse(boardString);
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (result[i][j] === '-') {
        for (let number = 1; number < 10; number++) {
          if (checkRow(result, number, i) &&
          checkColumn(result, number, j) &&
          (checkSquare(result, number, i, j))) {
            result[i][j] = `${number}`;
          }
          
        }
      }
    }
  }
  return result;
}


function checkRow(array, num, i) {
  for (let j = 0; j < array.length; j++) {
    if (array[i][j] === `${num}`) {
      return false
    }
  }
  return true
}



function checkColumn(data, number, j){
  for(let i = 0; i < data.length; i++) {
    if (data[i][j] === `${number}`) return false;
  }
  return true;

}


function checkSquare(array, number, i, j) {
  if(i >= 0 && i <= 2 && j >= 0 && i <= 2) return isInSquare(array, number, 0, 0, 2, 2);
  if(i >= 3 && i <= 5 && j >= 0 && i <= 2) return isInSquare(array, number, 3, 0, 5, 2);
  if(i >= 6 && i <= 8 && j >= 0 && i <= 2) return isInSquare(array, number, 6, 0, 8, 2);

  if(i >= 0 && i <= 2 && j >= 3 && i <= 5) return isInSquare(array, number, 0, 3, 2, 5);
  if(i >= 3 && i <= 5 && j >= 3 && i <= 5) return isInSquare(array, number, 3, 3, 5, 5);
  if(i >= 6 && i <= 8 && j >= 3 && i <= 5) return isInSquare(array, number, 6, 3, 8, 5);
  
  if(i >= 0 && i <= 2 && j >= 6 && i <= 8) return isInSquare(array, number, 0, 6, 2, 8);
  if(i >= 3 && i <= 5 && j >= 6 && i <= 8) return isInSquare(array, number, 3, 6, 5, 8);
  if(i >= 6 && i <= 8 && j >= 6 && i <= 8) return isInSquare(array, number, 6, 6, 8, 8);
}

function isInSquare(array, number, iStart, jStart, iEnd, jEnd) {
  for (let i = iStart; i <= iEnd; i++) {
    for (j = jStart; j <= jEnd; j++) {
      if (array[i][j] === `${number}`) return false;
    }
  }
  return true;
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


function puzzleParse(str) {
  let arr = [];
  for (let i = 0; i < str.length; i += 9) {
    arr.push(str.slice(i, i + 9).split(''));
  }
  return arr;
}


console.table(puzzleParse('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'));
// console.table(puzzleParse('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));
// console.log(checkSquare(sudoku, 9, 0, 1));
// console.log(checkRow(sudoku, 9, 0));
// console.log(checkColumn(sudoku, 9, 1));
console.table(solve('--5-3--819-285--6-6----4-5---74-283-34976---5--83--49-15--87--2-9----6---26-495-3'));



// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
