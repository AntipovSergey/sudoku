const getLineArr = (arr, indexOfLine) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (indexOfLine === i) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i][j] === "-") {
          continue;
        } else {
          result.push(+arr[i][j]);
        }
      }
    }
    continue;
  }

  return result;
};

module.exports = getLineArr;
