let arr = [
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

let solveSudoku = function (board) {
  const size = 9;
  const boxSize = 3;

  const findEmpty = (board) => {
    for (let r = 0; r < size; r += 1) {
      for (let c = 0; c < size; c += 1) {
        if (board[r][c] === ".") {
          return [r, c];
        }
      }
    }
    return null;
  };
  const validate = (num, pos, board) => {
    const [r, c] = pos;
    //Check rows
    for (let i = 0; i < size; i += 1) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }
    //Check cols
    for (let i = 0; i < size; i += 1) {
      if (board[r][i] === num && i !== r) {
        return false;
      }
    }
    //Check box
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;
    for (let i = boxRow; i < boxRow + board; i += 1) {
      for (let j = boxCol; j < boxCol + boxSize; i += 1) {
        if (board[r][i] === num && i !== r && j !== c) {
          return false;
        }
      }
    }
    return true;
  };
  const solve = () => {
    const currPos = findEmpty(board);
    if (currPos == null) {
      return true;
    }
    for (let i = 1; i < size + 1; i += 1) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);

      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solve()) {
          return true;
        }
        board[x][y] = ".";
      }
    }

    return false;
  }
  solve();
  return board;
};
//console.table(arr);
console.table(solveSudoku(arr));