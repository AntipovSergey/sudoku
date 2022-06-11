const tableBoard = require('./board');

function solveBoard() {
// функция по поиску пустых квадратиков
  function findEmpty(arr) {
    for (let r = 0; r < arr.length; r++) {
      for (let c = 0; c < arr[r].length; c++) {
        if (arr[r][c] === '-') {
          return [r, c]; // r - позиция в строке; c - позиция в столбце
        }
      }
    }
    return null;
  }

  const checkBoard = (num, pos, board) => {
    const [r, c] = pos;

    // проверка чисел по горизонтали
    for (let i = 0; i < 10; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // проверка чисел по ветрикали
    for (let i = 0; i < 10; i++) {
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
    const currPos = findEmpty(tableBoard);

    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < 10; i++) {
      const currNum = i;
      const check = checkBoard(currNum, currPos, tableBoard);

      if (check) {
        const [x, y] = currPos;
        tableBoard[x][y] = currNum;

        if (solve()) {
          return true;
        }
        tableBoard[x][y] = '-';
      }
    }

    return false;
  };

  solve();
  return tableBoard;
}
// console.log(findEmpty(tableBoard));
console.table(solveBoard(tableBoard));
