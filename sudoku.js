/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const size = 9;
  const boardArre = [];
  const newArre = boardString.split('')
  for (let i = 0; i < newArre.length; i += size){
    boardArre.push(newArre.slice(i,i+size))
    }
    return boardArre
  }


console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function findEmpty(board) {
// let horizontalLine = (board) => {
// let result = false
// board.forEach(element => {
// let item = element.join('')
// if(item.includes('-'))
// {result = true}}
// )
// return result
// }
for(row = 0; row < board.length;row++) {
for(column = 0; column < board.length[row];column++) {
newString+=board[row][column]
                }
                if (board[row][column] === '-')
                return [row,column]

        }
        return false
}
console.log(findEmpty())


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) 
// клеток 9х9 из цифр от 1 до 9
// обьявляем массив цифр от 1 до 9
// в шахматах они не перебираются, все на одном месте. Тут нужно учитывать то что они перебираются в случайном порядке и не могут повторяться по рядам и столбцам. 

// Цель цикла: перебрать масив так чтобы он случайным образом перебирал цифры и пустые ячейки, таким образом чтобы они не повторялись по рядам и по столбцам.
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
