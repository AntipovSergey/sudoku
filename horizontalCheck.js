const solve = require('sudoku.js')

const validate = (num, pus, board) => {
  const [r, c] = pus;
  const size = 9;
  for(let i = 0; i < size; i++){
    if(boardString[i][c] === num && i !== r ){
      return false
    }
  }

}

