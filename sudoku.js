const fs = require('fs');

function getSudocu(){
  let strs = fs.readFileSync('./puzzles.txt', 'utf8').split('\r\n');
  let arr = strs[0].split('');
  let strArr = [];
  for(let i = 0; i < arr.length; i = i){
    strArr.push(arr[i]);
    if(i % 9 === 0){
      
    }
  }
  console.log(arr);
}
getSudocu();