function checkColumn(arr, el) {
  const revercedArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    const result = [];
    for (let j = 0; j < arr.length; j += 1) {
      result.push(arr[j][i]);
    }
    revercedArr.push(result);
  }
  for (let i = 0; i < revercedArr.length; i += 1) {
    if (revercedArr[i].includes(el)) return false;
  }
  return true;
}

module.exports = checkColumn;
