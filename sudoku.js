function f0(boardString) {
  let s = -1;
  return new Array(9).fill(new Array(9).fill(0)).map((item) => item.map(() => boardString[++s]));
}

function f2(i, j, arr0) {
  const arr = [...arr0[i]].concat(new Array(9).fill(0).map((item, index) => arr0[index][j]));
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item) => !arr.includes(item.toString()));
}

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}
function f4(arr1, arr2) {
  const arr3 = [];
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2.includes(arr1[i])) {
      arr3.push(arr1[i]);
    }
  }
  return arr3;
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
  f4,
  f2,
  f0,
};
