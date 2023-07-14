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


//   const sudoku = [
//     [5, 3, 0, 0, 7, 0, 0, 0, 0],
//     [6, 0, 0, 1, 9, 5, 0, 0, 0],
//     [0, 9, 8, 0, 0, 0, 0, 6, 0],
//     [8, 0, 0, 0, 6, 0, 0, 0, 3],
//     [4, 0, 0, 8, 0, 3, 0, 0, 1],
//     [7, 0, 0, 0, 2, 0, 0, 0, 6],
//     [0, 6, 0, 0, 0, 0, 2, 8, 0],
//     [0, 0, 0, 4, 1, 9, 0, 0, 5],
//     [0, 0, 0, 0, 8, 0, 0, 7, 9]
//   ];
  
//   console.table(checkSudokuValue(sudoku, 7, 8)); 
//   console.table(checkSudokuValue(sudoku, 0, 2)); 