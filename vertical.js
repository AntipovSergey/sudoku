function vert(arr, argv) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      // console.log(arr[j][i]);
      if (arr[j][2] === argv) {
        return true;
      }
    }
  }
  return false;
}

module.exports = vert;

// function vert(arr, argv) {
//   const res = [];
//   const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   for (let i = 0; i < arr.length; i += 1) {
//     for (let j = 0; j < arr.length; j += 1) {
//       for (let a = 0; a < num.length; a += 1) {
//         if (arr[j][i] === num[a]) {
//           res.push([arr[j][i], j, i]);
//         }
//       }
//       // // console.log(arr[j][i]);
//       // if (arr[j][i] === argv) {
//       //   return true;
//       // }
//     }
//   }
//   return res;
// }

// module.exports = vert;
