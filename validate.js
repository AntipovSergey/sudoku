let num = 4
const position = [0, 1]
const readAndSolve = [
        ["4", "-", "1", "-"],
        ["-", "2", "-", "-"],
        ["-", "-", "3", "-"],
        ["-", "-", "2", "-"],
    ]; 


function validate (num, position,readAndSolve) {
    const [r,c] = position;
    const board = readAndSolve;

  // check row
  for (let i = 0; i < 9;  i += 1) {
    if (board[i][c] === num && i !== r) {
       return false;
    }
  }

  // check column
    for (let i = 0; i < 9; i += 1) {
        if (board[r][i] === num && i !== c) {
            return false;
        } 
    }

  // check sector
    const sRow = Math.floor(r/3) * 3;
    const sColumn = Math.floor(c/3) * 3;

    for (let i = sRow; i < sRow + 3; i += 1) {
        for (let j = sColumn; j < sColumn + 3; j += 1) {
            if (board[i][j] === num && i !== r && j !== c) {
                return false;
            }
        }
    }

    return true;
}


module.exports = validate;