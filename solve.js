const tableBoard = require('./board');

const solveSudoku = function (boardSize) {
// функция по поиску пустых квадратиков
  function findEmpty(boardSize) {
    for (let r = 0; r < boardSize.length; r++) {
      for (let c = 0; c < boardSize[r].length; c++) {
        if (boardSize[r][c] === '-') {
          return [r, c]; // r - позиция в строке; c - позиция в столбце
        }
      }
    }
    return null;
  }

  const checkBoard = (num, pos, board) => {
    const [r, c] = pos;

    // проверка чисел по горизонтали
    // console.log('!!!!!!!', board, board[0].length);
    for (let i = 0; i < 9; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // проверка чисел по ветрикали
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // проверка по секторам 3х3
    const boxRow = Math.floor(r / 3) * 3;
    const boxCol = Math.floor(c / 3) * 3;
    for (let l = boxRow; l < boxRow + 3; l++) {
      for (let m = boxCol; m < boxCol + 3; m++) {
        if (board[l][m] === num && l !== r && m !== c) {
          return false;
        }
      }
    }
    return true;
  };

  const solve = () => {
    const currPos = findEmpty(boardSize);

    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < 10; i++) {
      const currNum = i.toString;
      const check = checkBoard(currNum, currPos, boardSize);

      if (check) {
        const [x, y] = currPos;
        boardSize[x][y] = currNum;

        if (solve()) {
          return true;
        }
        boardSize[x][y] = '-';
      }
    }

    return false;
  };

  solve();
  return boardSize;
};
// console.log(findEmpty(tableBoard));
console.log(solveSudoku(tableBoard));
