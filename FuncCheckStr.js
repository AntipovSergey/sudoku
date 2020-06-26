const createBoard = require('./sudoku.js');
let inputSudokuPuzzle2 = '--8------49-157--2--3--419-185-6--2-----2--6-96-4-53---3--72--4-49-3--57827--9-13';
let boardArr = createBoard.createBoard(inputSudokuPuzzle2);

console.table(boardArr);






function FuncCheckStr(boardArr) {

  for (let i = 0; i < boardArr.length; i+=1) {
    for(let j = 0; j < boardArr[i].length; j+=1){
      if (Arr[i][j] === "string"){

        
      } 
    }
  }
}


 console.log(FuncCheckStr(boardArr));
 







module.exports = {
  FuncCheckStr,
}
// let Arr = 
// console.log(typeof Arr[i][j]);
