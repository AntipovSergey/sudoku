let board = [
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  [1, 1, 1, 2, 2, 2, 3, 3, 3],
  [4, 4, 4, 5, 5, 5, 6, 6, 6],
  [4, 4, 4, 5, 5, 5, 6, 6, 6],
  [4, 4, 4, 5, 5, 5, 6, 6, 6],
  [7, 7, 7, 8, 8, 8, 9, 9, 9],
  [7, 7, 7, 8, 8, 8, 9, 9, 9],
  [7, 7, 7, 8, 8, 8, 9, 9, 9]
];

let rowNum = 0;
let colNum = 0;
const step = 3
const max = step * 2

const resultArray = [];

for ( let i = rowNum; i < rowNum + step; i++) {

  for (let j = colNum; j < colNum + step; j++) {
    resultArray.push(board[i][j]);

    if ((i === (rowNum + step -1)) && (j === (colNum + step-1))) {
      console.log('check', rowNum, max);
      
        if (j === (max+step-1)) {
          console.log(1);
          rowNum += step
          colNum = 0
        // if (rowNum !== max+step-1) break

        } else {
          console.log(2);
          colNum += step
          rowNum = 0
        }
      
    }
  }

}

console.log(resultArray);






























//let col;


// if (col < 3) {
//   colNum = 0;
// } else if (col < 6) {
//   colNum = 3;
// } else {
//   colNum = 6;
// }
