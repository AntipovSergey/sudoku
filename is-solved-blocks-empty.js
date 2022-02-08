// проверка на отсутствие дублей в каждом "квадратике"
function isSolvedBlocks(board) {
  // создаем массив из "квадратиков"
  const blocks = [];
  for (let j = 0; j < 81; j += 27) {
    for (let i = j; i < (j + 7); i += 3) {
      const blockItem = [];
      blockItem.push(board[i], board[i + 1], board[i + 2], board[i + 9], board[i + 10], board[i + 11], board[i + 18], board[i + 19], board[i + 20]);
      blocks.push(blockItem);
    }
  }

  // проверяем на дубли в каждом квадратике
  let counter = 0;
  for (let i = 0; i < blocks.length; i += 1) {
    for (let j = 0; j < blocks[i].length; j += 1) {
      if (blocks[i].indexOf(blocks[i][j]) !== blocks[i].lastIndexOf(blocks[i][j])) {
        counter += 1;
      }
    }
  }
  return !(counter > 0);
}

// проверка на отсутствие пустых ячеек
function isSolvedEmptyCells(board) {
  return !board.split('').includes('-');
}

module.exports = {
  isSolvedBlocks,
  isSolvedEmptyCells,
};
