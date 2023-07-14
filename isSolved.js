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


function Check(arrBoard, num, cord) {
  const [x, y] = cord;
  for (let i = 0; i < arrBoard.length; i += 1) {
      if (Number(arrBoard[x][i]) === num) {
        return false;
      } else return true;
    }
  for (let j = 0; j < arrBoard.length; j += 1) {
      if (Number(arrBoard[j][y]) === num) {
        return false;
      } else return true;
    }
  }

// function culmnCheck(arrBoard, num, cord) {
//   const [x, y] = cord;
//   for (let i = 0; i < arrBoard.length; i += 1) {
//     for (let v = 0; v < arrBoard[i].length; v += 1) {
//       if (Number(arrBoard[v][y]) === num) {
//         return false;
//       } else return true;
//     }
//   }
// }

// console.table(Check(arrBoard, 3, [1, 0]))