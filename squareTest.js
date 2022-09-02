// let _board = [
//     [1, 0, 5, 8, 0, 2, 0, 0, 0],
//     [0, 9, 0, 0, 7, 6, 4, 0, 5],
//     [2, 0, 0, 4, 0, 0, 8, 1, 9],
//     [0, 1, 9, 0, 0, 7, 3, 0, 6],
//     [7, 6, 2, 0, 8, 3, 0, 9, 0],
//     [0, 0, 0, 0, 6, 1, 0, 5, 0],
//     [0, 0, 7, 6, 0, 0, 0, 3, 0],
//     [4, 3, 0, 0, 2, 0, 5, 0, 1],
//     [6, 0, 0, 3, 0, 8, 9, 0, 0]
//  ];
// let perv = 0;
// let vtor = 0;
// function squares (first, second, value) {
//     let perv = Math-floor(first / 3) * 3;
//     let vtor = Math-floor(second / 3) * 3;
//     let found = false; 
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++){
//             if (value[perv + i][vtor + 1] === value) found = true
//         }
//     }
//     return found
// }
// let perv = 0;
// let vtor = 0;
// let value = 0;

// function squares(board, perv, vtor, k) {
//     for (let i = 0; i < 9; i++) {
//         const m = 3 * Math.floor(perv / 3) + Math.floor(i / 3);
//         const n = 3 * Math.floor(vtor / 3) + i % 3;
//         if (board[perv][i] == k || board[i][vtor] == k || board[m][n] == k) {
//           return false;
//         }
//     }
//     return true;
// }
// console-log(squares(board))

// function isValidSudoku(arr) {
//     let first = [];
//     let second = [];
//     let third = [];
//           for (let perv = 0; perv < 9; perv++) {
//         for (let vtor = 0; vtor < 9; vtor++) {
//             let value = arr[perv][vtor];
//             if (!(value === '-')) {
//                 let pervKey = `${perv}-${value}`,
//                     vtorKey = `${vtor}-${value}`,
//                     boxKey = `${Math.floor(perv/3)}-${value}-${Math.floor(vtor/3)}`

//                 if (first[pervKey] || second[vtorKey] || third[boxKey]) {
//                     return false;
//                 }               
//                 first[pervKey] = true;
//                 second[vtorKey] = true;
//                 third[boxKey] = true;
//             }
//         }
//     }

// return true;
// }

// console.log(isValidSudoku(_board));

const _board = [
    ['-', '9', '-', '-', '4', '2', '1', '3', '6'],
    ['-', '-', '-', '9', '6', '-', '4', '8', '5'],
    ['-', '-', '-', '5', '8', '1', '-', '-', '-'],
    ['-', '-', '4', '-', '-', '-', '-', '-', '-'],
    ['5', '1', '7', '2', '-', '-', '9', '-', '-'],
    ['6', '-', '2', '-', '-', '-', '3', '7', '-'],
    ['1', '-', '-', '8', '-', '4', '-', '2', '-'],
    ['7', '-', '6', '-', '-', '-', '8', '1', '-'],
    ['3', '-', '-', '-', '9', '-', '-', '-', '-'],
];


// let _board = [
//     [1, 0, 5, 8, 0, 2, 0, 0, 0],
//     [0, 9, 0, 0, 7, 6, 4, 0, 5],
//     [2, 0, 0, 4, 0, 0, 8, 1, 9],
//     [0, 1, 9, 0, 0, 7, 3, 0, 6],
//     [7, 6, 2, 0, 8, 3, 0, 9, 0],
//     [0, 0, 0, 0, 6, 1, 0, 5, 0],
//     [0, 0, 7, 6, 0, 0, 0, 3, 0],
//     [4, 3, 0, 0, 2, 0, 5, 0, 1],
//     [6, 0, 0, 3, 0, 8, 9, 0, 0]
//  ];

function square(pos, arr,candidates) {
    const [a, b] = pos;
  
    const first = Math.floor(a / 3) * 3;
    const second = Math.floor(b / 3) * 3;
    let newArr = [];
    let arrTwo = [];
    for (let i = first; i < first + 3; i ++) {
      for (let j = second; j < second + 3 ; j ++) {
        if (arr[i][j] !== '-') {
            newArr.push(Number(arr[i][j]))
      } 
     }
    }
    return candidates.filter((i) => newArr.indexOf(i) === -1)
   }
    
    
   
  console.log(square([7, 7], _board, [1,2,8]))


  module.exports = square


// function squares (first, second, value) {
//     let perv = Math.floor(first / 3) * 3;
//     let vtor = Math.floor(second / 3) * 3;
//     let found = false; 
//     for (let i = 0; i < perv; i++) {
//         for (let j = 0; j < vtor; j++){
//             if (value[i][j] === value)  {
//                 return false
//             }
//         }
//     }
//     return true
// }

// console.log(squares(1312312, [1, 1], _board))



