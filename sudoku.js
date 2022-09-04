const fs = require('fs');

function solve(board) {
  const size = 9;
  const boxSize = 3;

  const findEmpty = (board) => {
    for (let r = 0; r < size; r += 1) {
      for (let c = 0; c < size; c += 1) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  };
  const validate = (num, position, board) => {
    const [row, col] = position;
    for (let i = 0; i < size; i += 1) {
      if (board[i][col] === num && i !== row) return false;
    }
    for (let i = 0; i < size; i += 1) {
      if (board[row][i] === num && i !== col) return false;
    }
    const boxStarderRow = Math.floor(row / boxSize) * boxSize;
    const boxStarderCol = Math.floor(col / boxSize) * boxSize;
    for (let i = boxStarderRow; i < boxStarderRow + boxSize; i += 1) {
      for (let j = boxStarderCol; j < boxStarderCol + boxSize; j += 1) {
        if (board[i][j] === num && i !== row && j !== col) {
          return false;
        }
      }
    }
    return true;
  };
  const solveSudoku = () => {
    const currPos = findEmpty(board);
    if (currPos === null) return true;
    for (let i = 1; i < size + 1; i += 1) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);
      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;
        if (solve()) return true;
        board[x][y] = '-';
      }
    }

    return false;
  };
  solveSudoku();
  return board;
}

function conversed() {
  const arr = fs.readFileSync(`${__dirname}/puzzles.txt`, 'utf-8').split('\n');
  arr.pop();
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].split('');
    // eslint-disable-next-line no-use-before-define
    arr[i] = reversArrToBoard(arr[i]);
  }
  arr.map((el) => solve(el));
  return arr;
}

function reversArrToBoard(arr) {
  const array = [];
  for (let i = 0; i < 9; i += 1) {
    array.push(arr.splice(0, 9));
  }
  return array;
}

conversed();

// function prettyBoard(board) {
//   const stringReplace = board.toString().replace(/,/g, ' ');
//   const regex = /\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}/g;
//   const matchStr = stringReplace.match(regex);
//   const res = matchStr.map((el) => (`${el.slice(0, 6)} ${el.slice(6, 12)} ${el.slice(12)}`));
//   res.splice(3, 0, ' '.repeat(19));
//   res.splice(7, 0, ' '.repeat(19));
//   return res.join('\n');
// }
