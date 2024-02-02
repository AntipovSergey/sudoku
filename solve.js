const { num, read } = require('./read')

const solve = function (board) {
  const size = 9;
  const boxSize = 3;

  const findEmpty = (board) => { // Ищем пустые ячейки
    for (let r = 0; r < size; r++) { // При итерации меняется строка
      for (let c = 0; c < size; c++) { // При итерации сдвигаемся влево по строке
        if (board[r][c] === '-') { // Если в ячейке - то, возвращаем эти координаты, они используются на 51 строке в ф-ии solveSudoku(), у нас первая пустая ячейка с координатами [0][1]
          return [r, c];
        }
      }
    }
    return null; // Если там не -, то возвращаем null, который используется на 53 строке
  };

  const validate = (num, pos, board) => {
    const [r, c] = pos; // Деструктуризация pos со значением [0][1]

    // Проверяем строки

    for (let i = 0; i < size; i += 1) {
      if (board[i][c] === num && i !== r) { // проверяем равно ли [0][1] num, т.е. 1 и не равно 0
        return false;
      }
    }

    // Проверяем столбцы

    for (let i = 0; i < size; i += 1) {
      if (board[r][i] === num && i !== c) { // проверяем равно ли [1][0] num, т.е. 1 и не равно 1
        return false;
      }
    }

    // Проверяем блок

    const boxRow = Math.floor(r / boxSize) * boxSize; // присваиваем значение boxRow, если это первая строка, то будет 0
    const BoxCol = Math.floor(c / boxSize) * boxSize; // присваиваем значение boxCol, в нашем случае c равно 1, это видно на 17 строке, получается 0

    for (let i = boxRow; i < boxRow + boxSize; i++) { // если boxRow и boxCol равны 0, то проверяется первый блок, далее идем на 61 строку
      for (j = BoxCol; j < BoxCol + boxSize; j += 1) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }
    return true;
  };

  const solveSudoku = () => {
    const currPos = findEmpty(board); // Принимает координаты из ф-ии findEmpty, передалось значение [0][1]

    if (currPos === null) { // Если в ячейке не -, то ОК
      return true;
    }

    for (let i = 1; i < size + 1; i++) { // В этом цикле происходит перебор от 1 до 9, которые подставляются в ячейку и проверяются в ф-ии validate
      const currNum = i.toString(); // currNum присваивается 1
      const isValid = validate(currNum, currPos, board); // вызываем ф-ию validate с параметрами (num - 1, pos - [0][1] и board) идем на 17 строку

        if (isValid) {
            const [x, y] = currPos; // Деструктуризация currPos
            board[x][y] = currNum; // если isValid вернул true, то присваиваем ячейке, которую получили ф-ии findEmpty, тот num, который прошел проверку isValid

            if (solveSudoku()) { // вызывается solveSudoku пока findEmpty не вернет null, то solveSudoku заканчивает работу
                return true;
            }
            board[x][y] = '-'; // если число не подходит, то записывается -
      }
    }
    return false; // если solveSudoku не может подобрать число, то возвращается false
  }
  solveSudoku(); // ф-ия solve вызывает сначала solveSudoku

  for (let i = 0; i < board.length; i++) { // Преобразование элементов в числа
    for (let j = 0; j < board[i].length; j++) {
      board[i][j] = Number(board[i][j]);
    }
  }
  return board;
};

solve(read(num));

module.exports = { solve };
