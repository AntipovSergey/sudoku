/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
  
}


/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(num, pos, board) {
    const [r,c] = pos;

    //Проверка строк
    for (let i = 0; i < 9; i++) {
        if (board[i][c] === num && i !== r) {
            return false;
        }
    }

    //Проверка столбцов
    for (let i = 0; i < 9; i++) {
        if (board[r][i] === num && i !== c) {
            return false;
        }
    }

    //Проверка секторов
    const boxRow = Math.floor( r/ 3 ) * 3;
    const boxCol = Math.floor( c/ 3 ) * 3;

    for (let i = boxRow; i < boxRow + 3; i++) {
        for (let j = boxCol; j < boxCol + 3; j++) {
            if (board[i][j] === num && i !== r && j !== c) {
                return false;
            }
        }
    }

    return true;
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
