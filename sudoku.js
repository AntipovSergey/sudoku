/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 * @param {String} boardString - cтрока выбранного судоку
 * @return {Array.<Array.<string>>} - массив решенного судоку
 */

function solve(boardString) {
  const newBoard = boardString.split("");
  const board = [];

  for (let i = 0; i < newBoard.length; i += 0) {
    board.push(newBoard.slice(i, (i += 9)));
  }

  const size = 9;
  const boxSize = 3;
  const findEmpty = (board) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === "-") {
          return [r, c];
        }
      }
    }
    return null;
  };
  const validate = (num, pos, board) => {
    const [r, c] = pos;
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }
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
  const solver = () => {
    const currPos = findEmpty(board);
    if (currPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, board);

      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solver()) {
          return true;
        }
        board[x][y] = "-";
      }
    }

    return false;
  };
  solver();
  return board;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {
  Array.prototype.chunk = function (groupsize) {
    let sets = [],
      chunks,
      i = 0;
    chunks = Math.ceil(this.length / groupsize);

    while (i < chunks) {
      sets[i] = this.splice(0, groupsize);
      i++;
    }
    return sets;
  };
  // for (let i = 1; i < 10; i++) {
  //   for (let j = 0; j < 9; j++) {
  //    for (let k = 0; k < 9; k++) {
  //     if (board[j[k]] === i)
  //    }
  //   }
  // }

  for (let j = 0; j < 9; j++) {
    for (let i = 1; i < 10; i++) {
      if (board[j].indexOf(i.toString()) === -1) {
        return false;
      }
    }
  }

  let vertical = [];
  for (let k = 0; k < 9; k++) {
    for (let l = 0; l < 9; l++) {
      vertical.push(board[l][k]);
    }
  }
  let newBoard = vertical.chunk(9);

  for (let j = 0; j < 9; j++) {
    for (let i = 1; i < 10; i++) {
      if (newBoard[j].indexOf(i.toString()) === -1) {
        return false;
      }
    }
  }

  let boxes = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let index = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      boxes[index].push(board[j][i]);
    }
  }
  for (let j = 0; j < 9; j++) {
    for (let i = 1; i < 10; i++) {
      if (boxes[j].indexOf(i.toString()) === -1) {
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
function prettyBoard(board) {
  const emojis = {
    1: "➊ ",
    2: "➋ ",
    3: "➌ ",
    4: "➍ ",
    5: "➎ ",
    6: "➏ ",
    7: "➐ ",
    8: "➑ ",
    9: "➒ ",
  };
  const res = [];

  for (let i = 0; i < board.length; i++) {
    res.push([]);
    for (let j = 0; j < board.length; j++) {
      if (Object.keys(emojis).includes(board[i][j])) {
        res[i].push(emojis[board[i][j]]);
      } else {
        res[i].push("");
      }
    }
  }
  return res.map((el) => el.join("")).join("\n");
}
// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
