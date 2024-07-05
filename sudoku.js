function read() {
  const fs = require("fs");
  const sudokuBoards = fs.readFileSync("./puzzles.txt", "utf8").split("\n");
  return sudokuBoards;
}

function generateNumber() {
  return 1 + Math.floor(Math.random() * 9);
}

function solve() {
  const board = prettyBoard(read()[0]);
  const ifSolved = isSolved(board);

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === "-") {
        const newElement = generateNumber();
        board[i][j] = String(newElement);
      }
    }
    return;
  }
  console.log(board);
}
solve();

function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "-" || board[j][i] === "-") {
        return false;
      }
    }
  }
}

function checkRow(boardRow, number) {
  return boardRow.find((item) => number !== item);
}

function checkColumn(board, i, number) {
  const uniqueColumn = [];
  for (let j = 0; j < board.length; j++) {
    uniqueColumn.push(board[j][i]);
  }
  return board.find((item) => item !== number);
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
