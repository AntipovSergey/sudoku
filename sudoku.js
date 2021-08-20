/* eslint-disable no-plusplus */
// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function stringToArray81(string) {
  const StringArr = [];
  for (let i = 0; i < 81; i+=9) {
    StringArr.push(string.slice(i, i + 9).split(''));
  }
}
function solve(boardString) {

  const dashPos = boardString.indexOf('-');
  if (dashPos < 0) return boardString;
  const indexes = getIndexes(dashPos);
  if (indexes.length !== 3) {
    console.log('Нет перешифрованных индексов indexes');
    return;
  }
  const currentColumn = indexes[0];
  const currentRow = indexes[1];
  const currentSquare = indexes[2];
  const boardStringArr = stringToArray81(boardString);
  const currentColumnArrTested = testSlicedArr(sliceArrayCol(boardStringArr,currentColumn));
  const currentRowArrTested = testSlicedArr(boardStringArr[currentRow]);
  const currentSquareArrTested = testSlicedArr(sliceArraySquare(boardStringArr,currentSquare));

  const arrUniqueNums = oneByOne(currentColumnArr,currentRowArr,currentSquareArr);
  
  if (arrUniqueNums.length === 1) {
    const boardStringArrLinear = boardString.split('');
    boardStringArrLinear[dashPos] = arrUniqueNums[0];
    const newBoardString = boardStringArrLinear.join('');
    const result = solve(newBoardString);
    if (isSolved(result)) return result;
  }
  if (arrUniqueNums.length > 1){
    for (let i = 0; i < arrUniqueNums.length; i++) {
      const boardStringArrLinear = boardString.split('');
      boardStringArrLinear[dashPos] = arrUniqueNums[0];
      const newBoardString = boardStringArrLinear.join('');
      const result = solve(newBoardString);
      if (isSolved(result)) {
        return result;
      } 
    }
  }
  return false;
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.

function sliceArrayCol(arr, col) {
  let column = [];
  for (let i = 0; i < 9; i++) {
    column.push(arr[i][col]);
  }
  return column;
}

function sliceArraySquare(arr, sq) {
  let square = [];
  let obji = {
    1: 0,
    2: 0,
    3: 0,
    4: 3,
    5: 3,
    6: 3,
    7: 6,
    8: 6,
    9: 6,
  };
  let objn = {
    1: 0,
    2: 3,
    3: 6,
    4: 0,
    5: 3,
    6: 6,
    7: 0,
    8: 3,
    9: 6,
  }; 
  
  let i = obji[sq];
  for (let a = 0; a < 3; a++) {
    let n = objn[sq];
    for (let b = 0; b < 3; b++) {
      square.push(arr[i][n]);
      n++;
    }
    i++;
  }
  return square;
}


function isSolved(board) {
  const boardArr = stringToArray81(board);
  for (let i = 1; i < boardArr.length; i++) {
    if (!testSlicedArr(boardArr[i])) return false;
  }
  for (let i = 0;i < 9; i++) {
    if (!testSlicedArr(sliceArrayCol(boardArr, i))) return false;
  }
  for (let i = 0;i < 9; i++) {
    if (!testSlicedArr(sliceArraySquare(boardArr, i))) return false;
  }
  return true;
}

function oneByOne(col, row, sq) {
  let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // let num = {
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   4: 0,
  //   5: 0,
  //   6: 0,
  //   7: 0,
  //   8: 0,
  //   9: 0,
  // };
  let numbers = sq.concat(row, col);
  let resultArr = [];
  for (let j = 0; j < numArr.length; j++) {
    let index = [];
    index = numbers.filter((el) => el == numArr[j]);
    if (index.length == 3) {
      resultArr.push(numArr[j]);
    }
  }
  return resultArr;

}

function testSlicedArr(arr) {
  let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // let num = {
  //   1: 0,
  //   2: 0,
  //   3: 0,
  //   4: 0,
  //   5: 0,
  //   6: 0,
  //   7: 0,
  //   8: 0,
  //   9: 0,
  // };
  let outNum = [];

  for (let j = 0; j < numArr.length; j++) {
    let index = arr.indexOf(numArr[j]);
    if (index == -1) {
      outNum.push(numArr[j]);
    }
  }
  if (outNum.length != 0) {
    return outNum;
  } else return true;
  // for (let item in num) {
  //   if (num[item] == 1) {
  //     outNum.push(item);
  //   }
  //   sum += num[item];

  // if (sum == 9) {
  //   return true;
  // } else return false;
}
// let arr = ["1", "-", "5", "8", "-", "2", "-", "-", "-"]; //1-58-2---
// let row = ["1", "2", "5"]; //1-58-2---
// let col = ["2", "5", "8"]; //1-58-2---
// let sq = ["9", "5", "1"]; //1-58-2---
// console.log(oneByOne(row, col, sq));

function prettyBoard(board) {
  const prettyBoardStr = board.map((elem) => elem.join(" ")).join("\n");
  // console.log(prettyBoardStr);
}

const sudokuStr =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
const sudokuArr = [];
for (let i = 0; i < 81; i += 9) {
  sudokuArr.push(sudokuStr.slice(i, i + 9).split(""));
}
// console.table(sudokuArr);
prettyBoard(sudokuArr);

module.exports = {
  isSolved,
  solve,
  isSolved,
  prettyBoard,
};
