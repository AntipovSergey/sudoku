//  index - [s][l] - номер пустого элемента
//  Где s - номер строки, l - номер столбца(эл-та в строке)

// const board2 = [
//   [1, '-', 5, 8, '-', 2, '-', '-', '-'],
//   ['-', 9, '-', '-', 7, 6, 4, '-', 5],
//   [2, '-', '-', 4, '-', '-', 8, 1, 9],
//   ['-', 1, 9, '-', '-', 7, 3, '-', 6],
//   [7, 6, 2, '-', 8, 3, '-', 9, '-'],
//   ['-', '-', '-', '-', 6, 1, '-', 5, '-'],
//   ['-', '-', 7, 6, '-', '-', '-', 3, '-'],
//   [4, 3, '-', '-', 2, '-', 5, '-', 1],
//   [6, '-', '-', 3, '-', 8, 9, '-', '-'],
// ];

function checkVars(board, index2) {
  const vars = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const s = index2[0];
  const l = index2[1];

  // Цикл поиска по столбцу
  for (let i = 0; i < 9; i++) {
    for (let m = 0; m < vars.length; m++) {
      if (board[i][l] === vars[m]) vars.splice(m, 1);
    }
  }

  // Цикл поиска по строке
  for (let i = 0; i < 9; i++) {
    for (let m = 0; m < vars.length; m++) {
      if (board[s][i] === vars[m]) vars.splice(m, 1);
    }
  }

  // Поиск координатов квадрата, в котором находится наша пустая ячейка
  const sectorS = Math.floor(s / 3) * 3;
  const sectorL = Math.floor(l / 3) * 3;

  // Цикл поиска по квадрату
  for (let i = sectorS; i < sectorS + 3; i++) {
    for (let j = sectorL; j < sectorL + 3; j++) {
      
      for (let m = 0; m < vars.length; m++) {
        if (board[i][j] === vars[m]) vars.splice(m, 1);
      }
    }
  }
  return vars;
}
module.exports = checkVars;

// const abc = [1, 2];
// console.log(checkVars(board2, abc));
