function solve(boardString) {
  const boxSize = 3;
  const size = 9;
  function boardStringToArray(boardString) {
    const board = boardString.split("");
    const boardArray = [];
    for (let i = 0; i < board.length; i += 9) {
      boardArray.push(board.slice(i, i + 9));
    }
    return boardArray;
  }
  const boardArray = boardStringToArray(boardString);
  function findEmpty(boardArray) {
    const size = 9;
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (boardArray[r][c] === "-") {
          return [r, c];
        }
      }
    }
    return null;
  }
  function validate(num, pos, boardArray) {
    const [r, c] = pos;
    for (let i = 0; i < size; i++) {
      if (boardArray[i][c] === num && i !== r) return false;
    }
    for (let i = 0; i < size; i++) {
      if (boardArray[r][i] === num && i !== c) return false;
    }
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;
    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (boardArray[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }
    return true;
  }
  function generateNum() {
    const currPos = findEmpty(boardArray);
    if (currPos === null) {
      return true;
    }
    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const count = validate(currNum, currPos, boardArray);
      if (count) {
        const [x, y] = currPos;
        boardArray[x][y] = currNum;
        if (generateNum()) {
          return true;
        }
        boardArray[x][y] = "-";
      }
    }
    return false;
  }
  generateNum();
  return boardArray;
}
  function isSolved(boardString1) {
    const size = 9;
    for (let r = 0; r <= size; r++) {
      for (let c = 0; c <= size; c++) {
        if (boardString1[r][c] === "-") {
          return false;
        }
      }
      return true;
    }
}
console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'));
function prettyBoard(boardString) {

  return console.table(boardString)
}

module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
