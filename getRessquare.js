function getRessquare(myBoard, row, column , num) {
  let newRow = Math.floor(row / 3) * 3
  console.log(newRow);
  let newColumn = Math.floor(column / 3) * 3
  for (let i = 0; i < 3 ; i++) {
    for (let j = 0; j < 3 ; j++) {
      if (myBoard[newRow + i][newColumn + j] === num) {
        return false
       
      }
    }
  }
  return true
}
