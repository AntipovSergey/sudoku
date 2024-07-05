function read() {
  const fs = require("fs");
  const sudokuBoards = fs.readFileSync("./puzzles.txt", "utf8").split("\n");
  return sudokuBoards;
}

function generateNumber() {
  return String(1 + Math.floor(Math.random() * 9));
}
function checkRowUniqueElements(board, row, number) {
  for (let column = 0; column < board.length; column++) {
    if (board[row][column] === number) {
      return false;
    }
  }
  return true;
}

function checkColumnUniqueElements(board, column, number) {
  const uniqueColumn = [];
  for (let row = 0; row < board.length; row++) {
    uniqueColumn.push(board[row][column]);
  }
  console.log(uniqueColumn);
  if (uniqueColumn.find((item) => item === number) === undefined) {
    return true;
  }
  return false;
}

function checkValidBoxes(board, row, column, number) {
  const boxArray = [];

  for (let i = 3 * Math.floor(row / 3); i < 3 * Math.floor(row / 3) + 3; i++) {
    for (
      let j = 3 * Math.floor(column / 3);
      j < 3 * Math.floor(column / 3) + 3;
      j++
    ) {
      boxArray.push(board[i][j]);
    }
  }
  if (boxArray.find((item) => item === number) === undefined) {
    return true;
  }
  return false;
}

function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "-") {
        return false;
      }
    }
  }
  return true;
}

function prettyBoard(board) {
  const newBoard = [];
  for (let index = 0; index < 9; index++) {
    const row = [];
    const slicedArray = board.slice(9 * index, 9 * (index + 1));
    for (const char of slicedArray) {
      row.push(char);
    }
    newBoard.push(row);
  }
  return newBoard;
}

function solve(board) {
  if (isSolved(board)) {
    return board;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === "-") {
        for (let fitNumber = 1; fitNumber < 10; fitNumber++) {
          if (
            checkRowUniqueElements(board, i, String(fitNumber)) &&
            checkColumnUniqueElements(board, j, String(fitNumber)) &&
            checkValidBoxes(board, i, j, String(fitNumber))
          ) {
            board[i][j] = String(fitNumber);
            if (solve(board)) return board;
          } else {
            board[i][j] = "-";
          }
        }
        return false;
      }
    }
  }
}
const board = prettyBoard(read()[0]);

// console.log(checkValidBoxes(board, 0, 0, "9"));
console.log(solve(board));
