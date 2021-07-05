let boardString = [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
  ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
  ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
  ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
  ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
  ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
  ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
  ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
];

// function solve(boardString) {
//   for (let i = 0; i < boardString.length; i++) {
//     for (let j = 0; j < boardString.length; j++) {
//       if (boardString[i][j] === '-') {
//         boardString[i][j] = String(
//           Math.round(1 - 0.5 + Math.random() * (9 - 1 + 1))
//         );
//       }
//     }
//   }
//   return boardString;
// }

// console.log(solve(boardString));

function isSolved(boardString) {
  function solve(boardString) {
    for (let i = 0; i < boardString.length; i++) {
      for (let j = 0; j < boardString.length; j++) {
        if (boardString[i][j] === '-') {
          boardString[i][j] = String(
            Math.round(1 - 0.5 + Math.random() * (9 - 1 + 1))
          );
        }
      }
    }
    return boardString;
  }

  let table = solve();

  for (let i = 0; i < table.length; i++) {
    let arr = Array.from(new Set(table[i]));
    if (arr.length === table[i].length) {
      return true;
    } else {
      return solve();
    }
  }
}

console.log(isSolved(boardString));

// function prettyBoard(board) {}

// module.exports = {
//   solve: solve,
//   isSolved: isSolved,
//   prettyBoard: prettyBoard,
// };
