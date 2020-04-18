function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let newA = '129563784548217639637489521293156847476328915851974362964731258782645193315892476';// true
let newB = '129563784548217639637489521293156847476328915851974362964731258782645193315892476';// true
let inter = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
let sudoku = inter.split('');

function solve (arr) {
  let arrNum = [];
  let rnd = 0;
  let flag = 0;
  //console.log(!isNaN('-'));
  for (let i = 0; i < 10; i++) {
    if (!isNaN(arr[i])){
      arrNum.push(+arr[i]);
       
    }
  }
  for (let i = 0; i < 9; i++) {
    
    if (arr[i] === '-') {
      do {
        rnd = getRandomIntInclusive(1, 9);
        
        flag = arrNum.find((el) => { return el == rnd;});
        //console.log(rnd, flag, arrNum);
      } while (flag);
      
      arr.splice(i, 1, rnd + '');
      console.log( arrNum);
      arrNum.length = 0;
      console.log(arrNum);
      for (let i = 0; i < 9; i++) {
        if (!isNaN(arr[i])){
          arrNum.push(+arr[i]);
           
        }
      }
    }
  }
  return arr;
}
let arrRand = solve(sudoku);

function horizontalSudoku(arr){
  for (let i = 0; i < arr.length; i++) {
    for (let x = i+1; x < arr.length; x++) {
     if (arr[i] == arr[x]) {
      return false;
    }
  }
}
return true;
}

let a = solve (sudoku);
let b = vertikalSudoku(a);
y = 0;
while (horizontalSudoku(b[0])) {
  y++;
  //console.log(horizontalSudoku(b[0]));
}
  //console.log(horizontalSudoku(b[i]));
  console.log(horizontalSudoku(b[0]));


function vertikalSudoku(arrV){
  let arrH = [];
  for (let x = 0; x < 9; x++) {
    arrH[x] = [];
  for (let i = 0; i < 9; i++) {
    
    arrH[x].push(arrV[i+x*9]);
  }
}
console.log('arrV',arrV);
console.table(arrH);
return arrH;
 for (let c = 0; c < 1; c++) {
  for (let i = d; i < 8; i++) {
     if (arrH[c][0] == arrH[i+1][c]) {
      return false;
   }
 }
}
return true;
}

//console.log(vertikalSudoku(arrRand));
