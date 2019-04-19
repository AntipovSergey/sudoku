let boardString = '29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9';
// функция вычитания двух строк
function diff(str1, str2) {
    let a = str1.split('');
    let b = str2.split('');
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                b.splice(j, 1);
            }
        }
    }
    let c = b.join('');
    return c;
}
// функция которая рисует таблицу
function printBoard(boardString) {
    let res = [];
    let stringIndex = 0;
    
    boardString.split('');
    for (let i = 0; i < 9; i++) {
        let newRes = [];
        for (let j = 0; j < 9; j++) {
            newRes.push(boardString[stringIndex++]);
        }
        res.push(newRes);
    }
    return res;
}

let board = printBoard(boardString);

// добавляем 123456789
function addNumbers(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '-')
                board[i][j] = '123456789';
        }
    }
    return board;
}

let boardUpdated = addNumbers(board);

// функция которая выводит массив цифр из строки
function rowSearch(row) {
    let rowNumbers = [];
    for (let i = 0; i < 9; i++) {
        if (row[i].length === 1) {
            rowNumbers.push(row[i]);
        }
    }
    let c = rowNumbers.join('');
    return c;
}
//функция которая выводит строку цифр из колонн
function columnSearch(column) {
    let columnNumbers = [];
    for (let j = 0; j < 9; j++) {
        let numbers = [];
        for (let i = 0; i < 9; i++) {
            numbers.push(column[i][j]);
        }
        columnNumbers.push(numbers);
    }
    let c = columnNumbers.join('');
    return c;
}
// console.log(columnSearch(board));

// функция вычисления судоку
function main(boardUpdated) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (boardUpdated[i][j].length > 1) {
                boardUpdated[i][j] = diff(rowSearch(boardUpdated[i]), boardUpdated[i][j]);
                // boardUpdated[i][j] = diff(columnSearch(boardUpdated[i][j]), boardUpdated[i][j]);
                //  console.log(rowSearch(boardUpdated[j][i]))
                //  console.log(rowSearch(boardUpdated[j][i]))

            }
        }

    }
    return boardUpdated
}
console.log(main(boardUpdated));
