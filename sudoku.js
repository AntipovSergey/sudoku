const fs = require("fs");
const FIELD_SIZE = 81;
const BLOCKS_QUANTITY = FIELD_SIZE ** 0.25; //3
const RAW_SUDOKU_FILE = fs.readFileSync("./sudoku-puzzles.txt", "utf-8");
file = RAW_SUDOKU_FILE.match(/.{81}/gm);
for (let fileName = 0; fileName < file.length; fileName++) {
  fs.writeFileSync(`./puzzles/${fileName}.txt`, file[fileName], "utf8", "w");
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(fileString) {
  console.log(`INCOMING STRING: ${fileString}`);
  const ROW_LENGTH = FIELD_SIZE ** 0.5;
  const ROW_PARSER_REGEXP = new RegExp(`.`, "gm");
  let rawString = fileString.match(ROW_PARSER_REGEXP);
  const sudokuArray = [];
  for (let i = 0; i < ROW_LENGTH; i++) {
    const stringSlice = rawString.slice(0, ROW_LENGTH);
    sudokuArray.push(stringSlice);
    rawString = rawString.slice(ROW_LENGTH);
  }
  return sudokuArray;
}

function renderBoard(board, isTableView = true) {
  /*
   *isTableView true render table view
   * isTableView false render text view
   */
  if (isTableView) {
    console.table(board);
  } else {
    let i = 1;
    console.log("___________________");
    for (const row of board) {
      console.log(
        `${row.slice(0, 3).join("|")}  ${row.slice(3, 6).join("|")}  ${row
          .slice(6, 9)
          .join("|")}`
      );
      if (i % 3 === 0) {
        console.log();
      }
      i += 1;
    }
  }
}

function getCellCoordinates(board) {
  /**
   * Returns array of coordinates arrays [y, x] of all empty cells.
   */
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
function getRectrictedHorizontal(cellCoordinates, board) {
  const currentRow = board[cellCoordinates[0]].filter((el) => Number(el));
  return currentRow;
}

//Получаем массив чисел которые уже есть в столбце
function getRectrictedVertical(cellCoordinates, board) {
  let transpositionBoard = [];
  for (let i = 0; i < board.length; i++) {
    let arrTemp = [];
    for (let j = 0; j < board.length; j++) {
      arrTemp.push(board[j][i]);
    }
    transpositionBoard.push(arrTemp);
  }
  return transpositionBoard[cellCoordinates[1]].filter((el) => Number(el));
}

function getBlockRestricted(cellCoordinates, board) {
  /*
   * First of all we need to find a block for our cell.
   * We get cellCoordinates[0] for the first 'for-loop',
   * and cellCoordinates[1] for the second 'for-loop'.
   * Then we search for intersection for each coordinate.
   * After that we get the slice and pick the numbers.
   */
  const ROW_NUMBERS = board.length;
  const COL_NUMBERS = board[0].length;
  let prevRow = 0;
  let prevCol = 0;
  for (let i = 2; i < ROW_NUMBERS; i += BLOCKS_QUANTITY) {
    if (cellCoordinates[0] < i + 1) {
      for (let j = 2; j < COL_NUMBERS; j += BLOCKS_QUANTITY) {
        if (cellCoordinates[1] < j + 1) {
          const restrictedNumbers = board
            .slice(prevRow, i + 1)
            .map((elem) => elem.slice(prevCol, j + 1))
            .flat();
          return restrictedNumbers.filter((el) => Number(el));
        }
        prevCol += BLOCKS_QUANTITY;
      }
    }
    prevRow += BLOCKS_QUANTITY;
  }
}

function getRestricted(cellCoordinates, board) {
  /**
   * Unite restricted numbers from all directions and returns them as array unique numbers
   */
  const verticalNumbers = getRectrictedVertical(cellCoordinates, board);
  const horizontalNumbers = getRectrictedHorizontal(cellCoordinates, board);
  const blockNumbers = getBlockRestricted(cellCoordinates, board);

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

function getCandidates(restrictedNumbers) {
  /*
   * Returns candidate list based on restricted numbers.
   */
  return "123456789"
    .split("")
    .filter((el) => !restrictedNumbers.includes(el))
    .sort((a, b) => a - b);
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  renderBoard(board)
  return getCellCoordinates(board).length === 0;
}

function recursionAlgorithm(board) {
  /**
   * Gets the sudoku board and put numbers on positions,
   * after that go deeper and trying to fill all the positions.
   * If solutions was wrong, returns to start position and tries another number.
   */
  const coordinatesArray = getCellCoordinates(board);
  if (coordinatesArray.length === 0) {
    return true;
  }
  const currCoordinate = coordinatesArray[0];
  const [y, x] = currCoordinate;
  const restrictedNumbers = getRestricted(currCoordinate, board);
  const candidates = getCandidates(restrictedNumbers);
  for (const number of candidates) {
    board[y][x] = number;
    if (recursionAlgorithm(board)) {
      return board;
    }
    board[y][x] = "-";
  }
  return false;
}

function baseAlgorithm(board) {
  /**
   * Base algorithm for finding only 1 possible candidate.
   */
  const coordinatesArray = getCellCoordinates(board);
  const MAX_LOOPS = 70;
  let loopCounter = 0;
  while (!isSolved(board) && loopCounter < MAX_LOOPS) {
    for (let i = 0; i < coordinatesArray.length; i++) {
      const currCoordinate = coordinatesArray[i];
      const restrictedNumbers = getRestricted(currCoordinate, board);
      const candidates = getCandidates(restrictedNumbers);
      if (candidates.length === 1) {
        const [row, col] = currCoordinate;
        board[row][col] = candidates[0];
        coordinatesArray.splice(i, 1);
        i -= 1;
      }
      loopCounter += 1;
    }
  }
  return board;
}

// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  const difficultLevel = 10;
  let sudokuBoard = prettyBoard(boardString);
  console.log("Input model: ");
  renderBoard(sudokuBoard, false);
  board =
    difficultLevel < 5
      ? baseAlgorithm(sudokuBoard)
      : recursionAlgorithm(sudokuBoard);
  console.log("Solved model:");
  renderBoard(sudokuBoard, false);
  return board;
}
// file = fs.readFileSync('./puzzles/0.txt', 'utf8');
// solve(file)

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
