const arrBoard = [
  [2, 3, 8, 9, 6, 5, 7, 1, 4],
  [7, 5, 9, 4, 1, 3, 6, 8, 2],
  [4, 1, 6, 2, 7, 8, 9, 5, 3],
  [9, 4, 5, 1, 3, 6, 2, 7, 8],
  [6, 8, 7, 5, 2, 4, 1, 3, 9],
  [3, 2, 1, 8, 9, 7, 4, 6, 5],
  [1, 6, 2, 3, 5, 9, 8, 4, 7],
  [5, 7, 4, 6, 8, 2, 3, 9, 1],
  [8, 9, 3, 7, 4, 1, 5, 2, 6],
]

console.table(arrBoard)


function rowCheck(arrBoard, num, cord) {
  const [x, y] = cord;
  for (let i = 0; i < arrBoard.length; i += 1) {
    for (let v = 0; v < arrBoard[i].length; v += 1) {
      if (arrBoard[x][v]=== num) {
        return false;
      } return true;
    }
  }
}

function culmnCheck(arrBoard, num, cord) {
  const [x, y] = cord;
  for (let i = 0; i < arrBoard.length; i += 1) {
    for (let v = 0; v < arrBoard[i].length; v += 1) {
      if (arrBoard[i][y] === num) {
        return false;
      } else return true;
    }
  }
}

console.table(rowCheck(arrBoard, 3, [0, 1]))
console.table(culmnCheck(arrBoard, 7, [1, 1]))