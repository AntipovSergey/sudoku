
function diff(a1, a2) {
    return a1.filter(i => a2.indexOf(i) < 0)
        .concat(a2.filter(i => a1.indexOf(i) < 0))
}

board1='1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

function prettyBoard(board) {
    index = 0;
    result = [];
    board=board.replace(/-/g,0)
    for (let i = 0; i < 9; i++) {
        let tmp = [];
        for (let j = 0; j < 9; j++) {
            tmp.push(Number(board[index++]))
        }
        result.push(tmp)
    }
    return result
}
function CheckRow(board) { // Поиск горизонтального значения, аргумент - строка
    let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let check = []
    for (let i = 0; i < board.length; i++) {
        if (digits.includes(board[i])) {
            check.push(board[i])
        }
    }
    return (diff(check, digits))
};
function CheckColumn(board, x) { // Поиск вертикальных возможных значений, аргумент доска и координата
    let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let check = []
    for (i = 0; i < board.length; i++) {
        if (digits.includes(board[i][x])) {
            check.push(board[i][x])
        }
    }
    return result = diff(check, digits)
}
function solver(board, y = 0, x = 0) {
    if (!board.join('').includes('0')) return board
    if (y===9) y=0
    let row = column = Checked = ''
    row = CheckRow(board[y]) // проверка возможных значений по горизонтали
    column = CheckColumn(board, x) // проверка возможных значений по вертикали
    Checked = column.filter(element => row.includes(element)) // Разница возможных значений (гор и вер)
    if (board[y][x] === 0 && Checked.length === 1) board[y][x] = Checked[0] // Если возможное значение одно то вставляет его в судоку
    if (x < 9) { return solver(board, y, x + 1) } // сдвигает координату по горизонтали
    else { return solver(board, y + 1, x=0) } // сдвигает на след строчку
}
console.log(solver(prettyBoard(board1)))
