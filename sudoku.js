// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// Принимает доску как строку в формате
// вы видите в файле головоломки. Возврат
// что-то, представляющее доску после
// ваш решатель пытался решить эту проблему.
// Как вы представляете свою доску, зависит от вас!



function solve(boardString) {
  const size = 9
  const boxSize = 3

  const findEmpty = (boardString) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (boardString[r][c] === '.') {
          return [r, c];
        }
      }
  }
  return null;
}

  const validate = (num, pos, boardString) => {
    const [r, c] = pos;

    //Проверка строк
    for (let i = 0; i < size; i++) {
      if (boardString[i][c] === num && i !== r) {
        return false;
      }
    }

        //Проверка столбцов
    for (let i = 0; i < size; i++) {
      if (boardString[r][i] === num && i !== c) {
        return false;
      }
    }

    //Проверка внутренних квадратов
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (boardString[i][j] === num && i !== r && i !== c) {
          return false;
        }
      }
    }
    return true;
  }

  const resolve = () => {
    const currPos = findEmpty(boardString);

    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, boardString);

      if (isValid) {
        const [x, y] = currPos;
        boardString[x][y] = currNum;
        
        if (resolve()) {
          return true;
        }
        
        boardString[x][y] = '.';
      }
    }
    return false;
  }
  resolve();
  return boardString;
}










// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// Возвращает логическое значение, указывающее,
// или нет решена предоставленная плата.
// Плата ввода будет в любом
// возврат из формы `resolve`.
function isSolved(board) {}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// Принимает доску в той или иной форме и
// возвращает хорошо отформатированную строку
// для вывода на экран.
// Плата ввода будет в любом
// возврат из формы `resolve`.

let board =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function prettyBoard(board) {
  let arr = new Array(9);
  let char = 0;
  for (let index = 0; index < arr.length; index++) {
    arr[index] = [];
    for (let i = 0; i < 9; i++) {
      if (board[char] != '-') {
        arr[index].push(board[char]);
      } else {
        arr[index].push('.');
      }
      char++;
    }
  }
  return arr;
}


// Exports all the functions to use them in another file.
// Экспортирует все функции, чтобы использовать их в другом файле.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
