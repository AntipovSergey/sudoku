function checkRow(arr, indexes, num) {
  const lineIndex = indexes[0];
  const line = arr[lineIndex];
  return !line.includes(num.toString());
}

module.exports = checkRow;
