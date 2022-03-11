// проверяет строку и столбец // num  число которое подставиться
// board - большой массив, pos- это кординаты куда хотим подставить т е позиция числа
// проверяет уникальность строки и столбца
// если по индексу есть число 5 то мы не сможем туда подставить
// определяет какова длинна судоку

  function uniq(num, pos, board) {
    let [x, y] = pos;
    for (let i = 0; i < boardSize; i += 1) {
      if (board[x][i] === num) return false;
      if (board[i][y] === num) return false;
    }
    return true
  }

  function fillСell(board) {
    let currPos = searchEmpty(board);

    if (currPos === -1) return true;

    for (let i = 1; i <= boardSize; i += 1) {
      let currNum = String(i);

      let checkUniq = uniq(currNum, currPos, board);

      if (checkUniq) {
        let [x, y] = currPos;
        board[x][y] = currNum;

        if (fillСell(board)) {
          return true;
        }
        board[x][y] = '-';
      }
    }
    return false;
  }
  fillСell(board);
}
solveBoard(board);
return board;
}
