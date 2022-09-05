const fs = require('fs');

function solveSudoku(board) {
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

  const validate = (num, pos, board) => {
    const [row, col] = pos;
    for (let i = 0; i < size; i += 1) {
      if (board[i][col] === num && i !== row) return false;
    }
    for (let i = 0; i < size; i += 1) {
      if (board[row][i] === num && i !== col) return false;
    }
    const boxRow = Math.floor(row / boxSize) * boxSize;
    const boxCol = Math.floor(col / boxSize) * boxSize;
    for (let i = boxRow; i < boxRow + boxSize; i += 1) {
      for (let j = boxCol; j < boxCol + boxSize; j += 1) {
        if (board[i][j] === num && i !== row && j !== col) return false;
      }
    }
    return true;
  };

  const solve = () => {
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

  solve();
  return board;
}

function conversed() {
  const arr = fs.readFileSync(`${__dirname}/puzzles.txt`, 'utf-8').split('\n');
  arr.pop();
  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = arr[i].split('');
    arr[i] = reversArrToBoard(arr[i]);
  }
  arr.map((el) => solveSudoku(el));
  for (let i = 1; i < arr.length; i += 1) {
    console.log(prettyBoard(arr[i], i));
  }
  return arr;
}
conversed();

function reversArrToBoard(arr) {
  const array = [];
  for (let i = 0; i < 9; i += 1) {
    array.push(arr.splice(0, 9));
  }
  return array;
}

function prettyBoard(board, number) {
  const head = `${number} судоку \n`;
  const stringReplace = board.toString().replace(/,/g, ' ');
  const regex = /\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}\s\d{1}/g;
  const matchStr = stringReplace.match(regex);
  let res = matchStr.map((el) => (`${el.slice(0, 6)} ${el.slice(6, 12)} ${el.slice(12)}`));
  res.splice(3, 0, ' '.repeat(19));
  res.splice(7, 0, ' '.repeat(19));
  res = res.join('\n');
  return `${head + res}\n`;
}
