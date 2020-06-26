const isValid = (puzzle, prediction, position) => {
// проверка строки
  const rowValidator = (puzzle, prediction, position) => {
    for (let i = 0; i < 9; i++) {
      if (puzzle[position[0]][i] === prediction) return false;
    }
    return true;
  };
  // проверка столбца
  const columnValidator = (puzzle, prediction, position) => {
    for (let i = 0; i < 9; i++) {
      if (puzzle[i][position[1]] === prediction) return false;
    }
    return true;
  };

  const validateBox = (puzzle, prediction, position) => {
    let row = position[0];
    let col = position[1];
    row = Math.floor(row / 3) * 3;
    col = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (puzzle[row + i][col + j] === prediction) return false;
      }
    }
    return true;
  };

  if (rowValidator(puzzle, prediction, position)
        && columnValidator(puzzle, prediction, position)
        && validateBox(puzzle, prediction, position)) {
    return true;
  }
  return false;
};

// Валидация таблицы

const isValidBoard = (puzzle) => {
  console.log('Проверяем судоку');
  const checkLine = (arr) => arr.sort((a, b) => (a - b)).join('') === '123456789';
  for (let i = 0; i < 9; i++) {
    const currentLine = [];
    for (let j = 0; j < 9; j++) {
      currentLine.push(puzzle[i][j]);
    }
    if (!checkLine(currentLine)) return false;
  }

  for (let i = 0; i < 9; i++) {
    const currentLine = [];
    for (let j = 0; j < 9; j++) {
      currentLine.push(puzzle[j][i]);
    }
    if (!checkLine(currentLine)) return false;
  }

  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      const currentLine = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          currentLine.push(puzzle[i][j]);
        }
      }
      if (!checkLine(currentLine)) return false;
    }
  }
  return true;
};

module.exports = {
  isValid,
  isValidBoard,
};
