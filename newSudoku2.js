let newA =    '129563784548217639637489521293156847476328915851974362964731258782645193315892476';// true
let newTest = '1295637845482176396374895212931568474763289158519743629647312587826451933158-2476';// true
// 10-15 сек
let newB = '12-5637--548217639----895--2931-68-7476---91585197436---473--5878264-193315892476';
// 50-60 сек
let newC = '1--5637--548217639----895--2931-68-7476---91585197436---473--5878264-193315892476';
// 40 сек
let newD = '1--5--7--548-17-39----895--2--1-68-7476---9158----436---473--58----4-193-------76';
// очень долго - 30 мин - 40 мин
let inter = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
// черезвычайно долго
let minus = '---------------------------------------------------------------------------------';
let sudoku = newD.split('');

let arrExample = vertikalSudoku(sudoku, 9);// получаем вложенный массив

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getNumArr (arr){ // складываем числа из очередного блока из 9 в массив
  let numArr = [];
  for (let z = 0; z < arr.length; z++) {  
    if (arr[z] !== '-') {
      numArr.push(arr[z]);
    }
  }
  return numArr;
}

function changelingArr(arr){  // меняем в массиве горизонталь на вертикаль
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = [];
  }
  for (let i = 0; i < arr.length; i++) {
    
    for (let x = 0; x < arr.length; x++) {
      newArr[x].push(arr[i][x]);
    }
  }
return newArr;
}

//проверяем горизонталь
function checkH(arr){
  for (let i = 0; i < arr.length; i++) { 
  for (let z = i+1; z < arr.length; z++) { 
    if (arr[i] == arr[z]) {
      return false;
  } 
 }
}
return true;
}


//получение массива нужной длинны из полученного начиная с индекса start и заканчивая stop
function modifedArr(arr, start, stop){
  let modArr = [];
  for (let i = start; i < stop; i++) {
    modArr.push(arr[i]);
  }
  return modArr;
}
//console.table(modifedArr(sudoku, 0, 9));

function chekNumArr(arr, num){ // проверка есть ли в массиве arr число num
  for (let z = 0; z < arr.length; z++) { 
      if (arr[z] == num) {
        return false;
    } 
  }
  return true;
}

function solve (arr) {  // решение 
  let newArr = [];
  let modArr = vertikalSudoku(arr, 9);
  for (let x = 0; x < modArr.length; x++) {
    newArr[x] = [];
    for (let i = 0; i < modArr.length; i++) {
      if (modArr[x][i] !== '-') {
        newArr[x].push(modArr[x][i]);
      } else {
        let flag = true;
        while (flag){
          let rnd = getRandomIntInclusive(1, 9);
             if (chekNumArr(modArr[x], rnd) && chekNumArr(newArr[x], rnd)){
               newArr[x].push(rnd);
               modArr[x].splice(i, 1, rnd + '')
               flag = false;
              }
        }
        }
    }
  }
  return newArr;
}

// принемает одномерный массив, а отдает вложенный lengthArr - длинна элемента
function vertikalSudoku(arrV, lengthArr){ 
  let arrH = [];
  for (let x = 0; x < lengthArr; x++) {
    arrH[x] = [];
  for (let i = 0; i < lengthArr; i++) {
    
    arrH[x].push(arrV[i+x*lengthArr]);
  }
}
//console.log('arrV',arrV);
//console.table(arrH);
return arrH;
}

let exp = solve(sudoku);
//console.table(exp);
let chengExp = changelingArr(exp);
//console.table(chengExp);
let count = 0;
while(count !== 9){
  count = 0;
  exp = solve(sudoku);
  chengExp = changelingArr(exp);
  for (let i = 0; i < 9; i++) {
    if (checkH(chengExp[i])){
      //console.log(checkH(chengExp[i]));
      //console.log(chengExp[i]);
      //console.table(exp);
      //console.table(chengExp);
      //console.log(count);
      count++;
    }
  }
}
console.table(exp);
//console.log(checkH(chengExp[0]));

//console.table(chengExp);
//console.table(solve(sudoku));
//console.table(arrExample[1]);
//console.table(1 == '-');
