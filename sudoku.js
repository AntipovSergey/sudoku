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

for(row = 0; row < board.length;row++) {
for(column = 0; column < board.length[row];column++) {
newString+=board[row][column]
                }
                if (board[row][column] === '-')
                return [row,column]

        }
        return false
}




/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) 

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
