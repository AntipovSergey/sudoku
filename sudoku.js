// make quadratic array from string
function f0(boardString) {
  let s = -1;
  return new Array(9).fill(new Array(9).fill(0)).map((item) => item.map(() => boardString[++s]));
}

// search in row and column
function f2(i, j, arr0) {
  const arr = [...arr0[i]].concat(new Array(9).fill(0).map((item, index) => arr0[index][j]));
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item) => !arr.includes(item.toString()));
}

// search in quadrant 3x3
function f3(row, col, arr) {
  const result = [];
  const leftCol = Math.floor(col / 3) * 3;
  const topRow = Math.floor(row / 3) * 3;

  for (let i = topRow; i < topRow + 3; i += 1) {
    for (let j = leftCol; j < leftCol + 3; j += 1) {
      if (arr[i][j] !== '-') {
        result.push(+arr[i][j]);
      }
    }
  }
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item) => !result.includes(item));
}

// search coincidence in f2() and f3()
function f4(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}

function isSolved(board) {

}

// Принимает доску в той или иной форме и
// возвращает хорошо отформатированную строку
// для вывода на экран.
// Плата ввода будет в любом
// возврат из формы `resolve`.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  f0,
  f2,
  f3,
  f4,
};
