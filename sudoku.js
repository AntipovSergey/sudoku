// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  let board = [];
  for (let i = 0; i < boardString.length; i += 9) {
    board.push(boardString.split('').slice(i, i + 9));
  }
  return board;
}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {


  return true;
}

const board_box = [['1', '-', '5', '8', '-', '2', '-', '-', '-'],
['-', '9', '-', '-', '7', '6', '4', '-', '5'],
['2', '-', '-', '4', '-', '-', '8', '1', '9'],
['-', '1', '9', '-', '-', '7', '3', '-', '6'],
['7', '6', '2', '-', '8', '3', '-', '9', '-'],
['-', '-', '-', '-', '6', '1', '-', '5', '-'],
['-', '-', '7', '6', '-', '-', '-', '3', '-'],
['4', '3', '-', '-', '2', '-', '5', '-', '1'],
['6', '-', '-', '3', '-', '8', '9', '-', '-']];
function validBox(board, row_index, col_index, n) {
  let row = Math.floor(row_index / 3) * 3;
  let col = Math.floor(col_index / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      console.log(`row=${row}`, `col=${col}`, `[${row + i}][ ${col + j}]`);
      if (board[row + i][col + j] == n)
        return false;
    }
  }
  return true;
}
//1 - 5
//- 9 -
//2 - -
/*console.log('n=1', validBox(board_box, 0, 1, 1));
console.log('n=2', validBox(board_box, 0, 1, 2));
console.log('n=3', validBox(board_box, 0, 1, 3));*/

//8 - 2
//- 7 6
//4 - -
console.log('n=1', validBox(board_box, 0, 4, 1));
console.log('n=2', validBox(board_box, 0, 4, 2));
console.log('n=3', validBox(board_box, 0, 4, 3));

// console.log(validBox(board_box,0,1,4));
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
  prettyBoard: prettyBoard,
}
