let a = prettyBoard(
  "----------2-65-------18--4--9----6-4-3---57-------------------73------9----------"
);
solve(a);
console.table(a);

function solve(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] == "-") {
        for (let s = 1; s <= 9; s++) {
          if (isSolved(board, i, j, s)) {
            board[i][j] = `${s}`;
            if (solve(board)) {
              return true;
            } else {
              board[i][j] = "-";
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
function isSolved(board, row, col, s) {
}

function prettyBoard(board) {
  let side = Math.sqrt(board.length);
  let res = [];

  for (let i = 0; i < board.length; i += side) {
    let a = board.slice(-board.length + i, -board.length + side + i);
    res.push(a.split(""));
  }

  res.pop();
  let a = board.slice(-side);
  res.push(a.split(""));

  return res;
}

module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
