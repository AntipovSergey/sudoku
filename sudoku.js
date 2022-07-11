const fs = require('fs');

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
 const size = 9;
 const boxSize = 3;
function solve(boardString) {
  
let puzzles = fs.readFileSync('./puzzles.txt','utf-8').split('\n');
puzzles.filter(function(line){
  return line !='';
});
let puzzleNumber = puzzles[process.argv[2]|| 0];

// console.log(puzzleNumber);


 let massiv = [];
  for(let i =0; i<puzzleNumber.length; i=i+9){
    massiv.push(puzzleNumber.slice(i, i+9).split('').filter((line) => line !== ''));
  }
  return massiv;
 


}
console.log(solve());


const validate = (num, pos, puzzleNumber)=>{
  const[r,c]=pos;

  // 1.Проверка строк
  for(let i =0; i< size; i++){
    if(puzzleNumber[i],[c]===num && i!==r){
      return false;
    }
  }
   // 2.Проверка столбцов
   for(let i =0; i< size; i++){
    if(puzzleNumber[r],[i]===num && i!==c){
      return false;
    }
  }


  // 3.Проверка квадрата из 9 чисел на повторение чисел
  // Сначала вычислим позицию элемента в нашем секторе для строк
  const boxRow = Math.floor(r/boxSize)*boxSize; 
  // Такую же конструкцию повторям и для столбцов
  const boxCol = Math.floor(c/boxSize)*boxSize; 
//  Проверка по всему квадрату на повторение чисел, поэтому делаем два вложенных цикла:
for(let i = boxRow; i<boxRow + boxSize; i++){
  for(let j =boxCol; j<boxCol+ boxSize; j++){
    if(puzzleNumber[i][j]===num && i!==r && j!==c){
      return false;
    }
  }
}
return true;

}






 


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
