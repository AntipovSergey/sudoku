function solve(boardString) {
    const board = parseBoardString(boardString);
    const intResult = solveRecursive(board);
    return intResult;
  }
  
  function solveRecursive(result) {
    const board = JSON.parse(JSON.stringify(result));
    for (let i = 0; i < 9; i++) {
      recursive(result, i);
    }
    if (isSolved(result)) {
      return result;
    }
    if (JSON.stringify(result) !== JSON.stringify(board)) return solveRecursive(result);
    const intResult = JSON.parse(JSON.stringify(result));
    for (let i = 0; i < 9; i++) {
      recursiveRandom(result, i);
    
    }
    if (isSolved2(result)) return result;
    return solveRecursive(intResult);
  }
  
  // преобразуем строку в 2мерный массив
  function parseBoardString(boardString) {
    const result = [];
    for (let i = 0; i < boardString.length; i += 9) {
      result.push(boardString.slice(i, i + 9).split(''));
    }
    return result;
  }
  
  function recursiveRandom(result, i = 0, j = 0, object = {}) {
    const base = '123456789';
    for (j; j < 9; j++) {
      let summ = '';
      if (result[i][j] === '-') {
        let uniqeString = '';
        summ = stroke(result, i) + table(result, j, i) + column(result, j);
        for (let b = 0; b < base.length; b++) {
          if (!summ.includes(base[b])) uniqeString += base[b];
        }
        if (uniqeString.length === 0) {
          result[i][j] = '-';
          return recursiveRandom(result, i, j + 1, object);
        }
        const randomEl = Math.floor(uniqeString.length * Math.random());
        for (let k = 0; k < uniqeString.length; k++) {
          if (object[`${i}+${j}`] == uniqeString[randomEl] && object[`${i}+${j}`] != undefined) randomEl = k;
        }
        if (uniqeString.length > 0)result[i][j] = uniqeString[randomEl];
        object[`${i}+${j}`] = uniqeString[randomEl];
  
        return recursiveRandom(result, i, j + 1, object);
      }
    }
  }
  function recursive(result, i, j = 0) {
    const base = '123456789';
    for (j; j < 9; j++) {
      let summ = '';
      if (result[i][j] === '-') {
        let uniqeString = '';
        summ = stroke(result, i) + table(result, j, i) + column(result, j);
        for (let b = 0; b < base.length; b++) {
          if (!summ.includes(base[b])) uniqeString += base[b];
        }
        if (uniqeString.length === 0) result[i][j] = '-';
        if (uniqeString.length === 1) {
          result[i][j] = uniqeString;
          return result;
        } return recursive(result, i, j + 1);
      }
    }
  }
  
  function table(board, index, height) {
    let result = '';
    if (index < 3 && height < 3) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          result += board[i][j];
        }
      } return result;
    }
    if (index < 6 && index >= 3 && height < 3) {
      for (let i = 0; i < 3; i++) {
        for (let j = 3; j < 6; j++) {
          result += board[i][j];
        }
      } return result;
    }
    if (index < 9 && index >= 6 && height < 3) {
      for (let i = 0; i < 3; i++) {
        for (let j = 6; j < 9; j++) {
          result += board[i][j];
        }
      } return result;
    }
    if (index < 3 && height < 6 && height >= 3) {
      for (let i = 3; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          result += board[i][j];
        }
      } return result;
    }
    if (index < 6 && index >= 3 && height < 6 && height >= 3) {
      for (let i = 3; i < 6; i++) {
        for (let j = 3; j < 6; j++) {
          result += board[i][j];
        }
      } return result;
    }
    if (index < 9 && index >= 6 && height < 6 && height >= 3) {
      for (let i = 3; i < 6; i++) {
        for (let j = 6; j < 9; j++) {
          result += board[i][j];
        }
      } return result;
    }
    if (index < 3 && height < 9 && height >= 6) {
      for (let i = 6; i < 9; i++) {
        for (let j = 0; j < 3; j++) {
          result += board[i][j];
        }
      } return result;
    }
    if (index < 6 && index >= 3 && height < 9 && height >= 6) {
      for (let i = 6; i < 9; i++) {
        for (let j = 3; j < 6; j++) {
          result += board[i][j];
        }
      } return result;
    }
    if (index < 9 && index >= 6 && height < 9 && height >= 6) {
      for (let i = 6; i < 9; i++) {
        for (let j = 6; j < 9; j++) {
          result += board[i][j];
        }
      } return result;
    }
  }
  
  function stroke(board, height) {
    let result = '';
    for (let i = 0; i < 9; i++) {
      result += board[height][i];
    }
    return result;
  }
  
  function column(board, index) {
    let result = '';
    for (let i = 0; i < board.length; i += 1) {
      result += board[i][index];
    }
    return result;
  }
  
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
  function isSolved(board) {
    for (let i = 0; i < board.length; i++) {
      if (board[i].indexOf('-') !== -1) return false;
    }
    return true;
  }
  function isSolved2(board) {
    return isSolvedString(board)
    && isSolvedColumn(board)
    && isSolvedTable(board);
  }
  
  function isSolvedString(board) {
    for (let i = 0; i < board.length; i++) {
      if (board[i].slice().sort().join('') !== '123456789') return false;
    } return true;
  }
  
  function isSolvedColumn(board) {
    for (let i = 0; i < 9; i++) {
      const arr = [];
      for (let j = 0; j < 9; j++) {
        arr.push(board[j][i]);
      }
      if (arr.slice().sort().join('') !== '123456789') return false;
    } return true;
  }
  
  // проверяет все квадраты
  function isSolvedTable(board) {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!isSolvedKvadrat(board, i, j)) return false;
      }
    } return true;
  }
  /* проверяет конкретный квадрат */
  function isSolvedKvadrat(board, x, y) {
    const arr = [];
    for (let i = 3 * x; i < 3 * (x + 1); i++) {
      for (let j = 3 * y; j < 3 * (y + 1); j++) {
        arr.push(board[j][i]);
      }
    }
    if (arr.slice().sort().join('') !== '123456789') return false;
    return true;
  }
  
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает строку с игровым полем для последующего вывода в консоль.
   * Подумай, как симпатичнее сформировать эту строку.
   */
  function prettyBoard(board) {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
          process.stdout.write(`${board[i][j]} `);
          if ((j + 1) % 3 === 0) process.stdout.write(`  `);
      }
      process.stdout.write(`\n`);
      if ((i + 1) % 3 === 0) process.stdout.write(`\n`);
  }
  
  }
  // console.table(solve('---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----'));
  // const boardString = '---6891--8------2915------84-3----5-2----5----9-24-8-1-847--91-5------6--6-41----';
  // const result = [];
  // for (let i = 0; i < boardString.length; i += 9) {
  //   result.push(boardString.slice(i, i + 9).split(''));
  // }
  // console.table(result);
  // Экспортировать функции для использования в другом файле (например, readAndSolve.js).
  module.exports = {
    solve,
    isSolved,
    prettyBoard,
  };
  