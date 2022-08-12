/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
 function solve(board) {
  const size = 9;
  const boxSize = 3;
  const findEmpty = (board) => {        // создаём рекурсивную функцию
    for (let r = 0; r < size; r += 1) {   // нам необходимо найти свободный элемент, который не заполнен числом
      for (let c = 0; c < size; c += 1) { /* и попробовать подставлять числа и 
      при каждой подстановке проверять валидно ли для борда.  Тут итерируемся по строкам r = строка, с - колонка */
        if (board[r][c] === '-') { /**если строка и колонка пустой элемент, то возвращаем массив, где будет показаны текущая строка и колонка*/
          return [r, c];
        }
      }
    }
    return null; /**если вдруг нет свободных ячеек, то возвращаем null */
  };
  const validate = (num, pus, board) => {
    const [r, c] = pus;

    // проверяем строки
    for (let i = 0; i < size; i += 1) {   /**если элемент который хранится равен num, то будем возвращать false*/
      if (board[i][c] === num && i !== r) {  /**тут исключение для проверки строк */
        return false;
      }
    }
    // проверка колонки
    for (let i = 0; i < size; i += 1) {  /** тут исключение для проверки колонок*/
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }
    // проверка маленького квадрата
    const boxRow = Math.floor(r / boxSize) * boxSize;    /** для начала вычисляем позицию начального элемента в строке (округляется для до круглого в мепньшую сторону*/
    const boxCol = Math.floor(c / boxSize) * boxSize;    /** для начала вычисляем позицию начального элемента в колонке (получаем в какой колонке начинается наш сектор*/
    for (let i = boxRow; i < boxRow + boxSize; i += 1) {  /**проверка по всему сектору */
      for (let j = boxCol; j < boxCol + boxSize; j += 1) {  /** делаем 2 вложенных цикла */
        if (board[i][j] === num && i !== r && j !== c) {  /** проверяем текущую позицию */
          return false;
        }
      }
    }
    return true;  /** если прошли все проверки, по строке, по колонке и квадрату, то возвращаем - true */
  };



  const solve = () => {
    const currPos = findEmpty(board);
    if (currPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i += 1) {
      const currNum = i.toString(); /**здесь нам возвращается число, но нам нужно привести его к числу. */
      const isValid = validate(currNum, currPos, board);
      if (isValid) {   /** */
        const [x, y] = currPos;
        board[x][y] = currNum;
        if (solve()) {  /**рекурсивная функция, которая порешает нам оставшийся борд с текущим сurrNum,который 
        мы подставили и попробует решить весь оставшийся борд. */
          return true;
        }
        board[x][y] = '-';
      }
    }
    return false; /**если вернёт false, то значит решение не получилось и он пройдет еще раз по циклу.*/
  };
  solve();
  return board;
}
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '-') {
        return false;
      }
    }
  }
  return true;
}
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard() {
  return ('Ты молодец :partying_face:');
}
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};