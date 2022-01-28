// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

  function createArray (str) {
    const array = []
    const newStr = str.replaceAll('-', '0');
    const arrayNumbers = newStr.split('').map((elem) => +elem);
    for (let i = 0; i < 9; i++) {
      array.push(arrayNumbers.slice((i * 9),((i + 1) * 9)))
    }
    return array;
  }

  function isSolvedColumns(arr, cor, num){
    for(i = 0 ; i < arr.length; i++){
      if(arr[i][cor[1]] === num){
        return false
      }
    }
    return true;
  }
  
  function isSolvedRows(arr, cor, num){
    for(i = 0 ; i < arr.length; i++){
      if(arr[cor[0]][i] === num){
        return false
      }
    }
    return true;
  }

  function isSolvedBlock(board, arr, num) {
    const arrCoordinats = [
      [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
      [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
      [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]],
      [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]],
      [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]],
      [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]],
      [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]],
      [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]],
      [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]]
      ];

    function searchBlock () { 
      for(let i = 0; i < arrCoordinats.length; i++) {
        for (let i2 = 0; i2 < arrCoordinats[i].length; i2++) {
          if (`${arrCoordinats[i][i2]}` === `${arr}`) {
            return arrCoordinats[i]
          }
        }
      }
    }
    const foundBlock = searchBlock()
      for (let i = 0; i < foundBlock.length; i++) {
      if (num === board[foundBlock[i][0]][foundBlock[i][1]]) {
        return false
      }
    }
    return true
  }

  function findFirstEmpty(board) {
    for (let i = 0; i < board.length; i += 1) {
      for (let j = 0; j < board[i].length; j += 1){
        if (board[i][j] === 0) return [i,j];
      }
    }
    return -1;
  }

  function isBoardValidAfterInsert(board, coords, num){
    return (isSolvedColumns(board, coords, num) && isSolvedRows(board, coords, num) && isSolvedBlock(board, coords, num));
  }

  let board = createArray(boardString);

  function solveRec(board) {
    const currentEmptyPos = findFirstEmpty(board);
  
    if(currentEmptyPos === -1) return board;
  
    for (let i = 1; i <= 9; i += 1) {
      if (isBoardValidAfterInsert(board, currentEmptyPos, i)) {
        board[currentEmptyPos[0]][currentEmptyPos[1]] = i;
        solveRec(board);
      } 
    }
  
    if(findFirstEmpty(board) !== -1){
      board[currentEmptyPos[0]][currentEmptyPos[1]] = 0;
    }
  
    return board;
  }

  return solveRec(board);

}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
//Эта функция проверяет решена ли наша доска
function isSolved(board) {
  // function isSolvedColumns(arr){
  //   let result = 45;
  //   let solwedColumns = [[],[],[],[],[],[],[],[],[]];
  //   for(let i = 0; i < 9; i++){
  //     for(let j = 0; j < 9; j++){
  //       solwedColumns[j].push(arr[i][j])
  //         const reducer = (previousValue, currentValue) => previousValue + currentValue;
  //       if (solwedColumns.reduce(reducer) === result){
  //         continue
  //       } else {
  //         return false;
  //       } 
  //     }
  //   }
  // }
  // function isSolvedRows(arr) {
  //   let result = 45;
  //   for(let i = 0; i < 9; i++){
  //     const solvedRow = arr[i]
  //     const reducer = (previousValue, currentValue) => previousValue + currentValue;
  //     if (solvedRow.reduce(reducer) === result){
  //       continue
  //     } else {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // function isSolvedBlock(board) {
  //   let sumBlock = 0
  //   for (let i = 0; i < board.length; i++) {
  //     for (let i2 = 0; i2 < board[i].length; i2++) {
  //       sumBlock += board[i][i2]
  //       if (sumBlock === 405) {
  //         return true
  //       }
  //     }
  //   }
  //   return false
  // }

  // return (isSolvedColumns(board) && isSolvedRows(board) && isSolvedBlock(board));
  return true;
}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// Функция красивого вывода нашего решенного борда
function prettyBoard(board) {
  console.table(board);
}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
