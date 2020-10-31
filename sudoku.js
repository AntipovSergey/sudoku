// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {

    const newArr = []
    const arr = boardString.split('');
  
    let newArr2 = arr.map((item, index, array) => {
      if (item == '-') {
        return item = 0
      }function solve(boardString) {
        const newArr = []
        const arr = boardString.split('');
      
        let newArr2 = arr.map((item, index, array) => {
          if (item == '-') {
            return item = 0
          }
          return +item    
        })
      
        for(let i = 0; i < 9; i += 1) {
          const arr2 = []
            for (let j = 0; j < 9; j += 1){
              arr2.push(newArr2[(i * 9) + j])
            }
            newArr.push(arr2)
          }
        }
      solve(boardString)
      
      return +item    
    })
  
    for(let i = 0; i < 9; i += 1) {
      const arr2 = []
        for (let j = 0; j < 9; j += 1){
          arr2.push(newArr2[(i * 9) + j])
        }
        newArr.push(arr2)
      }

//ТУТ БУДЕТ ПРЕОБРАЗОВАНИЕ СТРОКИ К ДВУМЕРНОМУ МАССИВУ ЧИСЕЛ

// //----------------------------------------------------------------------------------------
//  //ищем пустое значение
function checkEmptyCell(arr1){
  for (let i = 0; i < arr1.length; i++) {
    if(arr1[i].includes(0)){
      return true
    }
  }
  return false
}

function findEmptyCell(arr1){
  let filledArr = arr1;
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[i].length; j++) {
          if(arr1[i][j] === 0 ){
            let possibleNumbers = findPossibleNumbers(i,j);
            filledArr = fillCell(i,j,possibleNumbers);
          }   
        }
    }
    if(checkEmptyCell(filledArr)){
      return findEmptyCell(filledArr)
    }else{
      return filledArr;
    }
  }

function findPossibleNumbers(i,j){
  const rowContent = newArr[i];
  const colContent = getColumn(j);
  const groupContent = getGroup(i,j);
  let  possibleNumbers = []; 
  for (let num = 1; num <= 9; num ++) {
    // если и в строке и в столбце и в группе нет цифры, то добавляем ее в возможные варианты
      if(rowContent.includes(num)||colContent.includes(num)||groupContent.includes(num)) {
        continue;
      }else{
        possibleNumbers.push(num)
      }
    }
    return possibleNumbers;
}

function fillCell(i,j,possibleNumbers) {
  if(possibleNumbers.length === 1){
    newArr[i][j] = possibleNumbers[0]
  }
  return newArr;
}


function getColumn(j) {
  const columnArr = []
  for (let i = 0; i < newArr.length; i += 1) {
    columnArr.push(newArr[i][j])
  }
  return columnArr
  }

function getGroup(i,j) {
  function getCoords (a) {
    if (a < 3) {
      return {start: 0,
      finish: 3 }
    }
    if (a >= 3 && a < 6) {
      return {start: 3,
      finish: 6 }
    }
    if (a >= 6 ) {
      return {start:6, 
      finish: 9 }  
    }
  }

  const coordsI = getCoords(i);
  const coordsJ = getCoords(j);
  let arrGroup = [];

  for (let k = coordsI.start; k < coordsI.finish; k += 1 ){
    for (let r = coordsJ.start; r < coordsJ.finish; r += 1){
      arrGroup.push(newArr[k][r])
    }
  }
  return arrGroup;
  }

  return console.log(findEmptyCell(newArr));
 
}

console.log(solve('---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----'));
   


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 1; j <= 9; j++) { // просто счетчик возможных значений в строке
      if (board[i].includes(j)) {
      }else{
        return false;
      }
    }
  }
  return true;
}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
