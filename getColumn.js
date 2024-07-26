const getColumn = (arr, indexOfColumn) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][indexOfColumn] === "-") {
      continue;
    } else {
      result.push(+arr[i][indexOfColumn]);
    }
    continue;
  }

  return result;
};

module.exports = getColumn;
