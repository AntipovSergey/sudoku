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


