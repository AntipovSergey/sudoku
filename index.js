// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// let a = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
// let sudoku = a.split('')
// function solve (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '-') {
//       arr.splice(i, 1, getRandomIntInclusive(1, 9) + '')
//     }
//   }
//   return arr
// }

// console.log(solve(sudoku))

let b = [
  ['1', '7', '5', '8', '7', '2', '6', '5', '3'], ['8',
  '9', '7', '9', '7', '6', '4', '7', '5'], ['2', '4',
  '8', '4', '7', '5', '8', '1', '9'], ['2', '1', '9',
  '3', '6', '7', '3', '2', '6'], ['7', '6', '2', '7',
  '8', '3', '7', '9', '4'], ['8', '2', '6', '8', '6',
  '1', '9', '5', '9'], ['8', '9', '7', '6', '6', '5',
  '4', '3', '6'], ['4', '3', '3', '8', '2', '8', '5',
  '6', '1'], ['6', '7', '8', '3', '4', '8', '9', '1',
  '6']
]

function verCheck (arr) {
  let middle = []
  // let index_main = 0
  for (let i = 0; i < 1; i++) {
    for (let j = 1; i < arr.length; j++) {
      middle.push(arr[j][i])
      console.log(middle);
      
    }
  }
}
console.log(verCheck(b));
