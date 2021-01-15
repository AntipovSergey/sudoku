function searchColumn(columnIndex, arrMain) {
  let arrColumn = [];

  for (let i = 0; i < 9; i++  ) {
    if (arrMain[i][rowColumn] !== '-') {
      arrColumn.push(arr[i][rowColumn]);
    }
  }
  return arrColumn;

}

console.log((searchColumn(columnIndex, arrMain)));


// function searchColumn(columnIndex, arrMain) {
//   let arrColumn = [];

//   for (let i = 0; i < arrMain.length; i++  ) {
//     if (arrMain[i][columnIndex] !== '-') {
//       arrColumn.push(arrMain[i][columnIndex]);
//     }
//   }
//   return arrColumn;
// }

// console.log((searchColumn(2, [['1','-','3'],['-','6','8'],['-','5','2']])));
