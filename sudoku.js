// Генерирует доску судоку из строки
function genSudBoard(boardString) {
  const board = [];
  let boardRow = [];

  for (let i = 0; i < boardString.length; i += 1) {
    boardRow.push(boardString[i]);
    if (boardRow.length === 9) {
      board.push(boardRow);
      boardRow = [];
    }
  }

  return board;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  return board.map((el) => el.map((item) => item).join('')).join('\n');
}

// Проверяет числе по вертикали
function checkVer(board, j, guessNum) {
  for (let i = 0; i < board.length; i += 1) {
    if (board[i][j] === `${guessNum}`) return false;
  }

  return true;
}

// Проверяет числе по горизонтали
function checkHor(board, i, guessNum) {
  for (let j = 0; j < board[i].length; j += 1) {
    if (board[i][j] === `${guessNum}`) return false;
  }

  return true;
}

// Проверяет числе в своём квадрате
function checkQuad(board, i, j, guessNum) {
  for (let z = 0; z < 9; z += 1) {
    const a = 3 * Math.floor(i / 3) + Math.floor(z / 3);
    const b = 3 * Math.floor(j / 3) + (z % 3);
    if (board[a][b] === `${guessNum}`) return false;
  }

  return true;
}

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const board = genSudBoard(boardString);

  // цикл по колонке
  for (let i = 0; i < board.length; i += 1) {
    // цикл по ряду
    for (let j = 0; j < board[i].length; j += 1) {
      // проверка на "-"
      if (board[i][j] === '-') {
        // подставляемые значения
        for (let guessNum = 1; guessNum <= 9; guessNum += 1) {
          // проверка на правильность заполненных чисел
          if (checkVer(board, j, guessNum)
          && checkHor(board, i, guessNum)
          && checkQuad(board, i, j, guessNum)) {
            board[i][j] = `${guessNum}`;

            // если появился тупик, откат назад рекурсией
            if (solve(board)) {
              return true;
            }
            board[i][j] = '-';
          } // <== подставляемые значения
        } // <== проверка на правильность

        return false;
      } // <== проверка на "-"
    } // <== цикл по ряду
  } // <== цикл по колонке

  return board;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  // цикл по колонке
  for (let i = 0; i < board.length; i += 1) {
    // цикл по ряду
    for (let j = 0; j < board[i].length; j += 1) {
      if (board[i][j] === '-'
      && !(checkVer(board, j, board[i][j])
      && checkHor(board, i, board[i][j])
      && checkQuad(board, i, j, [i][j]))) {
        return false;
      }
    }
  }

  return true;
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  genSudBoard,
  checkVer,
  checkHor,
  checkQuad,
};
