boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'


function solve(boardString) { // создает поле судоку
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

let board = solve(boardString); 

function isSolved(board) {  // заменяет "-" на "123456789"
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '-')
                board[i][j] = '123456789';
        }
    }
    return board;
}

console.log(isSolved(board));

function squares(d = 3, b = 3, res = [], j = 0, i = 0, c = j) { // находит квадраты 3х3
    let ourArr = board
    for (; i < d; i++) {
        for (; j < b; j++) {
            res.push(ourArr[i][j])
        }
        j = c;
    }
    console.log(res)
}


squares(d = 3, b = 3, res = [], j = 0, i = 0, c = j)//1
squares(d = 6, b = 3, res = [], j = 0, i = 3, c = j)//2
squares(d = 9, b = 3, res = [], j = 0, i = 6, c = j)//3
squares(d = 3, b = 6, res = [], j = 3, i = 0, c = j)//4
squares(d = 6, b = 6, res = [], j = 3, i = 3, c = j)//5
squares(d = 9, b = 6, res = [], j = 3, i = 6, c = j)//6
squares(d = 3, b = 9, res = [], j = 6, i = 0, c = j)//7
squares(d = 6, b = 9, res = [], j = 6, i = 3, c = j)//8
squares(d = 9, b = 9, res = [], j = 6, i = 6, c = j)//9


