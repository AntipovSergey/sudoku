const isNoMatchSquare = (searchNumber, raw, column, arr) => {
  const leftElem = (e) => {
    if (e <= 2) return 0;
    if (e <= 5) return 3;
    if (e <= 8) return 6;
  }
  let massiv = [];
  raw = leftElem(raw);
  column = leftElem(column);
  for (let i = raw; i < raw + 3; i++) {
    for (let j = column; j < column + 3; j++) {
      massiv.push(arr[i][j]);
    }
  }
  return !(massiv.includes(searchNumber))
}

module.exports = {
  isNoMatchSquare
}