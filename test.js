// const boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

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




// function solve(){
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


// console.log(solve())


// function isSolved(board) {

// }



// function prettyBoard(board) {

// }





// input = [
//   //     [".", ".", "1", "."],
//   //     [".", ".", ".", "."],
//   //     [".", ".", "3", "."],
//   //     [".", ".", "2", "."],
//   // ];

//   // let input = [
//   //     ["4", ".", "1", "."],
//   //     [".", "2", ".", "."],
//   //     [".", ".", "3", "."],
//   //     [".", ".", "2", "."],
//   // ];

  let input = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ];

//   // let input = [
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   //     [".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "."],
//   // ];

let solveSudoku = function (board) {
  const size = 9;
  const boxSize = 3;

  solve();
  return board;
}
const findEmpty = (board) => {
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (board[r][c] === '.') {
        return [r, c];
      }
    }
  }
  return null;
}

const validate = (num, pos, board) => {
  const [r, c] = pos;

  //Check rows
  for (let i = 0; i < size; i++) {
    if (board[i][c] === num && i !== r) {
      return false;
    }
  }

  //Check cols
  for (let i = 0; i < size; i++) {
    if (board[r][i] === num && i !== c) {
      return false;
    }
  }


  //Check box
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
  //console.log('------------------------------');
  for (let i = 1; i < size + 1; i++) {
    const currNum = i.toString();
    const isValid = validate(currNum, currPos, board);
    //console.log('currPos ', currPos, 'currNum ',currNum, 'isValid ',isValid);
    if (isValid) {
      const [x, y] = currPos;
      board[x][y] = currNum;

      if (solve()) {
        return true;
      }

      board[x][y] = '.';
    }
  }

  return false;
}


console.table(input);
console.table(solveSudoku(input));







//   /////////////////////////////////////////////////////////////////////////////////////////////////////////










//   const string = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

// function createArray(string) {
//   let array = string.split('');
//   let newArray = [];
//   for (let i = 0; i < 9; i++) {
//     newArray.push(array.splice(0, 9));
//   }



//   function solve(boardString) {
//     console.log(boardString);





//     return newArray
//   }


//   console.table(createArray(string))








//   // Takes a board as a string in the format
//   // you see in the puzzle file. Returns
//   // something representing a board after
//   // your solver has tried to solve it.
//   // How you represent your board is up to you!

//   function solve(boardString) {

//   }
















//   solve(boardString);


//   // Returns a boolean indicating whether
//   // or not the provided board is solved.
//   // The input board will be in whatever
//   // form `solve` returns.
//   function isSolved(board) {

//   }

//   // function isSolved(board) {

//   // }



//   // function prettyBoard(board) {

//   // }

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
