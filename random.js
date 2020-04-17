function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let a = '1-58-2---';
let sudoku = a.split('')
function solve (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '-') {
      arr.splice(i, 1, getRandomIntInclusive(1, 9) + '')
    }
  }
  return arr
}
console.log(solve(sudoku))
