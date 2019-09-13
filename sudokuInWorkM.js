// входящая строка
let incomeString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
// -------------------------------------



// создаем доску 
const parse = (string) => {
  let arr = incomeString.split('');
  let board = []
    for (let i = 0; i < arr.length; i += 9) {
      board.push(arr.slice(i, i + 9))
    }
  return board
}


//------------------------------------

// первая координата недостающего числа
const findCoordinateH = () => {
  let board = parse(incomeString)
  let coordinate = [];
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      if (board[i][j] == '-') {
        coordinate.push(i, j)
        return coordinate;
      } 
    }
  }
   
  
}
//-----------------------------------------

// поиск недостоющих цифр по

const horizon = () => {
  let numbers = ['1','2','3','4','5','6','7','8','9'] 
  let coordinate= findCoordinateH()
  let arrForSearch = parse(incomeString)[coordinate[0]]
  let possibleNum = []
  if(coordinate.length===0){
    return possibleNum=[];
  }
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
function vertical() {
  const coordinate = findCoordinateH()[1];
  const parsing = parse(incomeString);
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let arrVertical=[];
  let numbersVertical=[];
  for (let i = 0; i < parsing.length; i++) {
      arrVertical.push(parsing[i][coordinate]);
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
function sector(){
  const parsing = parse(incomeString);
  const coordinate =findCoordinateH();
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let sectorNumber =[];
  let numbersSector =[];
  let boxCoordinat;
if(coordinate.length===0){
  return numbersSector=[];
}

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
     sectorNumber.push(parsing[boxCoordinat[0]+j][boxCoordinat[1]+i])
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

 console.log(sector())

//------------------------------------
// возможные числа в координате

 function potential(){
   let numbersHorizon = horizon();
   let numbersVertical = vertical();
   let numbersSector = sector();
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
function slover(board){
  let coordinate =findCoordinateH();
  let numbersHorizon = horizon();
  let numbersVertical = vertical();
  let numbersSector = sector();
  let numbersPotential = potential();
  board[coordinate[0]][coordinate[1]]=numbersPotential[0]
  let newBoard = board;
  let newString = newBoard.join('').replace(/,/g, '');
  incomeString = newString
  return incomeString

}


// console.log(slover(incomeString));



 
