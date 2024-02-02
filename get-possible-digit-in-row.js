// Для строк

function getPossibleDigitInRow(field, y) {
  const row = field.map((row) => row[y]);
  const consisting = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  for (let i = 0; i < 9; i++) {
    if (consisting.indexOf(row[i]) !== -1) {
      consisting.splice(consisting.indexOf(row[i]), 1);
    }
  }
  return consisting;
}

module.exports = getPossibleDigitInRow