let string = '---------------------------------------------------------------------------------'
// let arr = string.split('')

function createArr(string, size) {
  let array = string.split('')
  let newArr = [];
  for (i = 0; i < array.length; i += size) {
    newArr.push(array.slice(i, i + size))
  }
  return newArr
}
console.log(createArr(string, 9))

let superArr = createArr(string, 9)

function isValid(board, row, col, num) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(col / 3) + i % 3;
    if (board[row][i] == num || board[i][col] == num || board[m][n] == num) {
      return false;
    }
  }
  return true;
}


function sodokoSolver(data) {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (data[y][x] == '-') {
        for (let num = 1; num <= 9; num++) {
          if (isValid(data, y, x, num)) {
            data[y][x] = `${num}`;
            if (sodokoSolver(data)) {
              return true;
            } else {
              data[y][x] = '-';
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}

sodokoSolver(superArr);
console.log(superArr);
