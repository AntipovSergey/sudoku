/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  // функция проверяет, пустая ли ячейка
  function getDash(boardString) {
    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        if (boardString[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return null;
  }
  // проверяет валидность чисел в таблице
  function validation(number, position, boardString) {
    const [r, c] = position;

    // Проверяем строки
    for (let i = 0; i < 9; i++) {
      if (boardString[i][c] === number && i !== r) {
        return false;
      }
    }
    // Проверка столбцов
    for (let i = 0; i < 9; i++) {
      if (boardString[r][i] === number && i !== c) {
        return false;
      }
    }
    // вычисляем границы внутренних блоков
    const boxR = Math.floor(r / 3) * 3;
    const boxC = Math.floor(c / 3) * 3;
    for (let i = boxR; i < boxR + 3; i++) {
      for (let j = boxC; j < boxC + 3; j++) {
        if (boardString[i][j] === number && i !== r && i !== c) {
          return false;
        }
      }
    }
    return true;
  }
  function resultSolve() {
    const currentPosition = getDash(boardString);

    if (currentPosition === null) {
        return true;
    }
    for (let i = 1; i < 10; i++) {
        const currentNumber = i.toString();
        const isValid = validation(currentNumber, currentPosition, boardString);
        if (isValid) {
            const [x,y] = currentPosition;
            boardString[x][y] = currentNumber;

            if(resultSolve()) {
                return true;
            }

            boardString[x][y] = '-';
        }
    }

    return false;
}

    resultSolve();
    return boardString;
  }


  /**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved (){

}



/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
// const board1 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function prettyBoard(boardString) {
  const parts = boardString.split(/(.{9})/).filter((O) => O);
  const result = parts.map((item) => item.split(''));
  const arr = `${[...result[0]]}\n${[...result[1]]}\n${[...result[2]]}\n${[...result[3]]}\n${[...result[4]]}\n${[...result[5]]}\n${[...result[6]]}\n${[...result[7]]}\n${[...result[8]]}`;
  const newresult = arr.replace(/[\,%]/g, ' ');
  return newresult;
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
