// make quadratic array from string
function f0(boardString) {
  let s = -1;
  return new Array(9).fill(new Array(9).fill(0)).map((item) => item.map(() => boardString[++s]));
}

// fills digit instead '-'
function f1(arr) {
  for (let i = 0; i < 9; i += 1) {
    for (let j = 0; j < 9; j += 1) {
      let concidence = [];
      if (arr[i][j] === '-') {
        concidence = f4(f3(i, j, arr), f2(i, j, arr));
      }
      if (concidence.length === 1) {
        arr[i][j] = concidence[0].toString();
      }
    }
  }
  return arr;
}

// search in row and column
function f2(i, j, arr0) {
  const arr = [...arr0[i]].concat(new Array(9).fill(0).map((item, index) => arr0[index][j]));
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item) => !arr.includes(item.toString()));
}

// search in quadrant 3x3
function f3(row, col, arr) {
  const result = [];
  const leftCol = Math.floor(col / 3) * 3;
  const topRow = Math.floor(row / 3) * 3;
  for (let i = topRow; i < topRow + 3; i += 1) {
    for (let j = leftCol; j < leftCol + 3; j += 1) {
      if (arr[i][j] !== '-') {
        result.push(+arr[i][j]);
      }
    }
  }
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].filter((item) => !result.includes(item));
}

// search coincidence in f2() and f3()
function f4(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

// return count of simbol '-'
function f5(arr) {
  return arr.reduce((accum, item) => accum + item.reduce((acc, elem) => (elem === '-' ? acc + 1 : acc), 0), 0);
}

// starts function f1 for every simbol '-'
function solve(boardString) {
  const arr = f0(boardString);
  let count = f5(arr);
  while (count > 0) {
    f1(arr, count);
    count -= 1;
  }
  return arr;
}

// checks if array contain simbol '-'
function isSolved(board) {
  return !f5(board);
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  f0,
  f1,
  f2,
  f3,
  f4,
  f5,
};
