const createBoard = require("./sudoku.js");
let inputSudokuPuzzle2 =
  "--8------49-157--2--3--419-185-6--2-----2--6-96-4-53---3--72--4-49-3--57827--9-13";
let boardArr = createBoard.createBoard(inputSudokuPuzzle2);

console.table(boardArr);

function FuncCheckStr(boardArr, stringIndex) {
  let variantsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let intersection = boardArr[stringIndex];
  let intersectionResult = variantsArr.filter(x => !intersection.includes(x));
  return intersectionResult;
}



function FuncCheckColumn(boardArr, cellIndex) {
  let variantsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let colunArr = [];
  for (let stringIndex = 0; stringIndex < 9; stringIndex++) {
    colunArr.push(boardArr[stringIndex][cellIndex]);
  }
  let intersectionResult = variantsArr.filter(x => !colunArr.includes(x));
  
  return intersectionResult;
}

  

console.log(FuncCheckStr(boardArr, 1));
console.log(FuncCheckColumn(boardArr, 5));

module.exports = {
  FuncCheckStr,
};
// let Arr =
// console.log(typeof Arr[i][j]);
