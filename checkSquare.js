const array = [
  ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
  ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
  ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
  ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
  ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
  ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
  ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
  ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
  ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
];

const checkSquare = (arr, num, row, column) => {
  const startR = Math.floor(row / 3) * 3;
  const startC = Math.floor(column / 3) * 3;
  console.log('START', startR, startC);
  const resMain = [];
  let resSub = [];
  for (let i = startR; i < startR + 3; i += 1) {
    resSub = [];
    for (let j = startC; j < startC + 3; j += 1) {
      resSub.push(arr[i][j]);
    }
    resMain.push(resSub);
  }
  return resMain;
};

console.table(checkSquare(array, '4', 1, 8));
