
const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function solve(boardString) {
  let arr = (boardString.replace(/\-/gm, 0)).match(/.{9}/gm).map(el => el.split(''));
  return arr
}
solve(boardString)


function caseSwitcher(arr, num, i1, i2) {

  function numerizer(ig1, ig2) {

    for (let i = ig1; i <= ig1 + 2; i++){

      for (let j = ig2; j <= ig2 + 2; j++) {

        if (arr[i][j] !==  0 ){

          num = num.replace(arr[i][j],'')

        }
      }
    }
    return num
  }

  for (i = 0; i < arr.length; i++) {
    
    if (arr[i][i2] !== 0) num = num.replace(arr[i][i2], '');
  }

  for (j = 0; j < arr.length; j++) {

    if (arr[i1][j] !== 0) num = num.replace(arr[i1][j], '');

  }
    if (i1 <= 2 && i2 <= 2){  return num = numerizer(0, 0);} 
    if (3 <= i1 <= 5 && i2 <= 2) num = numerizer(3, 0);
    if  (6 <= i1 <= 8 && i2 <= 2) num = numerizer(6, 0);
    if (i1 <= 2 && 3 <= i2 <= 5) num = numerizer(0, 3);
    if (3 <= i1 <= 5 && 3 <= i2 <= 5) num = numerizer(3, 3);
    if (6 <= i1 <= 8 && 3 <= i2 <= 5) num = numerizer(6, 3);
    if (i1 <= 2 && 6 <= i2 <= 8) num = numerizer(0, 6);
    if (3 <= i1 <= 5 && 6 <= i2 <= 8) num = numerizer(3, 6); 
    if (6 <= i1 <= 8 && 6 <= i2 <= 8) num = numerizer(6, 6);
    

  return num;
}



function sudokuSolver(arr = boardString, i1 = 0, i2 = 0, num = '123456789') {
  
  if (!Array.isArray(arr)) arr = solve(arr);

  if (i1 === arr.length - 1 && i2 === arr.length - 1) {
      return arr;
    }
      
      
    if (i2 === arr.length - 1){
      sudokuSolver(arr, i1 + 1, 0);
    }
  
  if (arr[i1][i2] == 0) {
    num = caseSwitcher(arr, num, i1, i2);
    arr[i1][i2] = num[0];
    sudokuSolver(arr, i1, i2 + 1);
  }

  if (arr[i1][i2]) {
   sudokuSolver(arr, i1, i2 + 1);
  }
};

console.log(sudokuSolver(arr = boardString, i1 = 0, i2 = 0, num = '123456789'));


// // Exports all the functions to use them in another file.
// module.exports = {
//  solve: solve,
//  isSolved: isSolved,
//  prettyBoard: prettyBoard
// }

// Takes a board as a string in the format
// you see in the puzzle file. Returns
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
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}



