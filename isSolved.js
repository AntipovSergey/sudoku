const invalidBoard = [
  [ 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
  [ 2, 2, 2, 2, 2, 2, 2, 2, 2 ],
  [ 3, 3, 3, 3, 3, 3, 3, 3, 3 ],
  [ 4, 4, 4, 4, 4, 4, 4, 4, 4 ],
  [ 5, 5, 5, 5, 5, 5, 5, 5, 5 ],
  [ 6, 6, 6, 6, 6, 6, 6, 6, 6 ],
  [ 7, 7, 7, 7, 7, 7, 7, 7, 7 ],
  [ 8, 8, 8, 8, 8, 8, 8, 8, 8 ],
  [ 9, 9, 9, 9, 9, 9, 9, 9, 9 ],
];

function isSolvedColumns(arr, cor, num){
  for(i = 0 ; i < arr.length; i++){
    console.log(arr[i][cor[1]], num);
    if( arr[i][cor[1]] === num){
      return false
    }
  }
  return true;
}

