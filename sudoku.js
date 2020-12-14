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
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] === '-') {
        for (let z = 1; z <= 9; z += 1) {
          if (validRow(board, i, z) && validCol(board, j, z) && validBox(board, i, j, z)) {
            board[i][j] = z;
            if (isSolved(board)) return true;
            else board[i][j] = '-';
          }
        }
        return false;
      }
    }
  }
  return true;
}


// console.log(validBox(board_box,0,1,4));
// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  return board.join('\n');
}


function validRow(board, row_index, num) {
  let check = true;
  board[row_index].forEach(el => {
    if (el == num) check = false
  })
  return check
}

function validCol(board, col_index, n) {
  for (let i = 0; i < 9; i += 1) {
    if (board[i][col_index] == n) {
      return false;
    }
  }
  return true;
}

function validBox(board, row_index, col_index, n) {
  let row = Math.floor(row_index / 3) * 3;
  let col = Math.floor(col_index / 3) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[row + i][col + j] == n)
        return false;
    }
  }
  return true;
}


// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
  validCol: validCol
}
