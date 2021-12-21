

let data = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'


function table(data) {  //  преобразование входной строки в многомeрный массив
  let sudokuBoard = [];
  for (let i = 0; i < 81; i = i + 9) {
    sudokuBoard.push(data.slice(i, i + 9).split(''))
  }
  return sudokuBoard
}
let arrSudoku = table(data)

console.log('Arrsudoku ==>:')
console.table(arrSudoku)


function searchEmpty(arr) { // ищем координаты пустых клеток - возвращаем массив 
  emptyArr = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === '-') {
        emptyArr.push([i, j])
      }
    }
  }
  return emptyArr
}
console.log(searchEmpty(arrSudoku))

let empty = searchEmpty(arrSudoku)
// let sticks = findStick(arrSudoky)
function rowSearch(searchEmpty, arrSudoku) {
  const arrDigits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < table[searchEmpty[0]].length; i++) {
    if (digits.includes(table[searchEmpty[0]][i])) {
      digits.splice(digits.indexOf(table[searchEmpty[0]][i]), 1)
    }
  }
  return digits
};
console.log(rowSearch(searchEmpty(arrSudoku), arrSudoku))

// function rowSearch(findStick, board) {
//   const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   for (let i = 0; i < board[findStick[0]].length; i++) {
//     if (digit.includes(board[findStick[0]][i])) {
//       digit.splice(digit.indexOf(board[findStick[0]][i]), 1)
//     }
//   }
//   return digit
// }


// function columnSearch(arrSudoky, findStick, futureVal) {
//   let x = findStick[0]
//   let y = findStick[1]
//   arr = [];
//   for (let i = 0; i < arrSudoky.length; i++) {
//     if (arrSudoky[i][y] !== null) {
//       arr.push(arrSudoky[i][y])
//     }
//   }
//   result = futureVal.filter(el => !~arr.indexOf(el));
//   return result
// }


// function searchInSquare(elemArr, sudArr, resultsArr) {
//   const topOfSquare = [];
//   topOfSquare.push(Math.floor(elemArr[0] / 3) * 3);
//   topOfSquare.push(Math.floor(elemArr[1] / 3) * 3);
//   for (let i = topOfSquare[1]; i < (topOfSquare[1] + 3); i++) {
//     for (let j = topOfSquare[0]; j < (topOfSquare[0] + 3); j++) {
//       if (resultsArr.includes(sudArr[j][i])) {
//         resultsArr.splice(resultsArr.indexOf(sudArr[j][i]), 1)
//       }
//     }
//   }
//   return resultsArr
// }


// function sudokuReshatel(arrSudoky, sticks) {
//   let temp = []
//   for (let i = 0; i < arrSudoky.length; i++) {
//     if (!arrSudoky[i].includes(null)) {
//       temp.push(true)
//     } else {
//       temp.push(false)
//     }
//   }
//   if (!temp.includes(false)) {
//     return arrSudoky
//   }


//   for (let i = 0; i < sticks.length; i++) {
//     let resultsOfRow = rowSearch(sticks[i], arrSudoky)
//     let resultOfcolumn = columnSearch(arrSudoky, sticks[i], resultsOfRow)
//     let results = searchInSquare(sticks[i], arrSudoky, resultOfcolumn)
//     if (results.length === 1) {
//       arrSudoky[sticks[i][0]][sticks[i][1]] = results[0];
//       sticks.splice(i, 1);
//     }
//   }
//   console.table(arrSudoky)
//   return sudokuReshatel(arrSudoky, sticks)
// }
// // console.table(arrSudoky);
// console.log(sudokuReshatel(arrSudoky, sticks));
