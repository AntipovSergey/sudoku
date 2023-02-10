function horizontal(arr, argv) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[0][i] === argv) {
      return true;
    }
  }
  return false;
}

module.exports = horizontal;
// function a() {

//   for (let i = 0; i < res.length; i++) {
//     for (let j = 0; j < res[i].length; j++) {
//       if (res[i][j] === "-") {
//         return true;
//       }
//     }
//     return false;
//   }
// }
// a();

const res = [
  [1, "-", 5, 8, "-", 2, "-", "-", "-"],
  ["-", 9, "-", "-", 7, 6, 4, "-", 5],
  [2, "-", "-", 4, "-", "-", 8, 1, 9],
  ["-", 1, 9, "-", "-", 7, 3, "-", 6],
  [7, 6, 2, "-", 8, 3, "-", 9, "-"],
  ["-", "-", "-", "-", 6, 1, "-", 5, "-"],
  ["-", "-", 7, 6, "-", "-", "-", 3, "-"],
  [4, 3, "-", "-", 2, "-", 5, "-", 1],
  [6, "-", "-", 3, "-", 8, 9, "-", "-"],
];
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const end = [];
for (let i = 0; i < res.length; i++) {
  for (let j = 0; j < res[i].length; j++) {
    if (res[i][j] === "-") {
      res[i][j] = start;
    }
  }
}
// console.log(end);
const index = [];
for (let i = 0; i < res.length; i++) {
  // console.log(res[i]);
  for (let j = 0; j < res[i].length; j++) {
    for (let a = 0; a < res[i][j].length; a++) {
      // if (res[i][j] === res[i][j][a]) {
      console.log(i, j, a);
      // index.push([i][j][a]);
      // console.log(index);
    }
  }
}
// }
// console.table(res);
