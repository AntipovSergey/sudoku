// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');
}
// const board = solve(boardString);

const board = [
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
  [1, 3, 0, 2, 4, 0, 6, 9, 0],
];

function groupCheck(board, x, y, arr) {
  const row = Math.floor(x / 3) * 3; // проверка по ряду
  console.log(row);
  const colomn = Math.floor(y / 3) * 3; // проверка по столбцу
  console.log(colomn);
  let first; // первый ряд группы
  let second; // второй ряд группы
  let third; // третий ряд группы
  for (let yy = 0; yy < 3; yy += 1) { // цикл проверки первого ряда в группе
    for (let xx = 0; xx < 3; xx += 1) {
      arr.forEach((elem) => {
        if (elem === board[yy][xx]) arr.pop(elem)
      })
    }
  }
  // if (board[first][second] === row[third]) return false;
  // if (board[first][second] !== row[third]) return true;
  // for (let y = 3; y < 6; y += 1) { // цикл проверки второго ряда в группе
  //   for (let z = 6; z < 9; z += 1) { // цикл проверки третьего ряда в группе

  //   }
  // }
}
console.log(groupCheck(board, 2, 7, [2, 3]));

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  groupCheck,
};
