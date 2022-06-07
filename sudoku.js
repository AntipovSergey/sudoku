function prettyBoard(board) {
  return board.map((el) => el.join(' ')).join(' \n');
}

let solve = function (str) {
 
  let board = [];
  let str2 = str.split('');
  while (str2.length > 0) {
    board.push(str2.splice(0, 9));
  }
 
  //задаем длину строки 
  const width = 9;

  //задаем размер бокса
  const box = 3;

  //находим все координаты назаполненных ячеек, возвращает массив где есть координаты строки и колонки
  const findEmpty = (board) => {
    for (let row = 0; row < width; row++) {
      for (let col = 0; col < width; col++) {
        if (board[row][col] === '-') {
          return [row, col];
        }
      }
    }
    // если заполнено все 
    return "Все заполнено правильно!"
  }
  // проверка на то какое число можно подставить
  const validate = (number, position, board) => {
    const [row, col] = position;
    //check Rows 
    for (let i = 0; i < width; i++) {
      if (board[i][col] === number && i != row) {
        return false;
      }
    }

    //check Cols
    for (let i = 0; i < width; i++) {
      if (board[row][i] === number && i != col) {
        return false;
      }
    }
    // вычисляем позицию левого верхнего элемента в боксе 
    const boxRow = Math.floor(row / box) * box;
    const boxCol = Math.floor(col / box) * box;
    // проверка по сектору 3х3
    for (let i = boxRow; i < boxRow + box; i++) {
      for (let j = boxCol; j < boxCol + box; j++) {
        if (board[i][j] === number && i != row && j != col) {
          return false;
        }
      }
    }

    return true;
  }

  // рекурсивная функция 
  const solving = () => {
    const currPos = findEmpty(board); //вызов
    // если 
    if (currPos === "Все заполнено правильно!") {
      return true;
    }
    // перебор подходящих чисел для подстановки в незаполненные ячейки
    for (let i = 1; i < width + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board); //вызов
      // если true
      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        //запускаем рекурсию если все числа правильно подставились то все хорошо, если венет false и решение не получислось
        if (solving()) { //вызов
          return true;
        }

        board[x][y] = '-';

      }
    }
    return false;
  }

  solving();
  return board;
}

function isSolved(board){
  let board2 = board.flat(Infinity)
  for(let i = 0; i < board2.length; i++){
    if(board[i] === '-'){
      return false
    }
  }
  return true
}


module.exports = {
  
  solve,
  prettyBoard,
  isSolved

};
