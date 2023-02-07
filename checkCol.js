function checkCol(arr, indexes, num) {
  const colIndex = indexes[1];
  const col = [];
  for (let i = 0; i < arr.length; i += 1) {
    col.push(arr[i][colIndex]);
  }
  return !col.includes(num.toString());
}

module.exports = checkCol;
