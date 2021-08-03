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

const string = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

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

function replacer(value, arr, r, c) {
  arr[r][c] = value;
}

function solve(boardString) {
  const board = parseString(boardString);
  // while (findEmpty(board) && ) {
  // const value = getPossibleValues(board);
  // const [r, c] = findEmpty(board);
  // if (value.length === 1) replacer(value[0], board, r, c);
  // }
  return board;
}

function getPossibleValues(arr) {
  const [r, c] = findEmpty(arr);
  const allPossibleNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const allNums = [
    ...searchHorizontal(arr, r),
    ...searchVertical(arr, c),
    ...searchInSector(arr, r, c),
  ];
  const uniq = [...new Set(allNums)];
  return allPossibleNums.filter((el) => !uniq.includes(el));
}

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

function searchHorizontal(input, x) {
  return input[x].filter((x) => x !== '-');
}

function searchVertical(arr, y) {
  const nums = [];
  for (let i = 0; i < arr.length; i += 1) {
    nums.push(arr[i][y]);
  }
  return nums.filter((el) => el !== '-');
}

// найти заполненные значения в ячейке
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
// Принимает строку, ищет прочерки => если прочерки есть - false, нет - true
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// форматирует строку в 9 строк по 9 символов
function prettyBoard(board) {}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
