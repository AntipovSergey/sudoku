/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */

function sudokuToArr(line) {
  const res = [];
  for (let i = 0; i < line.length; i += 9) {
    res.push(line.slice(i, i + 9).split(''));
  }
  console.table(res);
  return res;
}
function solve(str) {
/* Проверка валидности вводимого значения */

  const sudokuChois = sudokuToArr(str);

  const findEmpty = (board) => {
    for (let row = 0; row < 9; row++) {
      for (let column = 0; column < 9; column++) {
        if (board[row][column] === '-') {
          console.log('position',[row, column]);
          return [row, column];
        }
      }
    }
    return null;
  };
  const valid = (num, position, sudokuChois) => {
    const [row, column] = position;

    /* Строка */
    for (let i = 0; i < 9; i++) {
      if (sudokuChois[i][column] === num && i !== row) {
        return false;
      }
    }
    /* Столбец */
    for (let i = 0; i < 9; i++) {
      if (sudokuChois[row][i] === num && i !== column) {
        return false;
      }
    }
    /* Внутренний квадрат */
    const startPositionCubeRow = Math.floor(row / 3) * 3;
    const startPositionCubeCol = Math.floor(column / 3) * 3;
    for (let i = startPositionCubeRow; i < startPositionCubeRow + 3; i++) {
      for (let j = startPositionCubeCol; j < startPositionCubeCol + 3; j++) {
        if (sudokuChois[i][j] === num && i !== row && j !== column) {
          return false;
        }
      }
    }
    return true;
  };

  const numsFinder = () => {
    const currPos = findEmpty(sudokuChois);
    if (currPos === null) {
      return true;
    }
    console.log('------------');
    for (let i = 1; i <= 9; i++) {
      const currNum = i.toString();
      const isValid = valid(currNum, currPos, sudokuChois);
      console.log('currPos=', currPos, 'currNum=', currNum, 'isValid=', isValid);
      if (isValid) {
        const [x, y] = currPos;
        sudokuChois[x][y] = currNum;

        if (numsFinder()) {
          return true;
        }
        sudokuChois[x][y] = '-';
      }
    }
    return false;
  };
  numsFinder();

  return sudokuChois;
}

// console.table(sudokuToArr());
// console.table(solve(sudokuToArr()));

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

function isSolved(board) {
  // Проверка строк
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      for (let k = j + 1; k < board[i].length; k++) {
        if (board[i][j] === board[i][k] || Number(board[i][j]) > 9 || Number(board[i][j]) < 1) {
          return false;
        }
      }
    }
  }
  // Проверка столбцов
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length - 1; j++) {
      for (let k = j + 1; k < board[i].length; k++) {
        if (board[j][i] === board[k][i]) {
          return false;
        }
      }
    }
  }
  // Проверка квадратов

  const arr1 = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      arr1.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] === arr1[j]) {
        return false;
      }
    }
  }
  const arr2 = [];
  for (let i = 3; i < 6; i++) {
    for (let j = 0; j < 3; j++) {
      arr2.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr2.length - 1; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
      if (arr2[i] === arr2[j]) {
        return false;
      }
    }
  }
  const arr3 = [];
  for (let i = 6; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      arr3.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr3.length - 1; i++) {
    for (let j = i + 1; j < arr3.length; j++) {
      if (arr3[i] === arr3[j]) {
        return false;
      }
    }
  }
  const arr4 = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 3; j < 6; j++) {
      arr4.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr4.length - 1; i++) {
    for (let j = i + 1; j < arr4.length; j++) {
      if (arr4[i] === arr4[j]) {
        return false;
      }
    }
  }
  const arr5 = [];
  for (let i = 3; i < 6; i++) {
    for (let j = 3; j < 6; j++) {
      arr5.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr5.length - 1; i++) {
    for (let j = i + 1; j < arr5.length; j++) {
      if (arr5[i] === arr5[j]) {
        return false;
      }
    }
  }
  const arr6 = [];
  for (let i = 6; i < 9; i++) {
    for (let j = 3; j < 6; j++) {
      arr6.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr6.length - 1; i++) {
    for (let j = i + 1; j < arr6.length; j++) {
      if (arr6[i] === arr6[j]) {
        return false;
      }
    }
  }
  const arr7 = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 6; j < 9; j++) {
      arr7.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr7.length - 1; i++) {
    for (let j = i + 1; j < arr7.length; j++) {
      if (arr7[i] === arr7[j]) {
        return false;
      }
    }
  }
  const arr8 = [];
  for (let i = 3; i < 6; i++) {
    for (let j = 6; j < 9; j++) {
      arr8.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr8.length - 1; i++) {
    for (let j = i + 1; j < arr8.length; j++) {
      if (arr8[i] === arr8[j]) {
        return false;
      }
    }
  }
  const arr9 = [];
  for (let i = 6; i < 9; i++) {
    for (let j = 6; j < 9; j++) {
      arr9.push(board[i][j]);
    }
  }
  for (let i = 0; i < arr9.length - 1; i++) {
    for (let j = i + 1; j < arr9.length; j++) {
      if (arr9[i] === arr9[j]) {
        return false;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i].indexOf('-') !== -1) return false;
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i] < 0 && board[i] > 9) {
      return false;
    }
  }

  return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */

function prettyBoard(board) {
  let stringPretty = '';
  for (let i = 0; i < board.length; i++) {
    stringPretty = `${stringPretty + board[i].join(' ')}\n`;
  }
  return `\n${stringPretty}`;
}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
  sudokuToArr,
};
