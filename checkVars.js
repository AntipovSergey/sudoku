//  index - [s][l] - номер пустого элемента
//  Где s - номер строки, l - номер столбца(эл-та в строке)

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
