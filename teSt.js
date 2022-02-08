const fs = require('fs');
let data = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
let parseData = sudokuParse(data)

function sudokuParse(content) {
    let puzzle = content.split('\n');
    return puzzle;
}

function getRandomArray(data) {
    let randomArrNum = 0;
    let result
    for (let el = 0; el < data.length; el++) {
        randomArrNum = Math.floor(Math.random() * el);
        result = data[randomArrNum]
    }
    return result
}

// console.log(getRandomArray(parseData));

let str2 = getRandomArray(parseData)


let boardStart = solve(str2)
let board = solve(str2)

function solve(boardString) {
    let arr = []
    let arrBoardString = boardString.split('')
    for (let i = 0; i < 9; i++) {
        arr.push(arrBoardString.splice(0, 9))
    }
    return arr
}

function isSolved(board) {

    const findEmpty = (board) => {
        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '-') {
                    return [r, c];
                }
            }
        }
        return null;
    }

    const validate = (num, pos, board) => {
        const [r, c] = pos;
        for (let i = 0; i < 9; i++) {
            if (board[i][c] === num && i !== r) {
                return false;
            }
        }
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === num && i !== c) {
                return false;
            }
        }
        const boxRow = Math.floor(r / 3) * 3;
        const boxCol = Math.floor(c / 3) * 3;

        for (let i = boxRow; i < boxRow + 3; i++) {
            for (let j = boxCol; j < boxCol + 3; j++) {
                if (board[i][j] === num && i !== r && j !== c) {
                    return false;
                }
            }
        }
        return true;
    }

    const solution = () => {
        const currPos = findEmpty(board);

        if (currPos === null) {
            return true;
        }
        for (let i = 1; i < 9 + 1; i++) {
            const currNum = i.toString();
            const isValid = validate(currNum, currPos, board);
            if (isValid) {
                const [x, y] = currPos;
                board[x][y] = currNum;

                if (solution()) {
                    return true;
                }

                board[x][y] = '-';
            }
        }
        return false;
    }
    solution();
    return board;
};


console.log(isSolved(board))

const root = document.querySelector('#root');

function get_table(row_count, column_count) {
    const outer_table = document.createElement('table');
    for (let i = 0; i < row_count; i++) {
        const row = document.createElement('tr')
        outer_table.appendChild(row);
        for (let i = 0; i < column_count; i++) {
            const column = document.createElement('td')
            row.appendChild(column);
        }
    }
    return outer_table
}

const mainTable = get_table(9, 9);

root.appendChild(mainTable)

function fillSudoku(lst) {
    const line_lst = [].concat(...lst);
    mainTable.querySelectorAll('td')
        .forEach((td, i) => td.innerText = (line_lst[i] === '-') ? '' : line_lst[i]);
}

fillSudoku(boardStart)

document.querySelector('#solution')
    .addEventListener('click', () => fillSudoku(board));

document.querySelector('#reset')
    .addEventListener('click', () => fillSudoku(boardStart));