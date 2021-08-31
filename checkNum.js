const arrtest = [
  ['-', 3, '-', 6, 8, '-', 5, 4, '-'],
  ['-', 6, 9, '-', 5, 4, '-', '-', 3],
  ['-', 4, '-', 7, 1, '-', '-', 9, 2],
  [6, 1, 2, '-', '-', '-', '-', 9, 2],
  [4, 8, 3, '-', 9, '-', 2, '-', 5],
  ['-', '-', '-', '-', '-', 6, '-', 7, 4],
  [7, '-', 6, '-', '-', '-', 9, '-', '-'],
  ['-', 9, '-', 8, 6, 5, '-', 2, 7],
  ['-', 5, 4, 9, '-', 2, 3, 1, '-'],
];

const arrIndextest = [5, 0];
const numtest = 9;

function checkNum(arr, arrIndex, num) {
  const [s, p] = arrIndex;

  for (let j = 0; j < 9; j++) {
    if (num === arr[s][j]) return false;
  }

  for (let i = 0; i < 9; i++) {
    if (num === arr[i][p]) return false;
  }

  const obj = {
    0: 0, 1: 0, 2: 0, 3: 3, 4: 3, 5: 3, 6: 6, 7: 6, 8: 6,
  };
  const str = obj[s];
  const pos = obj[p]; // pos - position

  for (let l = pos; l < pos + 3; l++) {
    if (num === arr[str][l]) return false;
  }
  for (let l = pos; l < pos + 3; l++) {
    if (num === arr[str + 1][l]) return false;
  }
  for (let l = pos; l < pos + 3; l++) {
    if (num === arr[str + 2][l]) return false;
  }

  return true;
}

console.log(checkNum(arrtest, arrIndextest, numtest));
