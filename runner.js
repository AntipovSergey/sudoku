const fs = require('fs');
let content = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');

function sudokuParse(content, puzzleNumber = 0) {
  let puzzle = content.replaceAll('-', '0').split('\n')[puzzleNumber].split('');

  let tempArray = [];
  let num = 9;

  for (let i = 0; i < 81; i += 9) {
    tempArray.push(puzzle.slice(i, num));
    num += 9;
  }

  for (let i = 0; i < tempArray.length; i++) {
    for (let j = 0; j < tempArray.length; j++) {
      tempArray[i][j] = Number(tempArray[i][j]);
    }
  }

  return tempArray;
}

let board = sudokuParse(content, 14);
// console.log(board);

let solve = function (board) {
  //Это длина строки и сектора
  const size = 9;
  const sectorSize = 3;

  //Функция которая ищет "пустые" места для цифр
  const findZeroChar = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === 0) {
          return [r, c];
        }
      }
    }
    return null;
  };

  //Функция проверяет строки, колонки, сектора
  const validate = (num, pos, board) => {
    const [r, c] = pos;

    //Этим циклом проверяем строки
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    //Этим циклом проверяем колонки
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    //Этим циклом проверяем сектора
    const boxRow = Math.floor(r / sectorSize) * sectorSize;
    const boxCol = Math.floor(c / sectorSize) * sectorSize;

    for (let i = boxRow; i < boxRow + sectorSize; i++) {
      for (let j = boxCol; j < boxCol + sectorSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }

    return true;
  };

  // Функция которая подбирает корректное число на пустое место строки, колонки, сектора и заполняется судоку
  const solve = () => {
    const currPos = findZeroChar(board);

    if (currPos === null) {
      return true;
    }
    // console.log('------------------------------');
    for (let i = 1; i < size + 1; i++) {
      const currNum = i;
      const isValid = validate(currNum, currPos, board);
      // console.log(
      //   'currPos ',
      //   currPos,
      //   'currNum ',
      //   currNum,
      //   'isValid ',
      //   isValid
      // );
      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solve()) {
          return true;
        }

        board[x][y] = 0;
      }
    }

    return false;
  };

  solve();
  return board;
};

console.table(board);
console.table(solve(board));
