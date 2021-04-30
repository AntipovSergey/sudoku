function columnSearch(num, arr, index) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][index]);
    if (newArr.indexOf(num) != -1) {
      return false;
    }
  }
  return true;
}


