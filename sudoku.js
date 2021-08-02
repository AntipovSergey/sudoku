// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// Принимает строку => возвращает решенную строку

const input = [
  ['4', '3', '1', '2'],
  ['.', '2', '.', '.'],
  ['.', '.', '3', '.'],
  ['.', '.', '2', '.'],
];

function solve(boardString) {}

function getPossibleValues(arr) {
  const allPossibleNums = [1, 2, 3, 4];
  // return [] возможных значений
}

function findEmpty(board) {
  const emptyCell = '.';
  for (let r = 0; r < board.length; r += 1) {
    for (let c = 0; c < board.length; c += 1) {
      if (board[r][c] === emptyCell) {
        return [r, c];
      }
    }
    return null;
  }
}

function searchHorisontal(input, x = 0) {
  return input[x].filter((x) => x !== '.');
}

function searchVertical(arr, y) {
  // return [] найденных значений
  const nums = [];
  for (let i = 0; i < arr.length; i += 1) {
    nums.push(arr[i][y]);
  }
  return nums.filter((el) => el !== '.');
}

// найти заполненные значения в ячейке
function searchInCell(arr) {
  const [r, c] = findEmpty(arr);
  const row = Math.floor(r / Math.sqrt(arr.length)) * Math.sqrt(arr.length);
  const col = Math.floor(c / Math.sqrt(arr.length)) * Math.sqrt(arr.length);
  const cellArr = [];

  for (let i = row; i < row + Math.sqrt(arr.length); i += 1) {
    for (let j = col; j < col + Math.sqrt(arr.length); j += 1) {
      if (arr[i][j] !== '.') cellArr.push(arr[i][j]);
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
