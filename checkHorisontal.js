function checkHorisontalSudoku(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (key in obj) {
      obj[key] += 1;
    } else {
      obj[key] = 1;
    }
  }
  for (key in obj) {
    if (obj[key] > 1) {
      return false;
    }
  }
  return true;
}
