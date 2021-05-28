let board = [[1, 3, 5, 6, 7, 0, 9, 2, 9],
           [1, 3, 5, 6, 7, 8, 9, 2, 9],
           [1, 3, 0, 6, 0, 8, 9, 2, 9],
           [1, 3, 0, 6, 0, 8, 9, 2, 9],
           [1, 3, 5, 6, 0, 8, 9, 2, 9],
           [1, 3, 5, 0, 7, 8, 0, 2, 9],
           [1, 3, 5, 6, 7, 8, 9, 2, 9],
           [1, 3, 5, 6, 7, 8, 9, 2, 9]];  

function searchInRow(board) {
  
 for (let i = 0; i < board.length; i++) {
   for (let j = 0; j < board.length; j++) {
     let firstNumber = board[i][j];
      for (let value of board) {
        if(firstNumber === value) {
          return false
        } else {
          return true
        }
   }
  }
}
  return newArr;
}

console.log(searchInRow(board));



