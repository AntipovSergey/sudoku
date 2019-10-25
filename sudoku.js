// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

// Принимает доску в виде строки в формате
// вы видите в файле головоломки. Возвращает
// что-то, представляющее доску после
// ваш решатель попытался ее решить.
// Как вы представляете свою доску, зависит от вас!
function solve(boardString) {}

function solve(boardString) {}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

// Возвращает логическое значение, указывающее,
// или предоставленная плата не решена.
// Панель ввода будет в любом
// форма `решить` возвращает.
function isSolved(board) {}

function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.

// / Принимает в доске в некоторой форме и
// возвращает строку, которая хорошо отформатирована
// для вывода на экран.
// Панель ввода будет в любом
// форма `решить` возвращает.
function prettyBoard(board) {
  let stringBoard =
    "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
  board = stringBoard.split("");
  let mass = [];
  for (let i = 0; i < 9; i++) {
    mass[i] = board.splice(0, 9);
  }
  return mass;
<<<<<<< HEAD
}
let mass = prettyBoard(
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
);
console.log(mass);
//индексы искомых элементов
function targetIndex(mass) {
  let index = [];
  for (let i = 0; i < mass.length; i++) {
    for (let j = 0; j < mass[i].length; j++) {
      if (mass[i][j] === "-") {
        index.push(i, j);
        return index;
      }
    }
  }
  return index;
}

let a = targetIndex(mass);
console.log(a);

// числа из строки
function rowNumbs(index, board) {
  let numbs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let probablyNumbs = [];
  let allNumbs = [];
  for (let i = 0; i < board[index[1]].length; i++) {
    if (board[index[0]][i] != "-") {
      allNumbs.push(board[index[0]][i]);
    }
  }
  for (let j = 0; j < numbs.length; j++) {
    if (!allNumbs.includes(numbs[j])) {
      probablyNumbs.push(numbs[j]);
    }
  }
  return probablyNumbs;
}
let b = rowNumbs(a, mass);
console.log(b);

// числа из столбца
function colNumbs(index, board) {
  let probablyNumbs = [];
  let allNumbs = [];
  let numbs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < board[index[0]].length; i++) {
    if (board[i][index[1]] != "-") {
      allNumbs.push(board[i][index[1]]);
    }
  }
  for (let j = 0; j < numbs.length; j++) {
    if (!allNumbs.includes(numbs[j])) {
      probablyNumbs.push(numbs[j]);
    }
  }
  return probablyNumbs;
}
let c = colNumbs(a, mass);
console.log(c);

function smallBoard(index, board) {
  // for (let i = 0; i < 9; i++) {
  let numbs = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let allNumbs = [];
  const smallRow = Math.floor(index[0] / 3) * 3;
  const smallColumn = Math.floor(index[1] / 3) * 3;
  let probablyNumbs = [];
  let middleNumbs = [];
  //   for (let i = 0; i < board[index[0]].length; i++) { // возможно не надо
  //     if (board[i][index[j]] != "-") {
  //       allNumbs.push(board[i][index[1]]);
  //     }
  //   }
  for (let i = smallRow; i < smallRow + 3; i++) {
    for (let j = smallColumn; j < smallColumn + 3; j++) {
      middleNumbs.push(board[i][j]);
      // console.log(mass[6][0]);
    }
  }
  for (let i = 0; i < middleNumbs.length; i++) {
    if (middleNumbs[i] != "-") {
      allNumbs.push(middleNumbs[i]);
    }
  }
  for (let j = 0; j < numbs.length; j++) {
    if (!allNumbs.includes(numbs[j])) {
      probablyNumbs.push(numbs[j]);
    }
  }
  // return middleNumbs;
  //return allNumbs;
  return probablyNumbs;
}
let d = smallBoard(a, mass);
console.log(d);
// module.exports = {
//   solve: solve,
//   isSolved: isSolved,
//   prettyBoard: prettyBoard
// };
=======