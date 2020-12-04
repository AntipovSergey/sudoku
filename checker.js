const checker = (index1, index2, num) => {
  let row = [];
  let col = [];
  let square = [];

  const rowSquare = Math.floor(index1 / 3) * 3;
  const colSquare = Math.floor(index2 / 3) * 3;

  for (let i = rowSquare; i < rowSquare + 3; i += 1) {
    for (let n = colSquare; n < colSquare + 3; n += 1) {
      square.push(prettyBoard()[i][n]);
    }
  }

  for (let i = 0; i <= 8; i += 1) {
    row.push(prettyBoard()[index1][i]);
  }
  for (let i = 0; i <= 8; i += 1) {
    col.push(prettyBoard()[i][index2]);
  }

  if (
    row.includes(num) === true ||
    col.includes(num) === true ||
    square.includes(num) === true
  ) {
    return true;
  }
  return false;
};
