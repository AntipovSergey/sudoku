let str = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

let board = []
for (let j=0;j<str.length;j+=9) {
  let arr = []
  for (let i = j;i<j+9;i++) {
    arr.push(str[i])
  }
  board.push(arr)
}

function solver() {
  let emptyPos = checkEmpty(board) 
  if (!emptyPos) {
    return true
  }
  for (let j=1;j<=9;j++) {
    if (validator(board,emptyPos,j.toString())) {
      board[emptyPos[0]][emptyPos[1]] = j.toString()
      if (solver()) {
        return true
      }
      board[emptyPos[0]][emptyPos[1]] = '-'
    }
  }
  return false
}
solver()
function validator(board,emptyPos,num) {
  return checkRows() && checkCols() && checkBox() // ?
}
function checkEmpty() {
  // ????
}

function checkBox(board,emptyPos,num) {
  let result = true
  const boxRow = Math.floor( emptyPos[0]/3 ) * 3;
  const boxCol = Math.floor( emptyPos[1]/3 ) * 3;
  for (let i = boxRow; i < boxRow + 3; i++) {
      for (let j = boxCol; j < boxCol + 3; j++) {
          if (board[i][j] === num && i !== emptyPos[0] && j !== emptyPos[1]) {
              result = false
          }
      }
  }
  return result
}
