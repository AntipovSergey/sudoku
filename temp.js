function solveSudokuFORGODSSAKE(arr) {
  if (!checkEmpty(arr)) {
    return arr;
  }
  // poisk koordinat x y
  for (let i = 1; i < 10; i += 1) {
    let testArr = arr;
    testArr[x][y] = i;
    if (rules(testArr)) {
      arr[x][y] = i
      arr = a(arr);
      if (checkEmpty(arr)) {
        arr[x][y] = '-';
      }
    }
  }
  return arr;
}
