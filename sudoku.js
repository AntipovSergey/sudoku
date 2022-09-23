// находим пустую клетку
const findEmptyCell = (boardArray) => {
  // бежим по каждому элементу
  for (let r = 0; r < len; r++) {
    for (let c = 0; c < len; c++) {
      // проверяем является ли клетка пустой
      if (boardArray[r][c] === '-') {
        // возвращаем ее индекс, если она пустая
        return [r, c];
      }
    }
    // в противном случае все клетки заполнены
    return 'No empty cells left';
  }
};

const findCorrectNumbers = (boardArray) => {
  // ищем пустую клетку
  const cellPosition = findEmptyCell(boardArray);

  // если пустых клеток не осталось выходим из цикла/функции
  if (typeof cellPosition === 'string') {
    // поле судоку полностью заполнено
    return boardArray;
  }

  
  const [r, c] = cellPosition;
  
  // определяем длину массива (9)
  const len = boardArray.length;

  // находим число, которое можно подставить
  // на каждой итерации пробуем подставить новое значение (от 1 до 9)
  for (let i = 1; i < len + 1; i++) {
    const number = i;
    // подставляем новое значение в пустую клетку
    boardArray[r][c] = number;

    // проверяем отвечает ли таким образом заполненное поле всем условиям
    const validation = isSolved(boardArray);

    if (validation) {
      // если проверки проходят, оставляем
      break;
    } else {
      // если проверки не проходят, оставляем пустой клеткой
      boardArray[r][c] = '-';
    }
  }

  return findCorrectNumbers(boardArray);
};

/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  // преобразуем поле из строки в двумерный массив со строковыми значениями
  const boardArray = boardString;
  // TODO

  const solvedSudoku = findCorrectNumbers(boardArray);
  return solvedSudoku;
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
