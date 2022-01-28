
// const sudoku = [
//   [0, 9, 4, 0, 0, 0, 8, 3, 0],
//   [0, 0, 2, 3, 0, 6, 7, 4, 0],
//   [0, 5, 7, 2, 8, 0, 1, 0, 0],
//   [2, 0, 0, 4, 0, 0, 0, 0, 0],
//   [5, 0, 1, 7, 6, 0, 4, 2, 9],
//   [0, 0, 0, 9, 2, 8, 0, 6, 0],
//   [1, 3, 0, 0, 0, 0, 9, 8, 0],
//   [0, 4, 6, 8, 3, 1, 0, 5, 0],
//   [0, 0, 8, 0, 0, 0, 0, 0, 0]
// ];

function checkNum(y, x, array) {
  let entryNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
  //let arr =[]
  for (let i = 0; i < array.length; i++) {
    entryNum.push(array[i][x])
    entryNum.push(array[y][i])
  }
  let cubX = Math.floor((x / 3)) * 3
  let cubY = Math.floor((y / 3)) * 3
  for (let i = cubY; i < (cubY + 3); i++) {
    for (let j = cubX; j < (cubX + 3); j++) {
      entryNum.push(array[i][j])
    }
  }
  //console.log(entryNum)
  return entryNum.filter(el => entryNum.indexOf(el) === entryNum.lastIndexOf(el))
}
//console.log(checkNum(5,6, sudoku))

module.exports = {
  checkNum,
}
