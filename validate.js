function validate(num, pos, board) {
    const [row, colum] = pos;
    for (let i = 0; i < size, i++) {
        // проверяем строку
        if (board [row][i] === num && i !== colum) {
            return false
        }
        // проверяем колонку
        if (board [i][colum] === num && i !== row) {
            return false
        }
    }

}