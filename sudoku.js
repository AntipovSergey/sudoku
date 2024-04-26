const board = [
    ['5', '3', '.', '.', '4', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '4', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
  ]

function emptyEl(arr) {

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '.') {
        return [i, j]
      }
    }
  }
}

console.log(emptyEl(board));


function isValid(row, colum, num, board) {
  num = num.toString()

  for (let i = 0; i < board.length; i++) {
    if (board[row][i] === num || board[i][colum] === num) {
      return false
    }
  }
  // for (let j = 0; j < board.length; j++) {
  //   if (board[j][colum] === num && board[j][colum] !== board[row][colum]) {
  //     return false
  //   }
  //   console.log(board[j][2]);
  // }

  let countRow = Math.floor(row / 3) * 3
  let countColum = Math.floor(colum / 3) * 3

  for (let e = countRow; e < countRow + 3; e++) {
    for (let l = countColum; l < countColum + 3; l++) {
      if (board[e][l] === num && board[e][l] !== board[row][colum]) {
        return false
      }
    }
  }

  return true
}





function solve() {
    for (let num = 1; num < 10; num += 1) {
      let pos = emptyEl(board)
      let [row, colum] = [pos[0], pos[1]]

  
        if (isValid(row, colum, num, board)) {
          board[row][colum] = num.toString()
        } else {
          board[row][colum] = '.'
        }
      }
      return board
    }

  

  
console.table(solve(emptyEl()))




//   function isSolved(arr, obj) {
//     const resss = [];
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr[i].length; j++) {
//       }
//     }
//   }

//   function prettyBoard(isSolved) {
//     for (let i = 0; i < isSolved.length; i++) {
//       if (i % 3 === 0 && i !== 0) {
//         console.log('---- ---- ---- ----');
//       }
//       let newStr = '';
//       for (let j = 0; j < isSolved[i].length; j++) {
//         if (j % 3 === 0 && j !== 0) {
//           newStr += '|';
//         }
//         newStr += `${isSolved[i][j]} `;
//       }
//       console.log(newStr);
//     }
//   }

// console.log(prettyBoard(isSolved(solve)))

