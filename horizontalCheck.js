const solve = require('sudoku.js')


 const size = 9
 //c - фиксированная колонка
function horizontalCheck(boardString){
  for(let i = 0; i < size; i++){
    if(boardString[i][c] === num && i !== r ){
      return false
    }
  }
}