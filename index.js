const fs = require('fs')

let boardString = fs.readFileSync('./sudoku-puzzles.txt', 'utf8') // file to string


function sudoku(boardString, currentBoard = 0) {
  let arr = [];
  let board = boardString.split('\n')[currentBoard]
  for (let i = 0; i < Math.sqrt(board.length); i += 1) {
    let newString = board.slice(i * 9, i * 9 + 9).split("")
    arr.push(newString)
  }
  return arr;
}   //create array (sudoku)

// console.table(sudoku(boardString, currentBoard = 0))

function randomNumber() {
  let random = Math.ceil(Math.random() * 9);
  let randomString = random.toString();
  return randomString
}


function verticalCheck(n, j, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][j] === n) {
      return true;
    }
  }
  return false;
}


function emptyCheck(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '-')
        return false;
    }
  }
  return true;
}


function squareCheck(n, arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push([]);
    for (let j = 0; j < arr[i].length; j++) {
      newArr[i].push(arr[i][j])
    }
  }
  let squareArr = newArr.slice(i * 3, i * 3 + 3)
  for (let index = 0; index < squareArr.length; index++){
    if(!squareArr[i].includes(n)){
      squareArr[i] = n
    }else{
      squareCheck(n,arr)
    }
  }
  return squareArr
}




function fitNumber(sudoku) {
  let functionSudoku = sudoku(boardString, currentBoard = 0)
  // console.table(functionSudoku)
  // let newArr = []
  // for (let i = 0; i < functionSudoku.length; i++ ){
  //   newArr.push([]);
  //   for (let j = 0; j < functionSudoku[i].length; j ++){
  //     newArr[i].push(functionSudoku[i][j])
  //   }
  // }

  for (let i = 0; i < functionSudoku.length; i++) {
    for (let j = 0; j < functionSudoku[i].length; j++) {
      if (functionSudoku[i][j] === "-") {
        // for (let n = 1; n < 10; n ++){
        //   if (!functionSudoku[i].includes(n.toString()) && !verticalCheck(n,j,functionSudoku)) {
        //     functionSudoku[i][j] = n.toString();
        //   }
        // }

        let bool = true;
        while (bool) {
          let rand = randomNumber();
          if (!functionSudoku[i].includes(rand) && !verticalCheck(rand, j, functionSudoku) && !squareCheck(rand, functionSudoku)) {
            functionSudoku[i][j] = rand;
            // console.log('work')
            bool = false;
          }
        }
      }
      // if (!emptyCheck (functionSudoku)) {
      // fitNumber(sudoku);
      // }
    }
  }
  return functionSudoku;
}

  // fitNumber (randomNumber, sudoku)
 console.table(fitNumber (sudoku))


