// console.log("ruslan");
// //
// let x = 0;
// let y = 0;
// for (let indeXSquare = 0; indeXSquare < 9; indeXSquare++) {
//   let checkMask = [[1, 2, 3, 4, 5, 6, 7, 8, 9], [indeXSquare]];
//   // switch (indeXSquare) {
//   //   case 0:
//   //     x = 0;
//   //     y = 0;
//   //     console.log("case 0");
//   //     break;
//   //   case 3:
//   //     x = 3;
//   //     y = 0;
//   //     console.log("case 3");
//   //     break;
//   //   case 6:
//   //     x = 6;
//   //     y = 0;
//   //     console.log("case 6");
//   //     break;
//   // }

//   for (let i = 0 + x; i < 3 + x; i += 1) {
//     for (let j = 0 + y; j < 3 + y; j += 1) {
//       for (let indexChech = 0; indexChech < checkMask.length; indexChech++) {
//         if (sudoku[i][j] === checkMask[0][indexChech]) {
//           checkMask[0].splice(indexChech, 1);
//         }
//       }

//       console.log(i, j);
//     } // конец для for j
//     // console.log("x -> ", x);
//     // console.log("y -> ", y);
//   } // конец для for i
//   y += 3;
//   x = 0;

//   //console.log(checkMask);
//   console.log();
// }
