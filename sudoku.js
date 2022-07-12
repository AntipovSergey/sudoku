/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 
 */   

//! 1 BoardArray - Асланбек
//! 2  findEmpty - Фариза
//! 3 Секции - Антон
//? 4 Сравнение по горизонтали - Влад
//? 5 Сравнение по вертикали - Влад ?
//? 6 Сравнение в секции - Антон
//! 7 Вставка числа через цикл - Фариза
//! 8 Откат на позицию назад - Антон
//! 9 isSolved - Асланбек
//! 10 pretyBoard


/////////////////////////////////////////////////////////////////////////////////////////////////
// Валидация игрового поля

function isValidBoard (number, position, board) { // принимаем число, позицию и борд (инпут)
  const [r, c] = position; // получаем ROW и COL из Position с помощью деструктуризации

  // теперь нужно написать три проверки: число встречается единожды в строке, в колонке и в блоке

  // проверка по строкам

  for (let i = 0; i < size; i++) { // выше необходимо объявить переменную size (размер поля).
    if (board[i][c] === number && i !== r) { // пров. все стр по фикс. кол, кроме тек. ячейки
      return false; // если элемент в ячейке равен number, возвращаем фолс, так как необходимо,
    }               // чтобы все элементы в колонке были уникальны.
  }

  // проверка по колонкам

  for (let i = 0; i < size; i++) {
    if (board[r][i] === number && i !== c) { // пров. все кол. по фиксированной строке, кроме тек.яч
      return false;
    }
  }

  // проверка внутри блока
  // выше необходимо определить переменную blockSize - размер внутреннего блока (3, например)
  const blockRow = Math.floor(r / blockSize) * blockSize; // см, в какой стр нач наш блок(верх\лево)
  const blockCol = Math.floor(с / blockSize) * blockSize; // см, в какой кол нач наш блок

  for (let i = blockRow; i < blockRow + blockSize; i++) { // проходимся по стр всего блока
    for (let j = blockCol; j < blockCol + blockSize; j++) { // проходимся по кол всего блока
      if (board[i][j] === number && i !== r && j !== c) { // см тек поз: если она === number (но кроме самой проверяемой ячейки)
        return false; // то возвращаем фолс. Значит, ряд не уникален.
      }
    }
  }

  return true; // пров-ое число прошло все пров-ки. Если его встав в тек поз-ию, борд будет валидным
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function sectoin(cect, row, col) {

  for (let i = Math.floor(row/3)*3; i < Math.floor(row/3)*3 + 3; i++) {
    for (let j = Math.floor(col/3)*3; j < Math.floor(col/3)*3 + 3; j++) {
      for (let i = 1; i <= 9; i++) {
        const num = i;
        if (cect[i][j] === num && i !==row && j!== col) return false;
      }
    }
  }
}

const puzzles = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function boardArray(str, length) {
  const puzzlesArr = [];
  for (let i = 0; i < str.length; i++) {
    puzzlesArr.push(str[i]);
  }

  const newArr = [];

  for (let i = 0; i < puzzlesArr.length; i += length) {
    const targetArr = puzzlesArr.slice(i, i + length);
    newArr.push(targetArr);
  }
  return newArr;
}
console.log(boardArray(puzzles, 9));

function findDash (arr) {
for(let z=0; z<arr.length; z++) {
  for (let j=0; j<arr[z].length; j++) {
 if(arr[z][j]==="-") {
   return [z,j];
 }
  }
}
return null;
}






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
