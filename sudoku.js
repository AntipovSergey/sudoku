const solveSudoku = (resultBoard) => {
  const size = 9;
  const boxSize = 3;
  // получение борда цифр и пустых элементов
  function solvet(resultBoard) {
    const board = [];
    for (let i = 0; i < 9; i++) {
      board.push(
        resultBoard
          .slice(i * 9, i * 9 + 9)
          .split("")
          .map((el) => {
            if (el === "-") {
              return ".";
            }

            return el;
          })
      );
    }
    return board;
  }
  const emptySudoku = solvet(resultBoard);
  // поиск значений с точкой-пустых элементов
  const findEmpty = (emptySudoku) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (emptySudoku[r][c] === ".") {
          return [r, c];
        }
      }
    }
    return null;
  };
  // валидация для подставленных значений
  const validate = (num, pos, emptySudoku) => {
    const [r, c] = pos;

    // проверка строк
    for (let i = 0; i < size; i++) {
      if (emptySudoku[i][c] === num && i !== r) {
        return false;
      }
    }

    // проверка колонок
    for (let i = 0; i < size; i++) {
      if (emptySudoku[r][i] === num && i !== c) {
        return false;
      }
    }

    // проверка бокса
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (emptySudoku[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };
  // заполнение пустых мест числами с проверкой самих чисел
  const solve = () => {
    const currPos = findEmpty(emptySudoku);

    if (currPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, emptySudoku);
      // console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
      if (isValid) {
        const [x, y] = currPos;
        emptySudoku[x][y] = currNum;

        if (solve()) {
          return true;
        }

        emptySudoku[x][y] = ".";
      }
    }

    return false;
  };

  solve();
  // console.table(one);
  return emptySudoku;
};

function isSolved(solveSudoku) {
  const c = solveSudoku.flat();
  // console.log(c);
  const resultLength = [];
  for (let i = 0; i < c.length; i++) {
    if (Number(c[i])) {
      resultLength.push(c[i]);
    }
  }
  if (resultLength.length !== 81) {
    return false;
  }
  return true;
}

// isSolved(solveSudoku);
// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(solveSudoku) {
  const a = solveSudoku.join("\n");

  const arr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== ",") {
      arr.push(a[i]);
    }
  }

  const result = arr.join(" ");

  return ` ${result}`;
}

module.exports = {
  solveSudoku,
  isSolved,
  prettyBoard,
};
