let arr =
  // ["1", "9", "5", "2", "3", "8", "2", "6", "4"],
  [
    ["0","2","4","5","6","1", "9", "5", "2", "6"],
    ["1", "9", "5", "2", "7", "8", "8", "6", "4"],
    ["-", "-", "-", "2", "5", "8", "4", "3", "4"]
  ];

// console.log(arr.length);
function isSolved(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === "-") {
      return [i,arr[i].indexOf(arr[i][j])];
    }
  }
}
}
console.log(isSolved(arr));
