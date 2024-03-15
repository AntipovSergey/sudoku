// [[1 - 5 8 - 2 - - -]
// [- 9 - - 7 6 4 - 5]
// [2 - - 4 - - 8 1 9]
// [- 1 9 - - 7 3 - 6]
// [7 6 2 - 8 3 - 9 -]
// [- - - - 6 1 - 5 -]
// [- - 7 6 - - - 3 -]
// [4 3 - - 2 - 5 - 1]
// [6 - - 3 - 8 9 - -]]

// function solve(arr) {
//   function isNull() {
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[i][j] === '-') {
//           return [i, j];
//         }
//         //   let sum = 0;
//         //   sum += arr[j];
//         //   if (sum === 45) {

//       //       }
//       }
//     }
//   }
// }

function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        for (let num = 1; num <= 9; num++) {
          let check = true;
          for (let k = 0; k < 9; k++) {
            if (arr[i][k] === num || arr[j][k] === num) {
              check = false;
            }
          }
          if (check) {
            arr[i][j] = num;
          }
        }
      }
    }
  }
  return arr;
}
console.log(solve([
  [0, 0, 1, 3, 6, 0, 7, 0, 0],
  [0, 0, 0, 0, 5, 8, 0, 0, 0],
  [0, 0, 0, 4, 0, 0, 0, 2, 5],
  [0, 8, 0, 0, 0, 0, 9, 0, 3],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 5, 0, 0, 0, 0, 8, 0],
  [1, 2, 0, 0, 0, 9, 0, 0, 0],
  [0, 0, 0, 2, 8, 0, 0, 6, 0],
  [0, 0, 8, 5, 3, 4, 2, 9, 0],
]));
