const board1 = [
  [0, 5, 1, 3, 6, 2, 7, 0, 0],
  [0, 4, 0, 0, 5, 8, 0, 0, 0],
  [0, 0, 0, 4, 0, 0, 0, 2, 5],
  [0, 8, 0, 0, 0, 0, 9, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 5, 0, 0, 0, 0, 8, 0],
  [1, 2, 0, 0, 0, 9, 0, 0, 0],
  [0, 0, 0, 2, 8, 0, 0, 6, 0],
  [0, 0, 8, 5, 3, 4, 2, 9, 0],
];
// function prettyBoard(board) {
//   const newStr = boardString.split("");
//   let board = [];
//   for (let i = 0; i < 9; i++) {
//     board.push(newStr.splice(0, 9).map((el) => (el === "-" ? 0 : Number(el))));
//   }
//   return board;
// }

//does find empty spots
const nextEmptySpot = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) return [i, j];
    }
  }
  return [-1, -1];
};

//На вход функции подаются board, row = i, value */
const checkRow = (board, row, value) => {
  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }
  return true;
};

/* На вход функции подаются board, column = j, value */
const checkColumn = (board, column, value) => {
  for (let j = 0; j < board[column].length; j++) {
    if (board[j][column] === value) {
      return false;
    }
  }
  return true;
};

/* На вход функции подаются board,row = i, column = j, value */
const checkSquare = (board, row, column, value) => {
  let MiniRow = Math.floor(row / 3) * 3;
  let MiniColumn = Math.floor(column / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[MiniRow + i][MiniColumn + j] === value) {
        return false;
      }
    }
  }
  return true;
};
function Equality(board, row, column, value) {
  if (
    checkRow(board, row, value) &&
    checkColumn(board, column, value) &&
    checkSquare(board, row, column, value)
  ) {
    return true;
  }

  return false;
}

function solve(board) {
  let emptySpot = nextEmptySpot(board);
  let row = emptySpot[0];
  let col = emptySpot[1];

  if (row === -1) {
    console.log("tut stop");
    return board;
  }

  for (let num = 1; num <= 9; num++) {
    if (Equality(board, row, col, num)) {
      board[row][col] = num;
      // console.log(board[row][col]);
      solve(board);
    }
  }

  if (nextEmptySpot(board)[0] !== -1) board[row][col] = 0;

  return board;
}

console.log(solve(board1));
