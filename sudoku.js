// Получает заполненый массив из строки
function solve(boardString) {
  // заполняем массив
  const arr = [];
  for (let i = 0; i < 9; i++) {
    arr.push([]);
  }
  let count = 0;
  for (let i = 0; i < boardString.length; i++) {
    arr[count].push(boardString[i]);
    if (arr[count].length === 9) {
      count++
    }
  }
  return arr;
}

// Находит индекс пустой
function findEmpty(arr) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (arr[i][j] == '-') {
        return [i, j]
      }
    }
  }
  return -1
}

// Можно ли подставить число
function validatePosition(num, position, board) {

  const [row, column] = position;

  // Find Row
  for (let i = 0; i < 9; i++) {
    if (board[row][i] == num) return false
  }

  // Find Column
  for (let i = 0; i < 9; i++) {
    if (board[i][column] == num) return false
  }

  // Find Section's
  const boxStartRow = Math.floor(row / 3) * 3;
  const boxStartColumn = Math.floor(column / 3) * 3;
  for (let i = boxStartRow; i < boxStartRow + 3; i++) {
    for (let j = boxStartColumn; j < boxStartColumn + 3; j++) {
      if (board[i][j] == num) return false
    }
  }
  return true
}

function isSolved(board) {

  // Находдим позицию пустой ячейки
  let position = findEmpty(board);

  // Если пустых не осталось, то вернуть Судоку
  if (position == -1) {
    return board;
  }

  // Проверка числа
  for (let i = 1; i < 10; i++) {

    // Есть ли данное число(i) в строке, столбце, ячейке
    let boolean = validatePosition(i, position, board)

    // Если нет такого числа то заменяем пустое место им
    if (boolean) {
      const [a, b] = position;
      board[a][b] = `${i}`;

      // Рекурсией дорешиваем судоку с таким подставлленный числом
      if (isSolved(board)) {
        return board
      }

      // Если он не дорешался, то возващаем на место пустоту и пробуем другое число
      board[a][b] = `-`;
    }
  }

  return false
}

module.exports = {
  solve: solve,
  isSolved: isSolved,
}
