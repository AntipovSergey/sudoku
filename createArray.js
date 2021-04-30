function createArray(string) {
  let arr = [];
  for (let i = 0; i < string.length; i = i + 9) {
    arr.push(string.slice(i, i + 9));
  }
  for (let j = 0; j < arr.length; j++) {
    arr[j] = arr[j].split("");
    for (let k = 0; k < arr[j].length; k++) {
      if (arr[j][k] != "-") {
        arr[j][k] = Number(arr[j][k]);
      }
    }
  }
  return arr;
}
