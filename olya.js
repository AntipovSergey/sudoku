
// поиск по квадрату
function sector(){
    const parsing = parse(str);
    console.log(parsing);
    const coordinate =position();
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let sectorNumber =[];
    let includNumberSector =[];
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
       sectorNumber.push(parsing[boxCoordinat[0]+j][boxCoordinat[1]+i])
     }
     console.log(sectorNumber);
   }
   
   // цикл по вычислению 
   for (let i = 0; i < numbers.length; i++) {
       if (sectorNumber.includes(numbers[i])) {
         continue;
       } else {
         includNumberSector.push(numbers[i]);
       }
     }
   return includNumberSector;
   }