const fs = require('fs');

function getSudocu(){
  let strs = fs.readFileSync('./puzzles.txt', 'utf8').split('\r\n');
  let arr = strs[0].split('');
  if(arr.length !== 81) return false;
  let newarr = [];
  let result = [];
  for(let i = 0; i < arr.length; i=i+9){
    newarr.push(arr[i]);
    newarr.push(arr[i + 1]);
    newarr.push(arr[i + 2]);
    newarr.push(arr[i + 3]);
    newarr.push(arr[i + 4]);
    newarr.push(arr[i + 5]);
    newarr.push(arr[i + 6]);
    newarr.push(arr[i + 7]);
    newarr.push(arr[i + 8]);
    result.push(newarr);
    newarr = [];
  }
    return result;
}

function checkSqure(i, j, sudocu){
  let arrNums = [];

  function forInadex(si,ei, sj,ej){
    let ret = [];
    for(let i = si; i <= ei; i++){
      for(let j = sj; j <= ej; j++){
        if(sudocu[i][j] !== '-'){
          ret.push(sudocu[i][j]);
        }
      }
    }
    return ret;
  }
  if(i >= 0 && i <= 2 && j >= 0 && j <= 2){
    arrNums = forInadex(0,2, 0,2)
  }
  else if(i >= 3 && i <= 5 && j >= 0 && j <= 2){
    arrNums = forInadex(3,5, 0,2)
  }
  else if(i >= 6 && i <= 8 && j >= 0 && j <= 2){
    arrNums = forInadex(6,8, 0,2)
  }

  else if(i >= 0 && i <= 2 && j >= 3 && j <= 5){
    arrNums = forInadex(0,2, 3,5)
  }
  else if(i >= 3 && i <= 5 && j >= 3 && j <= 5){
    arrNums = forInadex(3,5, 3,5)
  }
  else if(i >= 6 && i <= 8 && j >= 3 && j <= 5){
    arrNums = forInadex(6,8, 3,5)
  }

  else if(i >= 0 && i <= 2 && j >= 6 && j <= 8){
    arrNums = forInadex(0,2, 6,8)
  }
  else if(i >= 3 && i <= 5 && j >= 6 && j <= 8){
    arrNums = forInadex(3,5, 6,8)
  }
  else if(i >= 6 && i <= 8 && j >= 6 && j <= 8){
    arrNums = forInadex(6,8, 6,8)
  }
  return arrNums;
}

module.exports = {
  getSudocu,
  checkSqure,
};