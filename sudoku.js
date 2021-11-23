// let text = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---";
let text = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----'
let arrSudoky = text
  .match(/(.{9})/g)
  .map(el => el.split(''))
  .map((il) => il.map(el => {
    if (el === '-') {
      return null;
    } else {
      return Number(el)
    }
  }))


function findStick(arrEdit) {
  newArr = []
  for (let i = 0; i < arrEdit.length; i++) {
    for (let j = 0; j < arrEdit[i].length; j++) {
      if (arrEdit[i][j] === null) {
        newArr.push([i, j])
      }
    }
  }
  return newArr
}

let sticks = findStick(arrSudoky)

function rowSearch(findStick, board) {
  const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 0; i < board[findStick[0]].length; i++) {
    if (digit.includes(board[findStick[0]][i])) {
      digit.splice(digit.indexOf(board[findStick[0]][i]), 1)
    }
  }
  return digit
}


function columnSearch(arrSudoky, findStick, futureVal) {
    let x = findStick[0]
    let y = findStick[1]
    arr = [];
    for (let i = 0; i < arrSudoky.length; i++){
        if (arrSudoky[i][y] !== null) {
                arr.push(arrSudoky[i][y])
        }
    }
    result = futureVal.filter(el => !~arr.indexOf(el));
    return result
}


function searchInSquare (elemArr, sudArr, resultsArr) {
    const topOfSquare = [];
    topOfSquare.push(Math.floor(elemArr[0] / 3) * 3);
    topOfSquare.push(Math.floor(elemArr[1] / 3) * 3);
    for (let i = topOfSquare[1]; i < (topOfSquare[1] + 3); i++) {
        for (let j = topOfSquare[0]; j < (topOfSquare[0] + 3); j++) {
            if (resultsArr.includes(sudArr[j][i])) {
                resultsArr.splice(resultsArr.indexOf(sudArr[j][i]), 1) 
            }   
        }   
    }
    return resultsArr
}


function sudokuReshatel (arrSudoky, sticks){
  let temp = []
  for (let i = 0; i < arrSudoky.length; i++) {
    if(!arrSudoky[i].includes(null)){
      temp.push(true)
    } else {
      temp.push(false)
    }
  }
  if (!temp.includes(false)){
    return arrSudoky
  }


  for(let i = 0; i < sticks.length; i++){
    let resultsOfRow = rowSearch(sticks[i], arrSudoky)
    let resultOfcolumn = columnSearch(arrSudoky, sticks[i], resultsOfRow)
    let results = searchInSquare(sticks[i], arrSudoky, resultOfcolumn)
    if (results.length === 1) {
            arrSudoky[sticks[i][0]][sticks[i][1]] = results[0];
            sticks.splice(i, 1);
         }
  }
  console.table(arrSudoky)
  return sudokuReshatel(arrSudoky, sticks)
}
// console.table(arrSudoky);
console.log(sudokuReshatel(arrSudoky, sticks));