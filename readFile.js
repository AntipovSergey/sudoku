const puzzle = require('./test');

function changeForm(puzzle){


    let sudoku = puzzle();
    let board = [];
    let str = sudoku;

    
    for (let j = 0;j<9;j+=1){
        board[j] = [];
        for (let i = 0;i<9;i+=1){
            board[j][i] = sudoku[i];
    }
        str = sudoku.substring(9);
        sudoku = str;
}
    return board
}

module.exports = changeForm
