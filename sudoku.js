// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

function solve(boardString) {

  const newArr = []
  const arr = boardString.split('');

  // console.log(arr);

  let newArr2 = arr.map((item, index, array) => {
    if (item == '-') {
      return item = 0
    }function solve(boardString) {
      const newArr = []
      const arr = boardString.split('');
    
      // console.log(arr);
    
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
        console.log(newArr)
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
    console.log(newArr)

//------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
 //ищем пустое значение
 
 for (let i = 0; i < newArr.length; i++) {
  for (let j = 0; j < newArr[i].length; j++) {
      const rowContent = newArr[i];
      const colContent = getColumn(j);
      const groupContent = getGroup(i,j);
      function getColumn(j) {
      const columnArr = []
      for (let i = 0; i < newArr.length; i += 1) {
        columnArr.push(newArr[i][j])
      }
      return columnArr
      }

      function getGroup(i,j) {
      function getCoords (a) {
        if (a<3) {
          {start: 0, 
          finish: 3}
        }
        if (a>=3 && a<=6) {
          {start:3, 
          finish:5}
        }
        if (a>=6) {
          {start:6, 
          finish:8}
        }
      }
      const coordsI = getCoords(i)
      const coordsJ = getCoords(j)

      arrGroup = []
      for (let k = coordsI.start; k<=coordsI.finish; k++){
        for (let r = coordsJ.start; r<=coordsJ.finish; r++)
        arrGroup.push (newArr [k][r])
      }
      return arrGroup;
      }

    if(newArr[i][j] === 0 ){
       let  possibleNumbers = [];
      // совершить проверку по массивам
      for (let num = 1; num <= 9; num ++) {
       // если и в строке и в столбце и в группе нет цифры, то добавляем ее в возможные варианты
        if(rowContent.includes(num)&&colContent.includes(num)&&groupContent.includes(num)) {
        }else{
          possibleNumbers.push(num)
        }
      }
      if(possibleNumbers.length === 1){
        newArr[i][j] = possibleNumbers[0]
        console.log(newArr)
      }
    }
  }   
 }

}
console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));

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
