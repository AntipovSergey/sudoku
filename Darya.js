function checkDigits(puzzle) {
    for (let i = 0; i < puzzle.length; i++) {
      for (let j = 0; j < puzzle[i].length; j++) {
        const digit = puzzle[i][j];
        if (digit < 1 || digit > 9) {
          return false; 
        }
      }
    }
    return true;
  }
  
  function checkSudokuValue(puzzle, x, y) {
    const value = puzzle[x][y];
    
    // Проверяем уникальность цифры в строке
    for (let i = 0; i < puzzle.length; i++) {
      if (i !== y && puzzle[x][i] === value) {
        return false; // Если найдена такая же цифра в строке, возвращаем false
      }
    }
    
    return checkDigits([[value]]);
  }


