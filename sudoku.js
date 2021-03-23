// тестовая строка с данными судоку
let line =
  "----------2-65-------18--4--9----6-4-3---57-------------------73------9----------";


// функция для создания массива массивов и вывода доски в переменную board
function makeTable(boardString) {
  const boardNew = boardString.split('');
  let newArr = [];
  for (let i = 0; i < boardNew.length; i += 9) {
    newArr.push(boardNew.slice(i, i + 9))
  }
  return newArr;
}
const board = makeTable(line);

// основная функция решателя судоку
let solveSudoku = function (board) {

  // функция поиска '-' элемента в переменной board
  const isEmpty = (board) => {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
          return null;
  }

  // функция проверки NUM в ROW, COLUMN и BOX
  const allCheck = (num, pos, board) => {
    const [r, c] = pos;

    // проверка на нахождение NUM в ROW
    for (let i = 0; i < 9; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // проверка на нахождение NUM в COLUMN
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }


    // проверка на нахождение NUM в BOX
    const boxRow = Math.floor(r / 3) * 3;
    const boxCol = Math.floor(c / 3) * 3;

    for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }
          return true;
  }

  // функция-рекурсия для подстановки NUM вместо '-'
  const solve = () => {
    const step = isEmpty(board);

    if (step === null) {
      return true;
    }
    for (let i = 1; i < 9 + 1; i++) {
      const currNum = i.toString();
      const isValid = allCheck(currNum, step, board);
      if (isValid) {
        const [x, y] = step;
        board[x][y] = currNum;
        if (solve()) {
          return true;
        }
        board[x][y] = '-';
      }
    }
    return false;
  }

  solve();
  return board;
};

console.table(solveSudoku(board));
