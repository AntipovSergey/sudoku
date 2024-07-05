
// 4. Проверка решенной доски
// Создай функцию isSolved, которая принимает двумерный массив (доску Sudoku).
// Пройди по всем элементам массива, чтобы проверить, нет ли среди них символов "-".
// Если найдены символы "-", функция должна вернуть false, иначе true.


function isSolved(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++)
            if (board[i][j] === '-' || board[j][i] === '-')
                return false;
            else { return true }
    }
}