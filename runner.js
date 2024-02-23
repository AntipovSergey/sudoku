// Используйте для решения судоку необходимые функции из файла sudoku.js
function solve(sudoku) {
    const emptySpot = findEmptySpot(sudoku);
    if (!emptySpot) {
        return true; // Если нет пустых ячеек, судоку решено
    }
    const [row, col] = emptySpot;
    for (let num = 1; num <= 9; num++) {
        if (isValid(sudoku, row, col, num)) {
            sudoku[row][col] = num; // Присваиваем число, если оно подходит
            if (solve(sudoku)) {
                return true; // Если судоку решено с использованием этой цифры, возвращаем true
            }
            sudoku[row][col] = 0; // Если число не привело к решению, возвращаемся назад и пытаемся другие цифры
        }
    }
    return false; // Возврат false, если не найдено подходящее число
}
function findEmptySpot(sudoku) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (sudoku[row][col] === 0) {
                return [row, col];
            }
        }
    }
    return null; // Возвращаем null, если нет пустых ячеек
}
function isValid(sudoku, row, col, num) {
    // Проверяем строку
    for (let i = 0; i < 9; i++) {
        if (sudoku[row][i] === num) {
            return false;
        }
    }
    // Проверяем столбец
    for (let i = 0; i < 9; i++) {
        if (sudoku[i][col] === num) {
            return false;
        }
    }
    // Проверяем квадрат 3x3
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
            if (sudoku[i][j] === num) {
                return false;
            }
        }
    }
    return true; // Если число не найдено в строке, столбце или квадрате, возвращаем true
}
// Пример использования:
const sudoku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];
solve(sudoku);
console.log("Sudoku solved:");
console.table(sudoku);