
let stringToArray = (boardString) => {
  let renderBoardString = boardString.split('')
  let result = []
  for (let i = 0; i < 9; i++) {
    result.push(renderBoardString.splice(0, 9))

  }
  return result
}

let solveSudoku = function (string) {

  const boxSize = 3;

  const board = stringToArray(string);

  const findEmpty = (board) => {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  }

  const validate = (num, pos, board) => {
    const [r, c] = pos;

    for (let i = 0; i < 9; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

  
    for (let i = 0; i < 9; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }


  
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  }

  const solve = () => {
    const currPos = findEmpty(board);

    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < 9 + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);

      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solve()) {
          return true;
        }

        board[x][y] = '-';
      }
    }
    return false;
  }

  if (solve()) {
    console.log("The board was solved!")
    return board
  }
  else {
    console.log("The board wasn't solved! :(((")
  }

};

module.exports = {
  solveSudoku,
  stringToArray
}























































// function stringToBoard(boardString) {
//   let renderBoardString = boardString.split('')
//   let result = []
//   for (let i = 0; i < 9; i++) {
//     result.push(renderBoardString.splice(0, 9))

//   }
//   return result
// }
// // console.table(stringToBoard(boardString));

// let board = stringToBoard(boardString)
// function searchEmpty(board) {
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       if (board[i][j] === '-') {
//         return [i, j]
//       }
//     }
//   }
// }


// // searchEmpty(board)
// // console.log(searchEmpty(board));
// function checkBoard(currentNum, board, emptyPosition) {
//   let r = emptyPosition[0]
//   let c = emptyPosition[1]


//   //Check rows
//   for (let i = 0; i < size; i++) {
//     if (board[i][c] === currentNum && i !== r) {
//       return false;
//     }
//   }

//   //Check cols
//   for (let i = 0; i < size; i++) {
//     if (board[r][i] === currentNum && i !== c) {
//       return false;
//     }
//   }


//   //Check box
//   const boxR = Math.floor(r / 9) * 9;
//   const boxC = Math.floor(c / 9) * 9;

//   for (let i = boxR; i < boxR + 9; i++) {
//     for (let j = boxC; j < boxC + 9; j++) {
//       if (board[i][j] === currentNum && i !== r && j !== c) {
//         return false;
//       }
//     }
//   }
// }




// function solve(boardString){
//   const currentEmptyPos = searchEmpty(board)
//   if (currentEmptyPos === null) {
//     return true
//   }

//   for (let i = 1; i < 9; i++) { // подставляем цифры в пустые места (+ проверка на валидность из ф-ции  checkBoard )
//     let checkBoard = checkBoard(i, board, currentEmptyPos)

//     if (checkBoard) {
//       const [x, y] = currentEmptyPos;
//       board[x][y] = i

//       if (solve()) {
//         return true;
//       }

//       board[x][y] = '-';
//     }

//   }


//   return false
// }



//   function solve(boardString) {

//   }


//   function isSolved(board) {

//   }




//   module.exports = {
//     solve: solve,
//     isSolved: isSolved,
//     prettyBoard: prettyBoard
//   }
