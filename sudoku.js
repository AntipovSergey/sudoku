const fs = require('fs');
const colors = require('colors');
// const num = process.argv[2]
// function read(num=0) { 
//   let readText = fs.readFileSync("./puzzles.txt", "utf8").split('\n')
//   let formText = readText[num].split('')
//   let sudokuArr = []
//   for (let i=0; i<formText.length; i += 9) {
//     // sudokuArr.push((formText.slice(i, i + 9))) //для вывода в таблицу
//     const row = formText.slice(i, i + 9);
//     // console.log(row, 'row');
//     // console.log(colors.rainbow(row.join(' '))); // раскраска 
//     sudokuArr.push(row);
//     // sudokuArr.push(chalk.blue(formText.slice(i, i + 9)))
//   }
//   return sudokuArr
// }
// const game = read(num)
// console.table(game)



// function solve(game) {
//   console.log(game[0], 'я из solve')
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции read.
//    * Возвращает игровое поле после попытки его решить.
//    */
// }
// solve(game)

// function isSolved() {
//   /**
//    * Принимает игровое поле в том формате, в котором его вернули из функции solve.
//    * Возвращает булевое значение — решено это игровое поле или нет.
//    */
// }
const board = isSolved() //результат выполнения isSolved
//

function prettyBoard(board) {
  let sudoku = []
  for (let i=0; i<board.length; i++) {
    const row = board[i].slice(0, board.length);
    console.log(colors.rainbow(row.join(' '))); // раскраска 
    sudoku.push(row);
  }

}
prettyBoard(board)




// module.exports = {
//   read,
//   solve,
//   isSolved,
//   prettyBoard
// }