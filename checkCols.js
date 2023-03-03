function solveSudoku(table) {
  for (let r = 0; r < table[i].length; r++) {
    if (table[r][row] === number && r !== col) {
      table[col][row] = ".";
      return solveSudoku(table);
    }
  }
}
