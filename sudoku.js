// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

let a = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function solve(boardString) {
  let arr = [];
  let x = 0;
  let z = [];
  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++) {
      if (boardString[x] === '-') arr.push(0);
      else arr.push(+boardString[x]);
      x += 1;
    }
    z.push(arr);
    arr = [];
  }
  return z;
}

// console.table(solve(a));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

let checking = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if ((arr[i][j] === num) && (arr[j][i] === num) && (validateBox(arr, i, j, num))) {
        return false;
      } else return true;
    }
  }
}

  function validateBox(board, row, col, value) {
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;
    let isFound = false;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[row + i][col + j] === value) isFound = true;
      }
    }
    return isFound;
  }


  function isSolved(board) {
    board.map(row => row.map(col => {
      if (col === 0) {
        for (let x = 1; x <= 9; x++) {
          if (checking(board, x)) col = x;
          else return col;
        }
      }
    }))
}

// console.log(solve(a))
console.log(isSolved(solve(a)));

// console.log(isSolved(a));
//   if (col === 0) {
//     col += 1;
//     if (checking(board,col)) {
//       j+=1;
//       return col;
//   } else col+=1;
// }))



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
  prettyBoard
}
