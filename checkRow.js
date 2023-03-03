// function checkRow(arr) {
//   const rowspace = [];
//   const litrow = arr.filter((el) => {
//     el === ".";
//   });
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       array[i][j] === '.' ? resultArr.push([i,j])
         
//       rowspace.push(arr[i][j]);
//       //}
//     }
//     console.log(rowspace);
//   }
// }

// checkRow(array);
function solveSudoku(table)
for (let r = 0; r < table[i].length; r++) {
    if (table[col][r] == number && !== row) {
        table[col][r] = ".";
        return solveSudoku(table);
    }
}
