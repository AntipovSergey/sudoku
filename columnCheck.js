function res(arr, num) {
  let num1 = num[1];
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][num1] != "-") {
      newArr.push(arr[i][num1]);
    }
  }
  return newArr;
}
