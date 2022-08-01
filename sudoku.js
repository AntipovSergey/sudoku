/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 * возвращаем 2мерный массив
 */
function solve(boardString) {
 
  const board = [];
  for (let i = 0; i < boardString.length; i+=9) {  
    let arr = [];
    for (let j = 0; j < 9; j += 1) {
      arr.push(boardString[j+i]);    
    };
    board.push(arr);  
  };
  return board;
}

console.log('20==',solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 * возвращает true or false
 */
function isSolved(board) {
  const set = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //проверка незаполненых полей одной из 9-ти строк
  if (board[i].includes('-')) return false;

//проверяем строки на дубликаты
  for (let i = 0; i < 9; i++) {
    if (board.filter((el, i) => arr.indexOf(el) === i).length == 9);
  };
  //проверяем столбцы на дубликаты
  const column = [];
  

  for (let i = 0; i < 9; i++) {
    if (board.filter((el, i) => arr.indexOf(el) === i).length == 9);
  };

 
  
    
  return true;
  };
  
 

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve. Массив
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку. Оставим реалиазацию на потом
 */
function prettyBoard(board) {

}



// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
