const nineToNine = [
  [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-'
  ],
  [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-'
  ],
  [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-'
  ],
  [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-'
  ],
  [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-'
  ],
  [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-'
  ],
  [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-'
  ],
  [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-'
  ],
  [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-'
  ]
]
console.log(nineToNine.join('\n').replace(/,/g, ' '));
console.log('-----------------')
sodokoSolver(nineToNine);
console.log(nineToNine.join('\n').replace(/,/g, ' '));

function isValid(board, row, col, k) {
  for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
        return false;
      }
  }
  return true;
}


function sodokoSolver(data) {
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (data[i][j] == '-') {
      for (let k = 1; k <= 9; k++) {
        if (isValid(data, i, j, k)) {
          data[i][j] = `${k}`;
        if (sodokoSolver(data)) {
         return true;
        } else {
         data[i][j] = '-';
        }
       }
     }
     return false;
   }
 }
}
return true;
}

let sudokuStr = "---------------------------------------------------------------------------------"


let strToArr = (str) => {
  let total = str.split('')
  let one = total.slice(0,9)
  let two = total.slice(9,18)
  let three = total.slice(18,27)
  let four = total.slice(27,36)
  let five = total.slice(36,45)
  let six = total.slice(45,54)
  let seven = total.slice(54,63)
  let eight = total.slice(63,72)
  let nine = total.slice(72,81)
  let iNeed = []
  iNeed.push(one, two, three, four, five, six, seven, eight, nine)
  return iNeed
}

// console.log(strToArr(sudokuStr))
