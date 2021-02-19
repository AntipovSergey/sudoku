const board = [
  [0, 5, 1, 3, 6, 2, 7, 0, 0],
  [0, 4, 0, 0, 5, 8, 0, 0, 0],
  [0, 0, 0, 4, 0, 0, 0, 2, 5],
  [0, 8, 0, 0, 0, 0, 9, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 5, 0, 0, 0, 0, 8, 0],
  [1, 2, 0, 0, 0, 9, 0, 0, 0],
  [0, 0, 0, 2, 8, 0, 0, 6, 0],
  [0, 0, 8, 5, 3, 4, 2, 9, 0]
];
/* На вход функции подаются board, row = i, value */
const checkRow = ((board, row, value) => {
 for(let i = 0; i < board[row].length; i++) {
   if(board[row][i] === value) {
     return false
    } 
 }
  return true
 })


/* На вход функции подаются board, column = j, value */
const checkColumn = ((board, column, value) => {
  for(let j = 0; j<board[column].length; j++){
    if (board[j][column]=== value) {
      return false
    }
  } 
  return true;
})

/* На вход функции подаются board,row = i, column = j, value */
const checkSquare = ((board, row, column, value) => {
  letMiniRow=Math.floor(row/3) * 3;
  letMiniColumn = Math.floor(column/3) * 3;

  for(let i = 0; i< 3; i++) {
    for(let j = 0; j< 3; j++) {
      if(board[letMiniRow+i][letMiniColumn+j] === value) {
        return false
      }
    }
  }
    return true
 });

 module.exports = {
	checkRow,
	checkColumn,
	checkSquare
}



//  console.log('checkRow:',checkRow(board,3, 4));
//  console.log(checkColumn(board,4, 3));
 console.log(checkSquare(board, 8, 8, 6));
