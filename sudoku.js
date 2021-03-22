// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const line =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

// 1-5 8-2 ---
// -9- -76 4-5
// 2-- 4-- 819
// -19 --7 3-6
// 762 -83 -9-
// --- -61 -5-
// --7 6-- -3-
// 43- -2- 5-1
// 6-- 3-8 9--
const splittedLine = line.split("");
// console.log(splittedLine);
function rec(arr, arr1 = [], arr2=[], arr3=[], ind = 0) {
  // const squareTable = [];
  if (ind === arr.length) return [arr1, arr2, arr3];
  arr1.push(arr[ind], arr[ind+1], arr[ind+2]);
  arr2.push(arr[ind+3], arr[ind+4], arr[ind+5]);
  arr3.push(arr[ind+6], arr[ind+7], arr[ind+8]);
  return rec(arr, arr1,arr2,arr3, ind+9);
}
console.log(rec(splittedLine));



function solve(boardString) {
  //создаем массив массивов
  const table = [];
  const squareTable = [];
  // const splittedLine = line.split("");
  for (let i = 0; i < splittedLine.length; i++) {
    const arr = [];
    if(i <= 2 ) arr.push(splittedLine[i]);

  }


  for (let i = 0; i < 9; i++) {
    const array = [];
    for (let j = 0; j < 9; j++) {
      array.push(splittedLine.shift());
    }
    table.push(array);
  }
  // console.log(table);

  const result = [];
  for (let i = 0; i < table[0].length; i++) {
    const elem = table[0][i];
    const elem1 = table[i][1];
    if (elem !== '-') {
      result.push(elem);
    }
    if (elem1 !== '-') result.push(elem1);
  }
}
// console.log(solve(line));

solve(line);

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
