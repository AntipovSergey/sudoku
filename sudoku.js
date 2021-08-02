// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// Принимает строку => возвращает решенную строку

// let input = [
//     ["4", ".", "1", "."],
//     [".", "2", ".", "."],
//     [".", ".", "3", "."],
//     [".", ".", "2", "."],
// ];

function solve(boardString) {
}

function getPossibleValues(arr) {
  const allPossibleNums = [1, 2, 3, 4];
  // return [] возможных значений
}

function findEmpty(board) {
  // return [x, y] или null(если массив заполнен целиком)
}

function searchHorisontal(arr) {
  // return [] найденных значений
}

function searchVertical(arr, y) {
  // return [] найденных значений
  const nums = [];
  for (let i = 0; i < arr.length; i += 1) {
    nums.push(arr[i][y]);
  }
  return nums.filter((el) => el !== '.');
}

function searchInCell(arr) {
  // return [] найденных значений
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
