function checkIsInRow(arr, indexes, num) {
  const rowIndex = indexes[0];
  const row = [];
  for (let i = 0; i < arr.length; i += 1) {
    row.push(arr[i][rowIndex]);
  }
  return row.includes(num.toString());
}

module.exports = checkIsInRow;
