function solve(boardString) {
  let arrOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  for (let i = 0; i < boardString.length; i++) {
    let newArr = []
    for (let j = 0; j < boardString.length; j++)
      if (boardString[i][j] > 0) {
        newArr.push(boardString[i][j])
      } else {
        newArr.push()
        console.log(newArr);
      }
    return newArr
  }
}
console.log(solve([
  [4, 2, 0, 0, 0],
  [2, 3, 4, 0, 1]
]))
