// входящая строка
const incomeString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
// -------------------------------------



// создаем доску 
const parse = (string) => {
  let arr = string.split('');
  let board = []
    for (let i = 0; i < arr.length; i += 9) {
      board.push(arr.slice(i, i + 9))
    }
  return board
}


//------------------------------------

// первая координата недостающего числа
const findCoordinateH = (board) => {
  // let board = parse(incomeString)
  let coordinate = [];
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] == '-') {
        coordinate.push(i, j)
        return coordinate;
      } 
    }
  }
   
  return false;
   
  
}
//-----------------------------------------

// поиск недостоющих цифр по

const horizon = (coordinate, board) => {
  let numbers = ['1','2','3','4','5','6','7','8','9'] 
  // let coordinate= findCoordinateH()
  let arrForSearch = board[coordinate[0]]
  let possibleNum = []
  // if(coordinate.length===0){
  //   return possibleNum=[];
  // }
  for (let i = 0; i < 9; i += 1) {
    if(arrForSearch.includes(numbers[i])){
      continue
    }
    else{
      possibleNum.push(numbers[i])
    }
  }
  return possibleNum
}




//-----------------------------------------


// поиск по вертикали
function vertical(coordinate,board) {
  // const coordinate = findCoordinateH()[1];
  // const board = parse(incomeString);
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let arrVertical=[];
  let numbersVertical=[];
  for (let i = 0; i < board.length; i++) {
      arrVertical.push(board[i][coordinate[1]]);
      }
      // console.log(arrVertical);
      for (let i = 0; i < numbers.length; i++) {
    if (arrVertical.includes(numbers[i])) {
      continue;
    } else {
      numbersVertical.push(numbers[i]);
    }
  }
 return numbersVertical;
 }
//  console.log(vertical())

//------------------------------------

// поиск по квадрату
function sector(coordinate,board){
  // const board = parse(incomeString);
  // const coordinate =findCoordinateH();
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let sectorNumber =[];
  let numbersSector =[];
  let boxCoordinat;
 // квадрат 1
  if(coordinate[0]<=2&&coordinate[1]<=2){
   boxCoordinat=[0,0];
   }
   //квадрат 2
   else if(coordinate[0]<=2&&coordinate[1]<=5){
    boxCoordinat=[0,3];
  }
   //  квадрат 3
  else if (coordinate[0]<=2&&coordinate[1]<=8){
   boxCoordinat=[0,6];
  }
  // квадрат 4
 else if (coordinate[0]>=3&&coordinate[0]<=(5)&& coordinate[1]<=(2)){
  boxCoordinat=[3,0];
 }
 //квадрат 5
 else if (coordinate[0]>=3&&coordinate[0]<=5&& coordinate[1]>=3&& coordinate[1]<=5){
  boxCoordinat=[3,3];
 }
 //квадрат 6
 else if (coordinate[0]>=3&&coordinate[0]<=5&&coordinate[1]>=6&& coordinate[1]<=8){
  boxCoordinat=[3,6];
 }
 //квадрат 7
 else if ((coordinate[0]>=6 && coordinate[0]<=8) && coordinate[1]<=2){
  boxCoordinat=[6,0];
 }
 // квадрат 8
 else if (coordinate[0]>=6 && coordinate[0]<=8&& coordinate[1]>=3&&coordinate[1]<=5){
  boxCoordinat=[6,3];
 }
 //квадрат 9
 else if (coordinate[0]>=6 && coordinate[0]<=8&& coordinate[1]>=6&&coordinate[1]<=8){
  boxCoordinat=[6,6];
 }

 // цикл по квадратам
 for (let j=0; j<3; j++){
 for (let i =0; i<3; i++ ){
     sectorNumber.push(board[boxCoordinat[0]+j][boxCoordinat[1]+i])
   }

 }
 // цикл по вычислению 
 for (let i = 0; i < numbers.length; i++) {
     if (sectorNumber.includes(numbers[i])) {
       continue;
     } else {
       numbersSector.push(numbers[i]);
     }
   }
 return numbersSector;
 }

//  console.log(sector())

//------------------------------------
// возможные числа в координате

 function potential(numbersHorizon, numbersVertical, numbersSector){
  //  let numbersHorizon = horizon();
  //  let numbersVertical = vertical();
  //  let numbersSector = sector();
   let general = numbersHorizon.concat(...numbersVertical,...numbersSector);
   let numbersPotential=[]
   for (let i=0;i<general.length;i++){
    let repeat = general.filter(item => item == general[i]).length;
   if(repeat < 2){
    numbersPotential.push(general[i]);
   }
  }
   return numbersPotential;
 }
 console.log(potential());
 
 let board=parse(incomeString);

//------------------------------------

 function slover(board){
  let coordinate =findCoordinateH(board);
  if(coordinate===false){
    return board
  }
  let numbersHorizon = horizon(coordinate,board);
  let numbersVertical = vertical(coordinate,board);
  let numbersSector = sector(coordinate,board);
  let numbersPotential = potential(numbersHorizon,numbersVertical,numbersSector);
  
for(let i=0;i<numbersPotential.length;i++){
  if(numbersPotential.length===0){
    return false;
  }
  board[coordinate[0]][coordinate[1]]=numbersPotential[i];

  // let newBoard = board;
 if(slover(board)){
   return board;
 } else{
  board[coordinate[0]][coordinate[1]]='-';
 }
 return false;
}

 }
//   let newBoard = board;
//   console.log(newBoard);
//   // let newString = newBoard.join('').replace(/,/g, '');
//   return newBoard
// }
  

//   } //else {
//     return newBoard;
//   }





console.log(slover(board));



 
