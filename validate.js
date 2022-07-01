function validate(num, pos, board) { //функция принимает на вход: цифру от 1 до 9 для заполнения таблицы, результат поиска координат пустой ячейки, исходную таблицу
  const size = 9;
  const boxSize = 3;
  const [r, c] = pos;

  for (let i = 0; i < size; i++) {     // проверям все строки кроме текущей
    if (board[i][c] === num && i !== r) {
      return false;
    }
  }

  for (let i = 0; i < size; i++) { // проверяем все колонки кроме текущей
    if (board[r][i] === num && i !== c) {
      return false;
    }
  }

  const boxRow = Math.floor(r / boxSize) * boxSize; // находим начало сектора (верхнюю левую ячейку)-в какой строке начинается наш сектор
  const boxCol = Math.floor(c / boxSize) * boxSize; //в какой колонке начинается наш сектор

  for (let i = boxRow; i < boxRow + boxSize; i++) { // проходим по всему сектору, 
    for (let j = boxCol; j < boxCol + boxSize; j++) {
      if (board[i][j] === num && i !== r && j !== c) { // проверяем все элементы кроме текущего, который вставляем
        return false;
      }
    }
  }

  return true; // если наше число прошло 3 проверки, то борд будет валидным
}

module.exports = {
  validate,
}
