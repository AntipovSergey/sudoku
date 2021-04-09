//Тестовые данные
let testObject = {
a: 1,
b: 2,
c: [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'], 
  ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
  ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
  ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
  ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
  ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
  ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
  ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
  ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
]}


//Функция сбора значений collector
function collector({a: i, b: j, c: boardArray}) {
  let obj = {
    a: [],
    b: [],
    c: [],
    d: [],
  }

  let iStart = 0, iEnd = 0, jStart = 0, jEnd = 0;
  if ((i >= 0 && i < 3) && (j>=0 && j<3)){
    iStart = 0, iEnd = 3, jStart = 0, jEnd = 3;
    //console.log('первый квадрат');
    obj.c = getSquare (iStart, iEnd, jStart, jEnd, boardArray) 
  }
  else if ((i >= 0 && i < 3) && (j>=3 && j<6)) {
    iStart = 0, iEnd = 3, jStart = 3, jEnd = 6;
    //console.log('второй квадрат');
    obj.c = getSquare (iStart, iEnd, jStart, jEnd, boardArray) 
  }
  else if ((i >= 0 && i < 3) && (j>=6 && j<9)) {
    iStart = 0, iEnd = 3, jStart = 6, jEnd = 9;
    //console.log('третий квадрат');
    obj.c = getSquare (iStart, iEnd, jStart, jEnd, boardArray) 
  }
  
  else if ((i >= 3 && i < 6) && (j>=0 && j<3)) {
    iStart = 3, iEnd = 6, jStart = 0, jEnd = 3;
    //console.log('четвертый квадрат');
    obj.c = getSquare (iStart, iEnd, jStart, jEnd, boardArray) 
  }
  else if ((i >= 3 && i < 6) && (j>=3 && j<6)) {
    iStart = 3, iEnd = 6, jStart = 3, jEnd = 6;
    //console.log('пятый квадрат');
    obj.c = getSquare (iStart, iEnd, jStart, jEnd, boardArray) 
  }
  else if ((i >= 3 && i < 6) && (j>=6 && j<9)) {
    iStart = 3, iEnd = 6, jStart = 3, jEnd = 6;
    //console.log('шестой квадрат');
    obj.c = getSquare (iStart, iEnd, jStart, jEnd, boardArray) 
  }
  
  else if ((i >= 6 && i < 9) && (j>=0 && j<3)) {
    iStart = 6, iEnd = 9, jStart = 0, jEnd = 3;
    //console.log('седьмой квадрат');
    obj.c = getSquare (iStart, iEnd, jStart, jEnd, boardArray) 
  }
  else if ((i >= 6 && i < 9) && (j>=3 && j<6)) {
    iStart = 6, iEnd = 9, jStart = 6, jEnd = 9;
    //console.log('восьмой квадрат');
    obj.c = getSquare (iStart, iEnd, jStart, jEnd, boardArray) 
  }
  else if ((i >= 6 && i < 9) && (j>=6 && j<9)) {
    iStart = 6, iEnd = 9, jStart = 6, jEnd = 9;
    //console.log('девятый квадрат');
    obj.c = getSquare (iStart, iEnd, jStart, jEnd, boardArray) 
  }
  
  obj.a = getRow(i, j, boardArray);
  obj.b = getColumn(i, j, boardArray);
  
  obj.d = boardArray;
  return obj;
}

function getSquare (iStart, iEnd, jStart, jEnd, boardArray) {
  let result = [];
  for (let i = iStart; i < iEnd; i++){
    for (let j = jStart; j < jEnd; j++) {
      result.push(boardArray[i][j]);
    }
  }
  result = result.join('');
  result = result.replace(/\D/gm, '');
  //console.log('GetSquare: ', result);
  return result;
}

function getRow (i, j, boardArray){
  let result = [];
  let k = boardArray[i].length;
  for (let j = 0; j < k; j++) {
    result.push(boardArray[i][j]);
  }
  result = result.join('');
  result = result.replace(/\D/gm, '');
  //console.log('GetRow: ', result);
  return result;
}

function getColumn (i, j, boardArray){
  let k = boardArray.length;
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(boardArray[i][j]);
  }
  result = result.join('');
  result = result.replace(/\D/gm, '');
  //console.log('GetColumn: ', result);
  return result;
}


let result = collector(testObject);
// console.log(result);
console.log('i', testObject.a);
console.log('j', testObject.b);
console.log('Row:', result.a);
console.log('Column:', result.b);
console.log('Scuare:', result.c);
console.table(result.d);
