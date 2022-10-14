const {createBoard} = require('./getBoard')

let puzzles = createBoard()

// console.log(puzzles)

// check emty elem in board
function findEmptyElement(board) {
  for (let r = 0; r < board[0].length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === '-') {
        return [r, c];
      }
    }
  }

  return null;
}

// console.log(findEmptyElement(puzzles));

// check valid number in rows and cols
function validate(board, number) {
  let num = number.toString();
  const [r, c] = findEmptyElement(board);

  for (let i = 0; i < board[0].length; i++) {
    if (board[i][c] === num && i !== r) {
      return false;
    }
  }

  for (let i = 0; i < board[0].length; i++) {
    if (board[r][i] === num && i !== c) {
      return false;
    }
  }
  board[r][c] = number

  return board;
}

console.table(createBoard());
console.table(validate(puzzles, 5));