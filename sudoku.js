// Main sudocu solver function
function sudoku(board) {

  for (let indexX = 0; indexX < board.length; indexX++) {                 // перебираем Строки
    for (let indexY = 0; indexY < board[indexX].length; indexY++) {       // ... Столбцы

      if (board[indexX][indexY] === '-') {                                // если элемент пустой, то начинаем проверки
        for (let candidate = 1; candidate <= 9; candidate++) {            // ... Кандидаты на пустое место

          if (correctSolving(indexX, indexY, candidate, board)) {         // проверка, возможности вставить кандидата 
            board[indexX][indexY] = candidate;                            // если Да, то вставляем кандидата

            result = sudoku(board);                                       // решаем оставшуюся судоку

            if (result !== false) return true;
            board[indexX][indexY] = '-';
          }
        }
        return false;
      }
    }
  }
  console.table(board);
  return board;
}


function correctSolving(indexX, indexY, candidate, board) {

  for (let index = 0; index < board.length; index += 1) {
    // Проверка на совпадение в столбце
    if (index != indexX && board[index][indexY] === candidate) {
      return false;
    }

    // Проверка на совпадение в строке
    if (index != indexY && board[indexX][index] === candidate) {
      return false;
    }
  }

  
  
  let cellCheck = [];
  let cellX = 3 * Math.floor(indexX / 3);
  let cellY = 3 * Math.floor(indexY / 3);
  
  for (let index = 0; index < 3; index += 1) {
    cellCheck[index] = board[cellX][cellY + index];
    cellCheck[index + 3] = board[cellX + 1][cellY + index];
    cellCheck[index + 6] = board[cellX + 2][cellY + index];
    // cellCheck[index] = board[cellX + Math.floor(index / 3)][cellY + Math.floor(index / 3)];
  }
  
  
  if (cellCheck.some(el => el === candidate)) {
    return false;
  }
  return true;
}

module.exports = { sudoku, correctSolving };

// function correctSolving(indexX, indexY, candidate, board) {
//   for (let i = 0; i < 9; i++) {
//     const m = 3 * Math.floor(indexX / 3) + Math.floor(i / 3);
//     const n = 3 * Math.floor(indexY / 3) + (i % 3);
//     if (board[indexX][i] == candidate || board[i][indexY] == candidate || board[m][n] == candidate) {
//       return false;
//     }
//   }
//   return true;
// }