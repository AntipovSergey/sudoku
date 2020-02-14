// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
let sudoku = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

let board = createBoard(sudoku);

function createBoard(sudoku) {
  let dash = new RegExp('-', 'g');
  sudoku = sudoku.replace(dash, 0);
  let board0 = Array.from(sudoku).map(function (i) {
    return parseInt(i, 10)
  });
  let board = [];
  let index = 0;
  while (index < board0.length) {
    board.push(board0.slice(index, 9 + index));
    index += 9;
  }
  return board;
}
console.table(createBoard(sudoku))

function validfunct(board, row, col) {
  let value = board[row][col] + 1;
  if (isValid(value)) {
    board[row][col] = value;
  } else {
    validfunct(board[row][col] + 1)
    board[row][col] = value
  }
}

function solve(board) {


  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (board[row][col] === 0) {
        validfunct(board, row, col)
      }
    }
  }
  return board
}

function isValid(value) {
  if (checkRow(value) == true && checkCol(value) == true && checkGrid(value) == true) {
    return true
  } else {
    return false
  }
}

function checkRow(value) {
  if (board[row].includes(value)) {
    return false;
  }
  return true;
}

function checkCol(value) {
  if (board[col].includes(value)) {
    return false;
  }
  return true;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  return true
  let test = new RegExp('d{81}', g);
  (board.search(test) = -1) ? 'YOU FAILED...' : 'Congratulations, you succeded';
}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(boardString) {
  return boardString;
}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}


console.log(solve(board));


