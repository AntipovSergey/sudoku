let num = 4
const position = [0, 1]
const readAndSolve = [
        ["4", "-", "1", "-"],
        ["-", "2", "-", "-"],
        ["-", "-", "3", "-"],
        ["-", "-", "2", "-"],
    ]; 

  function getEmpty(readAndSolve) {
    const board = readAndSolve;
    for (let r = 0; r < board.length; r += 1) {
        for (let c = 0; c < board.length; c += 1) {
            if (board[r][c] === '-') {
                return [r, c];
            }
        }
    }
    return null;
}

console.log(getEmpty(getEmpty))

module.exports = validate;