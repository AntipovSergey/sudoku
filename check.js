// const boardStringFromPars = require('./pars');

function checkNumber(board, coordinates, numb) {
  const row = coordinates[0];
  const col = coordinates[1];
  

  // проверяем совпадения по строкам
  for (let j = 0; j < 9; j += 1) {
    if (String(numb) === board[row][j]) return false;
  }
  // проверка совпадения по столбцам
  for (let i = 0; i < 9; i += 1) {
    if (String(numb) === board[i][col]) return false;
  }

  //проверка совпадений по блокам
  const object = {
    0: 0,
    1: 0,
    2: 0,
    3: 3,
    4: 3,
    5: 3,
    6: 6,
    7: 6,
    8: 6,
  };
  const str = object[row];
  const pos = object[col];

  for (let r = str; r < str + 3; r += 1) {
    for (let c = pos; c < pos + 3; c += 1) {
      if (numb === Number(board[r][c])) { return false; }
    }
  }
  return true;
}


module.exports = {
  checkNumber,
};
