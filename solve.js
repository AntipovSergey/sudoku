const tableBoard = require('./board');

const solveSudoku = function (board) {
// функция по поиску пустых квадратиков
  const findEmpty = (board) => {
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board.length; c++) {
        if (board[r][c] === '-') {
          return [r, c]; // r - позиция в строке; c - позиция в столбце
        }
      }
    }
    return null;
  };

  const checkBoard = (num, pos, board) => {
    const [r, c] = pos;

    // проверка чисел по горизонтали
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
    const currPos = findEmpty(board);

    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < 10; i++) {
      const currNum = i;
      const check = checkBoard(currNum, currPos, board);

      if (check) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solve()) {
          return true;
        }
        board[x][y] = '-';
      }
    }

    return false;
  };

  solve();
  return board;
};
// console.log(findEmpty(tableBoard));
console.table(solveSudoku(tableBoard));
