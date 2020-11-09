// Функция по уточнению вариантов в квадрате

function comparisonSquare(board, i, j, num) {
  const array = [];
  for (let row = 0; row < board.length; row += 1) {
    for (let col = 0; col < board.length; col += 1) {
      if (board[i][col] === num) {
        return false;
      }
      if (board[row][j] === num) {
        return false;
      }
      if (board[row][j] === num) {
        return false;
      }
    }
  }
}
comparisonSquare();

module.exports = {
  comparisonSquare
}

//--------------Второй вариант проверки вариантов в квадрате--------------//

// Функция по уточнению вариантов в квадрате

// function comparisonSquare(boardArr, find, row, col) {
//   if (row >= 0 && row <= 2) {
//     if (col >= 0 && col <= 2) {
//       for (let row1 = 0; row1 < 3; row1++) {
//         for (let col1 = 0; col1 < 3; col1++) {
//           if (boardArr[row1][col1].length < 2) {
//             if (find.includes(boardArr[row1][col1]) === true) {
//               const reg = new RegExp(boardArr[row1][col1]);
//               find = find.replace(reg, '');
//             }
//           }
//         }
//       }
//     }


// функции по уточнению вариантов в квадрате

// function clarificationSquare(boardArr) {
//   for (let row = 0; row < 9; row += 1) {
//     for (let col = 0; col < 9; col += 1) {
//       if (boardArr[row][col].length > 1) {
//         const find = boardArr[row][col];
//         boardArr[row][col] = comparisonSquare(boardArr, find, row, col);
//       }
//     }
//   }
//   return boardArr;
// }
// clarificationSquare(boardArr);
