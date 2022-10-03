/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
   let newBoardStrring = boardString.split('')
   let arr =[];
   for (let i = 0; i < newBoardStrring.length; i+=9) {
    let n = newBoardStrring.slice(i,i+9);
    arr.push(n)
    
   }
  
    
  
   for (let i = 0; i < arr.length; i++) {
       for (let j = 0; j < arr[i].length; j++) {
        const randNum= Math.round(Math.random()* (9 - 1) + 1);
        if(arr[i][j]==='-' ){
          arr[i][j]=randNum
        }
       }
    
   }
   
   //return arr.join('\n').replaceAll(',',' ')
   return arr
   
   

}
console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

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
