const fs = require("fs");
const RAW_SUDOKU_FILE = fs.readFileSync("./sudoku-puzzles.txt", "utf-8");

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

function renderBoard(board) {
  let i = 1;
  console.log('___________________');
  for (const row of board) {
    console.log(`${row.slice(0,3).join('|')}  ${row.slice(3,6).join('|')}  ${row.slice(6,9).join('|')}`);
    if (i % 3 === 0) {
      console.log()
    }
    i += 1
  }
}

function getCellCoordinates(board) {
  const coordinateArray = [];
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const colIndex = board[row][col];
      if (colIndex === "-") {
        coordinateArray.push([row, col]);
      }
    }
  }
  return coordinateArray;
}

//Получаем массив чисел которые уже есть в строке
function getRectrictedHorizontal(cellCoordinates, arr) {
  const currentRow = arr[cellCoordinates[0]].filter((el) => Number(el));
  return currentRow;
}

//Получаем массив чисел которые уже есть в столбце
function getRectrictedVertical(cellCoordinates, arr) {
  let currentCol = [];
  for (let i = 0; i < arr.length; i++) {
    let arrTemp = [];
    for (let j = 0; j < arr.length; j++) {
      arrTemp.push(arr[j][i]);
    }
    currentCol.push(arrTemp);
  }
  return currentCol[cellCoordinates[1]].filter((el) => Number(el));
}

function getBlockRestrictedNumbers(cellCoordinates, board) {
  let prevRow = 0;
  let prevCol = 0;
  for (let i = 2; i <= 8; i += 3) {
    if (cellCoordinates[0] < i + 1) {
      for (let j = 2; j <= 8; j += 3) {
        if (cellCoordinates[1] < j + 1) {
          const restrictedNumbers = board
            .slice(prevRow, i + 1)
            .map((elem) => elem.slice(prevCol, j + 1))
            .flat();
          return restrictedNumbers.filter((el) => Number(el));
        }
        prevCol += 3;
      }
    }
    prevRow += 3;
  }
}

function getSharedRestrictedNumbers(
  verticalNumbers,
  horizontalNumbers,
  blockNumbers
) {
  const restrictedNumbers = [].concat(
    verticalNumbers,
    horizontalNumbers,
    blockNumbers
  );
  const resultArray = [];
  for (const number of restrictedNumbers) {
    if (!resultArray.includes(number)) {
      resultArray.push(number);
    }
  }
  return resultArray;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  return getCellCoordinates(board).length === 0;
}

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const sudokuBoard = prettyBoard(boardString)["0"];
  const coordinatesArray = getCellCoordinates(sudokuBoard);
  let counter = 0;
  while (!isSolved(sudokuBoard || counter < 100)) {
    for (let i = 0; i < coordinatesArray.length; i++) {
      const currCoordinate = coordinatesArray[i];
      const vert = getRectrictedVertical(currCoordinate, sudokuBoard);
      const hori = getRectrictedHorizontal(currCoordinate, sudokuBoard);
      const block = getBlockRestrictedNumbers(currCoordinate, sudokuBoard);
      const shared = getSharedRestrictedNumbers(vert, hori, block);
      const candidates = "123456789"
        .split("")
        .filter((el) => !shared.includes(el));
      // console.log(
      //   `coords: ${currCoordinate}, candidates: ${candidates}, shared: ${shared}, coordnatesArray.length ${coordinatesArray.length}`
      // );
      if (candidates.length === 1) {
        const [row, col] = currCoordinate;
        sudokuBoard[row][col] = candidates[0];
        renderBoard(sudokuBoard);
        coordinatesArray.splice(i, 1);
        i -= 1;
      }
    }
    counter += 1;
  }
}

solve(RAW_SUDOKU_FILE);

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
