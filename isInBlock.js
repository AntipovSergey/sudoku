const isInBlock = (value, y, x, board) => {
  // const findFrom = (num) => {
  //   for (let i = num; i >= 0; i--) {
  //     if (i % 3 === 0) return i;
  //   }
  // };

  // const findTo = (num) => {
  //   for (let i = num + 1; i <= board.length; i++) {
  //     if (i % 3 === 0) return i - 1;
  //   }
  // };

  // const beginLoopY = findFrom(y);
  // const endLoopY = findTo(y);
  // const beginLoopX = findFrom(x);
  // const endoopX = findTo(x);

  for (let i = Math.floor(y / 3) * 3; i < Math.floor(y / 3) * 3 + 3; i++) {
    for (let j = Math.floor(x / 3) * 3; j < Math.floor(x / 3) * 3 + 3; j++) {
      if (board[i][j] === value) {
        return false;
      }
    }
  }
  return true;
};

module.exports = isInBlock;
