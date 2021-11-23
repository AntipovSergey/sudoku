let text = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89---";
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

function rowSearch(findStick, board) {
  const digit = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 0; i < board[findStick[0]].length; i++) {
    if (digit.includes(board[findStick[0]][i])) {
      digit.splice(digit.indexOf(board[findStick[0]][i]), 1)
    }
  }
  return digit
}

//Поис по вертикали судоку
function columnSearch(arrSudoky, findStick, rowSearch) {
    let x = findStick[0] // 
    let y = findStick[1] // 
    arr = [];
    for (let i = 0; i < arrSudoky.length; i++){
        if (arrSudoky[i][y] !== null) {
                arr.push(arrSudoky[i][y])
        }
    }
    result = futureVal[x].filter(el => !~arr.indexOf(el));
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
    if (resultsArr.length === 1) {
            sudArr[elemArr[0]][elemArr[1]] = resultsArr[0];
        }
    return sudArr
}