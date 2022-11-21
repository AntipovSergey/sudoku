/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */


const boardString = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
function solve(boardString) {
  const board = [];
  for (let i = 0; i < boardString.length; i += 9) {
    board.push(boardString.slice(i, i + 9).split(''));
  }
}



  // return board;


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  let dict = {}
  let numArr  = board.split('')
  for (let i = 0; i < numArr.length; i++){
    if (numArr[i] === '-'){
      return false
    }
      if (!(+numArr[i] in dict)){
        dict[Number(numArr[i])] = 1
    }else{
      dict[Number(numArr[i])] += 1
    }
  }
  
  return Object.values(dict).every( el => el === 9)
}
console.log(isSolved('123456789123456789123456789123456789123456789123456789123456789123456789123456789'))
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
