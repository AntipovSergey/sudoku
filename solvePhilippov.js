let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

const needBoard = (string) => {
  const boardNew = string.split('');
  let newArr=[];
  for (let i = 0; i < boardNew.length; i += 9) {
    newArr.push(boardNew.slice(i,i+9))
  }
  return newArr;
}

const boardArr = needBoard(boardString);

//console.log(boardArr)
//----------------------------------------------------------------------



function solve(boardArr) {

  for (let row = 0; row <= 9; row += 1 ) {
    for (let column = 0; column <= 9; column += 1) {
        //console.log(boardArr[row][column])
      if (boardArr[row][column] === '-') {
        for (let row = 0; row <= 9; row += 1 ) {
          for (let column = 0; column <= 9; column += 1) {
            if (boardArr[row][column] === Number) {
              
            }
            
          }
        }

        // for (let posNumb = 1; posNumb <= 9; posNumb += 1) {
        //   if (isSolve(row, collum, posNum, bordArr)) {
          // boardArr[row][colum] = posNum;
          // if (solve(boardArr))
          // return boardArr
        // }
        // }
        //проверка, возможные значения (функция(таблица, boardArr[row][column]))
      }
    }
  }
}

solve(boardArr);

function PossibleNumber (boardArr, coordinate) {
  
} 
