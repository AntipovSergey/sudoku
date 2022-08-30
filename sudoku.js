// в solve(board) -
// 1. найти пустую ячейку 
// 2. подставить число и провести проверку
// 3. вернуть решеный борд

//isSolved(board, который вернулся из ф-ции solve)


/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  const fs = require('fs');
  let sudokuBaza = fs.readFileSync('./puzzles.txt', 'utf-8');
  sudokuBaza = sudokuBaza.split('\n')

  //и нужно продумать нейминг переменных, чтобы по имени переменной сразу было ясно "что в ней лежит"
  const findEmptyCell = () => {
    for (let index = 0; index <= 2; index++) { // перебираем массив из нерешенных судоку

      let boradsudoku = prettyBoard(sudokuBaza[index]);

      for (let row = 0; row < boradsudoku.length; row++) {
        for (let col = 0; col < boradsudoku.length; col++) {
          // чтобы было меньше шансов ощибиться, нужно вынести функцию нахождения пустой ячейки отдельно и 
          //возвращать из нее индексы пустой ячейки, чтобы затем подставлять в них числа
          if (boradsudoku[row][col] === '-') {
            return [row, col];
          }
        }
        //если пустая ячейка не найдена вернет undefined
        return undefined;
      }
    }
  }

  const checkBoard = (emptyCellPosition, board) => { // board передаем как двумерный массив
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9] // перенесла из ф-ции валидации

    const [row, column] = emptyCellPosition;

    //Проверка строк
    for (let currNum = 1; currNum <= numbers.length; currNum++) { //перебираем числа и поочередно их подставляем
      for (let i = 0; i < board.length; i++) {
        if (board[i][column] === currNum && i !== row) {
          return false;
        }
      }
      //Тоже самое с колонками
      for (let currNum = 1; currNum <= numbers.length; currNum++) { //перебираем числа и поочередно их подставляем
        for (let i = 0; i < board.length; i++) {
          if (board[row][i] === currNum && i !== column) {
            return false;
          }
        }
      }
      //Еще нужна проверка ячейки

      return true //вернут true ели все проверки пройдены

    }
    // нужно вернуть заполненный двумерный массив в конце выполнения ф-ции
  }


}
console.log(solve())
checkBoard(findEmptyCell(), prettyBoard(sudokuBaza[index])

// sudokuBaza.forEach((sudoku, sudokuIndex) => {

// let strings = []
// let columns = []
// for (let index = 0; index < sudoku.length; index += 9) {
// let myColumns = ''
// let myString = strings.push(sudoku.slice(index, index +9));
// for (let i = 0; i < sudoku.length; i += 9) {
// myColumns += sudoku[i]
// }
// // columns.push(myColumns) 

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
    let sudokuBoard = [];
    let i = 0;
    while (i < board.length) {
      const row = board.substring(i, i + 9);
      sudokuBoard.push(Array.from(row));
      i += 9;
    }
    return sudokuBoard;
  }
// [[0,1,2,3,4,5,6,7,8], [9,10,11,12,13,14,15,16,17]]

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
    solve,
    isSolved,
    prettyBoard,
  };
