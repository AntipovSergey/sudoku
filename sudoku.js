const fs = require("fs");
const RAW_SUDOKU_FILE = fs.readFileSync("./sudoku-puzzles.txt", "utf-8");

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {}

function getCellCoordinates(board) {
  const coordinateArray = [];
  for (let row = 0; row < board.length; row++) {
		for (let col = 0; col < board[row].length; col++) {
			const colIndex = board[row][col];
			if (colIndex != -1) {
				coordinateArray.push([row, col]);
			}
		}
  }
  return coordinateArray;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(file) {
  const LINE_BREAKER_REGEXP = /\n/gm;
  let board = file.slice().replace(LINE_BREAKER_REGEXP, "");

  let boardsContainer = {};
  let inputString = board.split("");
  const ROW_LENGTH = 9;
  let sudokuNumberInContainer = 0;
  while (inputString.length !== 0) {
    const sudokuArray = [];
    for (let index = 0; index < ROW_LENGTH; index += 1) {
      const stringSlice = inputString.slice(0, ROW_LENGTH);
      sudokuArray.push(stringSlice);
      inputString = inputString.slice(ROW_LENGTH, -1);
    }
    boardsContainer[sudokuNumberInContainer] = sudokuArray;
    sudokuNumberInContainer += 1;
  }
  return boardsContainer;
}
//Поиск числа в горизонтальной строке
function searchWordHorizontal(num, arr) {
  let ArrElemToString = arr.map((el) => el.join(""));
  for (let i = 0; i < ArrElemToString.length; i++) {
    if (ArrElemToString[i].includes(num + "")) {
      return true;
    }
  }
  return false;
}

// Поиск числа в вертикальной строке
function searchWordVertical(num, arr) {
  for (let i = 0; i < arr.length; i++) {
    let verticalWord = "";
    for (let j = 0; j < arr.length; j++) {
      verticalWord += arr[j][i];
    }
    if (verticalWord.includes(num + "")) {
      return true;
    }
  }
  return false;
}

const sudokuZero = prettyBoard(RAW_SUDOKU_FILE)["0"];
let isInVertical = searchWordVertical(6, sudokuZero);
let isInHorizontal = searchWordHorizontal(9, sudokuZero);

console.log(getCellCoordinates(sudokuZero));

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
