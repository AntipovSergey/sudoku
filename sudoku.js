/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  return board
    .match(/[\d-]{9}/g)
    .map((el) => el.split("").join(" "))
    .join("\n");
}

// Парсинг доски
function parseBoard(line) {
  return line
    .match(/[\d-]{9}/g)
    .map((el) => el.split("").map((el) => (el === "-" ? null : Number(el))));
}

// Разбиение общего файла на строки судок
function splitBoards(fileData) {
  return fileData
    .trim()
    .split("\n")
    .map((el) => el.trim());
}

// Проверка валидности доски
function validate(board) {

  function isValidRow(board){
    for (let i = 0 ; i< board.length; i++ ){
      const set = new Set();
      for(let j =0; j < board[i].length; j++){
        const cell = board[i][j];
        if (cell === null) continue;
        if (set.has(cell)) return false; 
        set.add(cell)
      } 
    }
  }

  function isValidColumn(board){
    for(i = 0; i< board.length; i++){
      const set = new Set();
      for (j=0; j< board[i].length; j++){
        const cell= board[j][i]; 
        if (cell === null) continue;
        if (set.has(cell))return false;
        set.add(cell)
      }
    }
  }
  
  
  function isValidBox(board){
      for(i = 0; i < 3; i++){
        for(j= 0; j < 3; j++){
          const set = new Set(); 
          for(let k = 0 ; k< 3; k++){
            for(let l = 0; l<3; l++){
              const cell = board[i*3 +k][j *3 +l]
              if(cell ===null) continue; 
              if(set.has(cell))return false; 
              set.add(cell); 
            }
          }
        }
      }
    }
  
  }
  return true
}


// Экспортировать функции для использования в другом файле (например, readAndSolve.js).

module.exports = {
  solve,
  isSolved,
  prettyBoard,
  parseBoard,
  splitBoards,
  validate,
};
