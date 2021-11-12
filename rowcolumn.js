let board = [
  [0, 9, 0, 0, 7, 6, 4, 0, 5],

  [2, 0, 0, 4, 0, 0, 8, 1, 9],

  [0, 1, 9, 0, 0, 7, 3, 0, 6],

  [7, 6, 2, 0, 8, 3, 0, 9, 0],

  [0, 0, 0, 0, 6, 1, 0, 5, 0],

  [0, 0, 7, 6, 0, 0, 0, 3, 0],

  [4, 3, 0, 0, 2, 0, 5, 0, 1],

  [6, 0, 0, 3, 0, 8, 9, 0, 0],
];

function getResRow(arr, indexRow, num) {
  let res = arr[indexRow];
  console.log(res);
  for (let j = 0; j < res.length; j++){
     if(res[j]===num)return true
  }
  return false
}
console.log(getResRow(board, 3, 4));

