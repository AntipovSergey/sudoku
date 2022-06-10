const matrix = require("./getSudoku");

function checkLine(matrix, point) {
    let solvedInLine = [];

    for (let i = 0; i < matrix[point[0]].length; i++) {
        if (matrix[point[0]][i] !== "-") {
            solvedInLine.push(matrix[point[0]][i]);
        }
    }
    return solvedInLine;
}

function rotateRight90 (matrix) {
    let result = [];
    for (let i = matrix.length - 1; i >= 0; i--) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (!result[j]) {
          result[j] = [];
        }
        result[j].push(matrix[i][j]);
      }
    }
    return result;
}

function checkColumn (matrix, point) {
    let solvedInColumn = [];
    let newMatrix = rotateRight90(matrix);
    for (let i = 0; i < newMatrix[point[1]].length; i++) {
        if (newMatrix[point[1]][i] !== "-") {
            solvedInColumn.push(newMatrix[point[1]][i]);
        }
    }
    return solvedInColumn;
}

function checkSquare (matrix, point) {
    let blockSize = 3;
    let squareRow = Math.floor(point[0] / blockSize) * blockSize;
    let squareCol = Math.floor(point[1] / blockSize) * blockSize;
    let solvedInSquare = [];

    for (let i = squareRow; i < squareRow + blockSize; i++) {
        for (let j = squareCol; j < squareCol + blockSize; j++) {
            if (matrix[i][j] !== "-") {
                solvedInSquare.push(matrix[i][j]);
            }
        }
    }
    return solvedInSquare;
}


module.exports = {checkLine, checkColumn, checkSquare};