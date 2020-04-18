let a = [
 ['1', '3', '5', '8', '4', '2','9', '7', '1'],
 ['2', '9', '2', '1', '7', '6','4', '6', '5'],
 ['2', '3','1', '4', '3', '4', '8', '1', '9'],
 ['5', '1', '9','9', '4', '7', '3', '4', '6'],
 ['7', '6', '2', '9','8', '3', '4', '9', '2'],
 ['6', '2', '4', '4', '6','1', '4', '5', '6'],
 ['8', '4', '7', '6', '6', '2','6', '3', '6'],
 ['4', '3', '5', '8', '2', '2', '5','3', '1'],
 ['6', '1', '2', '3','7', '8', '9', '7', '7']
];

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


