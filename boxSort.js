function checkAll(board, row, col, num) {
  const boxCheck = (board, row, col, num) => {
    const rowScuare = Math.floor(row / 3) * 3;
    const colScuare = Math.floor(col / 3) * 3;
    for (let i = colScuare; i < colScuare + 3; i++) {
      for (let j = rowScuare; j < rowScuare + 3; j++) {
        if (board[i][j] === num) {
          return false;
        }
      }
    }
    return true;
  };

  for (let i = 0; i < arr.length; i += 1) {
    const chunk = [];

    for (let j = 0; j < arr.length; j++) {
      chunk.push(arr[j][i]);
    }

    resultArrays.push(chunk);
  }

  return resultArrays;
}

module.exports = {
  checkAll,
};
