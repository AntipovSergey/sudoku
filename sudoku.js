// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// Принимает строку => возвращает решенную строку

// const input = [
//   ['4', '3', '1', '2', '5', '7', '1', '2', '.'],
//   ['.', '2', '.', '.', '4', '3', '1', '2', '2'],
//   ['.', '.', '3', '.', '4', '3', '1', '2', '.'],
//   ['.', '.', '2', '.', '4', '3', '1', '2', '.'],
//   ['4', '3', '1', '2', '4', '3', '1', '2', '4'],
//   ['.', '2', '.', '.', '4', '3', '1', '2', '.'],
//   ['.', '.', '3', '.', '4', '3', '1', '2', '.'],
//   ['.', '.', '2', '.', '4', '3', '1', '2', '.'],
//   ['.', '.', '2', '.', '4', '3', '1', '2', '8'],
// ];

const string = '---7754----------8-8-19----3----1-6--------34----6817-2-4---6-39------2-53-2-----';
const input = '12--3------1--4-';
const str2 = '----------2-65-------18--4--9----6-4-3---57-------------------73------9----------';
function parseString(str) {
  let newStr = str;
  const result = [];
  for (let i = 0; i < Math.sqrt(str.length); i += 1) {
    const arr = [];
    for (let j = 0; j < Math.sqrt(str.length); j += 1) {
      if (newStr[0] === '-') arr.push(newStr[0]);
      else arr.push(+newStr[0]);
      newStr = newStr.slice(1);
    }
    result.push(arr);
  }
  return result;
}

// Проверить доску, проверила валидна ли доска => вернула true/false
function isValid(board) {}

// Решить доску
function solve(boardString) {
  const board = parseString(boardString);
  // if (isValid) ...
  fillEmptyCell(board);
  return board;
}

// Заполнить пустые ячейки
function fillEmptyCell(arrBoard) {
  const coordinates = findEmpty(arrBoard);
  if (!coordinates) {
    return true;
  }
  const posValues = getPossibleValues(arrBoard, coordinates);
  for (let i = 0; i < posValues.length; i += 1) {
    arrBoard[coordinates[0]][coordinates[1]] = posValues[i];
    if (fillEmptyCell(arrBoard)) {
      return true;
    }
    arrBoard[coordinates[0]][coordinates[1]] = '-';
  }
  return false;
}

// Получить массив возможных значений
function getPossibleValues(arr, coordinates) {
  const [r, c] = coordinates;
  const allPossibleNums = [];
  for (let i = 1; i < arr.length + 1; i += 1) {
    allPossibleNums.push(i);
  }
  const allNums = [
    ...searchHorizontal(arr, r),
    ...searchVertical(arr, c),
    ...searchInSector(arr, r, c),
  ];
  const uniq = [...new Set(allNums)];
  return allPossibleNums.filter((el) => !uniq.includes(el));
}

// Найти позицию пустой ячейки
function findEmpty(board) {
  const emptyCell = '-';
  for (let r = 0; r < board.length; r += 1) {
    for (let c = 0; c < board.length; c += 1) {
      if (board[r][c] === emptyCell) {
        return [r, c];
      }
    }
  }
  return null;
}

// Найти все имеющиеся в строке
function searchHorizontal(input, x) {
  return input[x].filter((x) => x !== '-');
}

// Найти все имеющиеся в столбце
function searchVertical(arr, y) {
  const nums = [];
  for (let i = 0; i < arr.length; i += 1) {
    nums.push(arr[i][y]);
  }
  return nums.filter((el) => el !== '-');
}

// Найти заполненные значения в ячейке
function searchInSector(arr, r, c) {
  const boardSize = Math.sqrt(arr.length);
  const row = Math.floor(r / boardSize) * boardSize;
  const col = Math.floor(c / boardSize) * boardSize;
  const cellArr = [];
  for (let i = row; i < row + boardSize; i += 1) {
    for (let j = col; j < col + boardSize; j += 1) {
      if (arr[i][j] !== '-') cellArr.push(arr[i][j]);
    }
  }
  return cellArr;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// сумма всех эл-в массива = 405, по строкам = 45, по столбцам = 45
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// форматирует массив в 9 строк по 9 символов
function prettyBoard(board) {
  let str = '';
  for (let i = 0; i < board.length; i += 1) {
    str += `${board[i].join(' ')}\n`;
  }
  return str;
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
