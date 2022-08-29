
// Функция 123
function solve(boardString) {
  let arr = boardString.split('')
  let sudokuBoard = []
   for (let i = 0; i < arr.length; i += 9) {
        sudokuBoard.push(arr.slice(i, i+9))
   }
  return sudokuBoard


}
solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')
console.log('123')

function horizontalCheck (arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      // console.log(`Номер столба ${i} ==> ${arr[j][i]}`)
      if (arr[i][j] === arr[j][i]) {
        console.log('Есть совпадение')
      } else {
        console.log('Совпадений нет')
      }  
    }

  }
  console.log(console.table(arr))
};


horizontalCheck(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))