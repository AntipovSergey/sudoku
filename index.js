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

let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
let b = [[num], [num], [num], [num]]

function verCheck (arr) {
  let middle = []
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < arr.length; j++) {
      middle.push(arr[j][i])
      middle.sort()
      middle[i].join()

      if (middle[i] !== num) {
        return false
      }
    }
  }
  return true
}
console.log(verCheck(b));

