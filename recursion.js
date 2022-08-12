const getNumber = () => {
    const noEmpty = getEmpty(board)
    if (noEmpty === null) {
      return true;
    }
  
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = valide(number, position, board);
  
      if (isValid) {
        const [x, y] = noEmpty;
        board[x][y] = currNum;
  
        if (getNumber()) {
          return true;
        }
        board[x][y] = '-';
      }
    }
    return false;
  }
  getNumber()
  return board
