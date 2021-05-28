let board = [[1, 3, 5, 6, 7, 0, 9, 2, 9],
           [1, 3, 5, 6, 7, 8, 9, 2, 9],
           [1, 3, 0, 6, 0, 8, 9, 2, 9],
           [1, 3, 0, 6, 0, 8, 9, 2, 9],
           [1, 3, 5, 6, 0, 8, 9, 2, 9],
           [1, 3, 5, 0, 7, 8, 0, 2, 9],
           [1, 3, 5, 6, 7, 8, 9, 2, 9],
           [1, 3, 5, 6, 7, 8, 9, 2, 9]]; 
             

function searchInColumn(board, ArrLength) {

  let newArr = [];
  for(let i = 0; i < board.length; i++){
     newArr.push([]);
  };
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < ArrLength; j++){
     newArr[j].push(board[i][j]);
     };
  };
        

  for (let i = 0; i < newArr.length; i++) {
   for (let j = 0; j < newArr.length; j++) {
     let firstNumber = newArr[i][j];
      for (let value of newArr) {
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


// console.log(searchInColumn(board));
console.log(searchInColumn(board, 3));
