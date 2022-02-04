// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

const size = 9;
const findZero = (arr) => {
  for (let row = 0; row < size; row++) {
    for (let column = 0; column < size; column++) {
      if (arr[row][column] === 0) {
        return [row, column];
      }
    }
  }
  return null;
}


const checkPosition = (i, coord, parseBoard) => {
  const [row, column] = coord;

  for (let j = 0; j < parseBoard[row].length; j++) {
    if (parseBoard[row][j] === i) { return false; }
  }

  for (let j = 0; j < parseBoard[column].length; j++) {
    if (parseBoard[j][column] === i) { return false; }
  }

  return true;
}


function solve(boardString) {
  //main - новая игра (доска)
  const parsedBoard = parseBoard(boardString);

  return solveAll(parsedBoard)
}

function parseBoard(arr) {
  let main = []
  for (let i = 0; i < arr.length; i += 9) {
    main.push(arr.slice(i, i + 9).replace(/-/gi, 0).split('').map((el) => +el));
  } return main;
}

function solveAll(board) {
  const coord = findZero(board)

  if (coord) {
    const [r, c] = coord
    for (let i = 1; i <= size; i++) {
      if (checkPosition(i, coord, board)) {
        board[r][c] = i
        if (solveAll(board)) {
          return board
        }
        board[r][c] = 0;
      }
    }
  } else {
    return board;
  }
  return false
}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  console.table(board);
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
