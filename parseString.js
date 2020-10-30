const fs = require("fs");

function parseString() {
  let bigString = fs
    .readFileSync("./sudoku-puzzles.txt", "utf-8")
    .split("\n")
    .filter((array) => {
      return array;
    });
  let boards = [];
  for (let i = 0; i < bigString.length; i++) {
    let board = [];
    const el = bigString[i];
    for (let j = 0; j < el.length; j += 9) {
      let row = [];
      for (let k = 0; k < 9; k++) {
        row.push(el[j + k]);
      }
      board.push(row);
    }
    boards.push(board);
  }
  return boards;
}

// console.log(parseString());

let boards = parseString();

function toNumberString(boards) {
  return boards.map((board) => {
    return board.map((array) => {
      return array.map((stringElement) => {
        return stringElement === "-" ? 0 : Number(stringElement);
      });
    });
  });
}

// console.log(toNumberString(boards));

let exampleOfThirdBoard = toNumberString(boards);

console.table(exampleOfThirdBoard[3]);
