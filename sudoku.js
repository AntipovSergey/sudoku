
const solve = (boardString) => {
// Создаем доску
  const board = [];
  // console.log(boardString);
  for (let i = 0; i < 9; i++) {
    board.push(
      boardString.slice(i * 9, i * 9 + 9)
        .split('')
        .map((el) => {
          if (el === '-') {
            return '.';
          } return el;
        }),
    );
  }
  // Задаем размер поля
  const size = 9;
  // Задаем размер поля 3х3
  const boxSize = 3;
  // Ищем пустые клетки и меняем их на точки
  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '.') {
          return [r, c];
        }
      }
    }
    return null;
  };
// Встречается ли это число в после

  const validate = (num, pos, board) => {
    const [r, c] = pos;


    // Проверяем строки 
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // Проверяем колонны
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // Проверяем 3х3 квадрат 
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };
// Заполняем судоку
  const fillSudoku = () => {
    const currPos = findEmpty(board);

    if (currPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);
      if (isValid) {
        const [a, b] = currPos;
        board[a][b] = currNum;

        if (fillSudoku()) {
          return true;
        }

        board[a][b] = '.';
      }
    }
    return false;
  }
  fillSudoku();
  return board;
}


// проверка на number 
function isSolved(fun) {
  const arr = fun.flat()
  for ( let i = 0; i < arr.length; i++ ) { 
    if (Number(arr[i])) {
      return true;
    }
    else {
      return false;
    }
  }
}

// функуция "красиво" 
function prettyBoard(sol) {
  let array = sol.join("\n") 
  let newArr = [];
  for ( i = 0; i < array.length; i++) {
    if ( array[i] !== ",") {
    newArr.push(array[i]);
    }
  }
  let array2 = newArr.join(" ");
  return ` ${array2}`;
}



// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
