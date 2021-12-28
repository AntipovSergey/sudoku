function f0(boardString) {
  let s = -1;
  return new Array(9).fill(new Array(9).fill(0)).map((item) => item.map(() => boardString[++s]));
}

function f2(i, j, arr0) {
  const arr4 = [...arr0[i]].concat(new Array(9).fill(0).map((item, index) => arr0[index][j]));
  const arr5 = new Array(9).fill(0).filter((item, index, arr) => !arr.includes(index + 1));

  // for (let k = 0; k < 9; k += 1) {
  //   arr0[i].push(arr0[k][j]);
  // }
  // const arr1 = [];
  // for (let x = 1; x < 10; x += 1) {
  //   const number = x.toString();
  //   if (!arr0[i].includes(number)) {
  //     arr1.push(number);
  //   }
  // }
  console.table(arr0);
  console.log(arr4);
  console.log(arr5);
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
