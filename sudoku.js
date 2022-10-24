/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function isInHorizontal(board, element, i) {
  return board[i].includes(element);
}

function isInVertical(board, element, j) {
  return (board.findIndex((_, i) => 
    board[i][j] === element) === -1 ? false : true);
}

function isInBlock(board, element, i, j) {
  let xMin = Math.floor(i / 3) * 3, xMax = xMin + 3;
  let yMin = Math.floor(j / 3) * 3, yMax = yMin + 3;

  for (let x = xMin; x < xMax; x++) 
    for (let y = yMin; y < yMax; y++)
      if (element === board[x][y]) return true;

  return false;
}

function findPossibles(board, i, j) {
  const possibles = [];

  for (let value = 1; value <= 9; value++) {
    if (isInHorizontal(board, value, i)
    || isInVertical(board, value, j)
    || isInBlock(board, value, i, j)) continue;

    possibles.push(value);
  }
  if (possibles.length === 1) return possibles[0];
  return possibles;
}

function solve(board) {
  const copiedBoard = JSON.parse(JSON.stringify(board));
  const possibles = [];

  function popFromPossibles(board, element, i, j) {
    board[i].forEach((e, y) => {
      if (Array.isArray(e)) {
        const index = e.findIndex((el) => el === element);
        if (index !== -1) {
          e.splice(index, 1);
          if (e.length === 1) {
            board[i][y] = e[0];
            possibles.splice(possibles.findIndex(k => k.arr === board[i][y]))
            popFromPossibles(board, e[0], i, y);
          }
        };
      }
    });

    board.forEach((e, x) => {
      if (Array.isArray(e[j])) {
        const index = e[j].findIndex((el) => el === element);
        if (index !== -1) {
          e[j].splice(index, 1);
          if (e[j].length === 1) {
            board[x][j] = e[j][0];
            possibles.splice(possibles.findIndex(k => k.arr === board[x][j]))
            popFromPossibles(board, e[j][0], x, j);
          }
        };
      }
    });

    let xMin = Math.floor(i / 3) * 3, xMax = xMin + 3;
    let yMin = Math.floor(j / 3) * 3, yMax = yMin + 3;
    for (let x = xMin; x < xMax; x++) 
      for (let y = yMin; y < yMax; y++) {
        if (Array.isArray(board[x][y])) {
          const index = board[x][y].findIndex((el) => el === element);
          if (index !== -1) {
            board[x][y].splice(index, 1);
            if (board[x][y].length === 1) {
              board[x][y] = board[x][y][0];
              possibles.splice(possibles.findIndex(k => k.arr === board[x][y]))
              popFromPossibles(board, board[x][y][0], x, y);
            }
          };
        }
      }
  }



  function fillPossibles(board, possibles) {
    let changed = false;

    const findLimits = (i, j) => ({
      iMin: Math.floor(i / 3) * 3, 
      iMax: Math.floor(i / 3) * 3 + 3,
      jMin: Math.floor(j / 3) * 3,
      jMax: Math.floor(j / 3) * 3 + 3,
    })

    const inLimits = (i, j, l) => i >= l.iMin && i < l.iMax && j >= l.jMin && j < l.jMax;

    for (let possible of possibles) {
      const limits = findLimits(possible.i, possible.j);
      
      const intersection = possibles
        .filter(x => (x.i === possible.i || x.j === possible.j || inLimits(x.i, x.j, limits))
          && x.i !== possible.i && x.j !== possible.j);
      
      for (let i = 0; i < possible.arr; i++) {
        if (intersection.every(x => !x.arr.includes(possible.arr[i]))) {
          popFromPossibles(board, possible.arr[i], possible.i, possible.j);
          possibles.splice(i, 1);
          changed = true;
        }
      }
    }

    return changed;
  }

  let changed = true;
  let first = true;

  while(changed) {
    changed = false;
    for (let i = 0; i < copiedBoard.length; i++) {
      for (let j = 0; j < copiedBoard[i].length; j++) {
        if (copiedBoard[i][j] === null || Array.isArray(copiedBoard[i][j])) {
          const foundElement = findPossibles(copiedBoard, i, j);

          if (!Array.isArray(foundElement)) {
            copiedBoard[i][j] = foundElement;
            popFromPossibles(copiedBoard, foundElement, i, j);
            changed = true;
            continue;
          }

          copiedBoard[i][j] = foundElement;

          if (first) possibles.push({ i, j, arr: foundElement });
          else {
            changed = fillPossibles(copiedBoard, possibles);
          }
        }
      }
    }
    first = false;
  }

  return copiedBoard;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  return validate(board) && board.every(x => x.every(y => typeof y === 'number'));
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  if (Array.isArray(board)) {
    return board.map(x => x.map(y => Array.isArray(y) || y === null ? '-' : y).join(' ')).join('\n');
  }
  return board
    .match(/[\d-]{9}/g)
    .map((el) => el.split("").join(" "))
    .join("\n");
}

// Парсинг доски
function parseBoard(line) {
  return line
    .match(/[\d-]{9}/g)
    .map((el) => el.split("").map((el) => (el === "-" ? null : Number(el))));
}

// Разбиение общего файла на строки судок
function splitBoards(fileData) {
  return fileData
    .trim()
    .split("\n")
    .map((el) => el.trim());
}

// Проверка валидности доски
function validate(board) {
  throw new Error('non implemented exception');
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).

module.exports = {
  solve,
  isSolved,
  prettyBoard,
  parseBoard,
  splitBoards,
  validate,
  isInBlock,
  isInHorizontal,
  isInVertical,
};
