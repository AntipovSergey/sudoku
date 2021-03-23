// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) { // создаем массив массивов из одной строки
  const arrayStrSolve = boardString.split('');
  const resultArr = [];

  for (let i = 0; i < arrayStrSolve.length / 9; i += 1) {
    resultArr[i] = arrayStrSolve.slice((i * 9), (i * 9) + 9);
  }
  return resultArr;
}

// Поиск числа для пустых клеток; k - числа от 1 до 9
function lookingForNumber(board, row, col, k) { // вспомогательная функция для isSolved()
  for (let i = 0; i < 9; i += 1) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3); // ищет сегмент квадрат один
    const n = 3 * Math.floor(col / 3) + (i % 3); // выделает 3 квадрата в ряд
    if (Number(board[row][i]) === k || Number(board[i][col]) === k || Number(board[m][n]) === k) { // поиск нужной цифры
      return false; // если совпадение есть
    }
  }
  return true; // если нет совпадения
}

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) { // передаем результат solve
  for (let x = 0; x < 9; x += 1) {
    for (let y = 0; y < 9; y += 1) {
      if (board[x][y] === '0') {
        for (let k = 1; k <= 9; k += 1) {
          if (lookingForNumber(board, x, y, k)) {
            board[x][y] = `${k}`;
            if (isSolved(board)) { // заново если false
              return true;
            }
            board[x][y] = '0';
          }
        }
        return false;
      }
    }
  }
  return true;
}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  const prettyBord = board.map((item) => item.join(' ')).join('\n');
  return prettyBord;
}

// Exports all the functions to use them in another file.
// module.exports = {
//   solve,
//   isSolved,
//   prettyBoard,
// };
