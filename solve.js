// В этом файле boardString отображается в формате, удобном для восприятия.
function solve(boardString) {
  let arr = boardString.split('')
  let sudokuBoard = []
   for (let i = 0; i < arr.length; i += 9) {
        sudokuBoard.push(arr.slice(i, i+9))
   }
  


  console.log(console.table(sudokuBoard))


}
solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')
module.exports = solve;