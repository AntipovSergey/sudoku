// 6. Основная функция решения
// Создай функцию solve, которая будет основной для решения Sudoku.
// В этой функции:
// Прочитай и преобразуй первую строку из массива строк, полученного из функции read, в двумерный массив, используя функцию prettyBoard.
// Проверь, решена ли доска, используя функцию isSolved.
// Если доска не решена, пройди по всем элементам двумерного массива.
// Если элемент равен "-", сгенерируй новое случайное число, используя функцию generateNumber.
// Замени пустой элемент новым числом.
// Выведи доску в консоль.

function solve(board) {
    const board = prettyboard(read()[0])
    const ifSolved = isSolved(board)

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === '-') {
                const newElement = generateNumber();
            }
        }
        return board;
    }
}