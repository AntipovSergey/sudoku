function row(board, i, j) {
  const res = [];
  for (let k = 0; k < board[i].length; k++) {
    if (board[i][k] === '-' || k === j) continue
    res.push(board[i][k]);
  }
  return res;
}

function column(board, i, j) {
  const res = [];
  for (let k = 0; k < board.length; k++) {
    if (board[k][j] === '-' || k === i) continue
    res.push(board[k][j]);
  }
  return res;
}

module.exports = {
  row,
  column,
};

// [-,-,2,-,3,-,9,-,5]
// [1,2,3,4,5,6,7,8,9]
// [1,2,3,4,5,6,7,8,9]
// [1,2,3,4,5,6,7,8,9]
// [1,2,3,4,5,6,7,8,9]
// [1,2,3,4,5,6,7,8,9]
// [1,2,3,4,5,6,7,8,9]
// [1,2,3,4,5,6,7,8,9]
// [1,2,3,4,5,6,7,8,9]

// [2, 3, 9, 5] //сравнить с const x = [1,2,3,4,5,6,7,8,9].filter(el => !res.includes(el))
// [1, 2, 3, 5] //сравнить с x.filter(el => !res.includes(el))
