const invalidBoard = [
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
  [ 2, 2, 2, 2, 2, 2, 2, 2, 2 ],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
  [ 0, 2, 3, 4, 5, 6, 7, 8, 9 ],
  [ 5, 5, 5, 5, 5, 5, 5, 5, 5 ],
  [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
  [ 7, 7, 7, 7, 7, 7, 7, 7, 7 ],
  [ 8, 8, 8, 8, 8, 8, 8, 8, 8 ],
  [ 9, 9, 9, 9, 9, 9, 9, 9, 9 ],
];


function isSolvedColumns(arr, cor, num){
  for(i = 0 ; i < arr.length; i++){
    if(arr[i][cor[1]] === num){
      return false
    }
  }
  return true;
}


function isSolvedRows(arr, cor, num){
  for(i = 0 ; i < arr.length; i++){
    // console.log(cor[1]);
    if(arr[cor[0]][i] === num){
      return false
    }
  }
  return true;
}



module.exports = {isSolvedColumns, isSolvedRows}


// function isSolvedColumns(arr,){

//   let result = 45;
//   let solwedColumns = [[],[],[],[],[],[],[],[],[]];
//   for(let i = 0; i < 9; i++){
//     for(let j = 0; j < 9; j++){
//       solwedColumns[j].push(arr[i][j])
//       const reducer = (previousValue, currentValue) => previousValue + currentValue;
//     if (solwedColumns.reduce(reducer) === result){
//       continue
//       } else {
//         return false;
//       } 
//     }
//   }
// }

// console.log(isSolvedColumns(invalidBoard))

// function isSolvedRows(arr) {
//   let result = 45;
//   for(let i = 0; i < 9; i++){
//     const solvedRow = arr[i]
//     const reducer = (previousValue, currentValue) => previousValue + currentValue;
//     if (solvedRow.reduce(reducer) === result){
//       continue
//     } else {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isSolvedRows(invalidBoard));
