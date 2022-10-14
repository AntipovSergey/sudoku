let fs = require('fs')
let boardString = fs.readFileSync("./puzzles.txt","utf-8") 
let firstSudokuString = reader(boardString)


function reader(boardString){ //  функция, преобразующая текстовый файл в массив с подмассивами
  let firstBoard = boardString.split('\n')
  let str = firstBoard[0]
  let arr = [];
  for(let i = 0;i < str.length; i=i+9){
    let row = [];
    for (let j = i; j < i+9; j++){
      row.push(str[j])
    }
    arr.push(row)
      
    
  }
  return arr;

}
const findEmptyCell = (boardString) => {
  // проходимся по каждому элементу
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      // проверяем пустая ли клетка в массиве
      if (firstSudokuString[row][col] === '-') {
        // если пустая, то возвращаем её индекс
        return [row, col];
      }
    }
    // иначе все клетки заполнены
    return 'All cells is full';
  }
};
console.log(findEmptyCell(firstSudokuString))

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */


function solve(boardString) {
  
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


