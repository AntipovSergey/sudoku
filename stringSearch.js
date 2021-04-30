function stringSearch (num, arr) {
  for (let i = 0; i< arr.length; i++) {
    if (arr[i].indexOf(num) !== -1) {
      return false;
    }
  }
  return true;
}

console.log(stringSearch(9,[[1,2,5,4],[4,7,8,9]]));

  
