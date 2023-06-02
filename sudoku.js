function solve(boardString) {
  // function getString(boardString) {
  //   const board = boardString.split('\n').join('').split('');
  //   const newBoard = [];
  //   for (let i = 0; i < board.length; i += 9) {
  //     const row = [board[i], board[i + 1], board[i + 2]];
  //     newBoard.push(row);
  //   }
  //   return newBoard;
  // }
  const board = getString(boardString);
  const box = 3;
  const size = 9;
  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return undefined;
  };

  const checkPos = function (num, pos, board) {
    const [r, c] = pos;

    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    const boxRow = Math.floor(r / box) * box;
    const boxCol = Math.floor(c / box) * box;

    for (let i = boxRow; i < boxRow + box; i++) {
      for (let j = boxCol; j < boxCol + box; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };

  const master = () => {
    const currPos = findEmpty(board);
    if (currPos === undefined) {
      return true;
    }
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = checkPos(currNum, currPos, board);
      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (master()) return true;
        board[x][y] = '-';
      }
    }
    return false;
  };

  master();
  return board;
}

function isSolved(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === '-') return false;
    }
  }
  return true;
}

function prettyBoard(board) {
  let finalBoard = '';
  for (let i = 0; i < board.length; i++) {
    const newArray = board[i];

    if (i === 0) {
      finalBoard += '------------------------------------\n';
      finalBoard += '|';
    }
    if (i) {
      finalBoard += '|';
    }
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === 3) {
        finalBoard += ' ';
      } else {
        finalBoard += `  ${newArray[j]}`;
      }
      if ((j + 1) % 3 === 0) {
        finalBoard += ' | ';
      }
    }
    finalBoard += '\n';
    if ((i) === 8) {
      finalBoard += '------------------------------------';
    }
    if ((i + 1) % 3 === 0 && (i + 1) % 9 !== 0) {
      finalBoard += '------------------------------------\n';
    }
  }
  return finalBoard;
}
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
