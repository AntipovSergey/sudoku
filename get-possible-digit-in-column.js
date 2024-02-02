// Для столбцов

function getPossibleDigitInColumn(field, x) {
  const consisting = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const column = field[x];
  for (let i = 0; i < 9; i++) {
    if (consisting.indexOf(column[i]) !== -1) {
      consisting.splice(consisting.indexOf(column[i]), 1);
    }
  }
  return consisting;
}

module.exports = getPossibleDigitInColumn;
