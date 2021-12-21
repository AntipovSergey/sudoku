// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

const solve = (boardString) => {
// Создаем доску
  const board = [];
  console.log(boardString);
  for (let i = 0; i < 9; i++) {
    board.push(
      boardString.slice(i * 9, i * 9 + 9)
        .split('')
        .map((el) => {
          if (el === '-') {
            return '.';
          } return el;
        }),
    );
  }
  // Задаем размер поля
  const size = 9;
  // Задаем размер поля 3х3
  const boxSize = 3;
  // Ищем пустые клетки и меняем их на точки
  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '.') {
          return [r, c];
        }
      }
    }
    return null;
  };
// Встречается ли это число в после

  const validate = (num, pos, board) => {
    const [r, c] = pos;


    // Проверяем строки 
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // Проверяем колонны
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // Проверяем 3х3 квадрат 
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };
// Заполняем судоку
  const fill = () => {
    const currPos = findEmpty(board);

    if (currPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);
      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (fill()) {
          return true;
        }

        board[x][y] = '.';
      }
    }

    return false;
  };

  fill();

  return board;
}

// solve(boardString);
// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(solve) {
// console.log('solve>>>', solve)
  return solve.map((el) => el.map((val) => {
    for (let i = 0; i < val.length; i++) {
      if (val.indexOf(val[i]) !== val.lastIndexOf(val[i])) {
        return false
      } else {
        return true
      }
    }
  }))
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
