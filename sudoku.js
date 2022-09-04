const fs = require('fs');

// eslint-disable-next-line no-use-before-define
function solve(board) {
  const size = 9;
  const boxSize = 3;
  console.log(board[0][1]);
  // поиск пустой ячейки
  // eslint-disable-next-line no-use-before-define
  function findEmpty() {
    for (let row = 0; row < size; row += 1) {
      for (let col = 0; col < size; col += 1) {
        if (board[row][col] === '-') {
          return [row, col];
        }
      }
    }
    return false;
  }
  const validate = (num, position) => {
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
