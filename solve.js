const solve = () => {
  const size = 9;
  const currentPos = findIndex(board);
  if (currentPos === null) {
    return true;
  }
  for (let i = 1; i < size + 1; i += 1) {
    const currentNum = i.toString();
    const isValid = check(currentNum, currentPos, board);
    if (isValid) {
      const [r, c] = currentPos;
      board[r][c] = currentNum;
      if (solve()) return true;
      board[r][c] = '-';
    }
  }
  return false;
}
