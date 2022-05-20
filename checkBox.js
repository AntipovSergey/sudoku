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
  
  module.exports = checkBox
