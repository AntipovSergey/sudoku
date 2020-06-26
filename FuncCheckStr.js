const createBoard = require("./sudoku.js");
let inputSudokuPuzzle2 =
  "--8------49-157--2--3--419-185-6--2-----2--6-96-4-53---3--72--4-49-3--57827--9-13";
let boardArr = createBoard.createBoard(inputSudokuPuzzle2);

console.table(boardArr);

function FuncCheckStr(boardArr, stringIndex) {
  let variantsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let intersection = boardArr[stringIndex];
  let intersectionStringResult = variantsArr.filter(x => !intersection.includes(x));
  return intersectionStringResult;
}



function FuncCheckColumn(boardArr, cellIndex) {
  let variantsArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let colunArr = [];
  for (let stringIndex = 0; stringIndex < 9; stringIndex++) {
    colunArr.push(boardArr[stringIndex][cellIndex]);
  }
  let intersectionCellResult = variantsArr.filter(x => !colunArr.includes(x));
  
  return intersectionCellResult;
}
let x = FuncCheckColumn(boardArr, 5);
let y = FuncCheckStr(boardArr, 1);

function FuncSudokuMerge (x,y){
  let intersectionStringResult = x.filter(x => y.includes(x));
  return intersectionStringResult;
}
  

console.log(FuncSudokuMerge(x,y));
console.log(FuncCheckColumn(boardArr, 5));
console.log(FuncCheckStr(boardArr, 1));
//console.log(FuncSudokuMerge();

module.exports = {
  FuncCheckStr,
};
// let Arr =
// console.log(typeof Arr[i][j]);
