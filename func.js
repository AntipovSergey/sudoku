const fs = require('fs');
const sudoku = fs.readFileSync('./puzzles.txt', 'utf-8')

const SudokuTable = require('./test');
const sudokuArr = SudokuTable(sudoku);
console.log(sudokuArr);

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]
function findEmpty(sudokuArr, i, j){
    for(let i = 0; i < sudokuArr.length; i += 1){
        sudokuArr[i].forEach((el, j) => {
            if(el === '-'){
                // console.log(i, j)
                return checkAll(sudokuArr, i, j)
            }
        })
    }
    return true
}


let usedNum = []
function checkRow(sudokuArr, i, j){
    for(let r = 0; r < sudokuArr[i].length; r += 1){
        if(sudokuArr[i][r] !== '-' || numbers.includes(sudokuArr[i][r])){
            usedNum.push(sudokuArr[i][r])
        }
    }
    return usedNum
}


function checkCol(sudokuArr, i, j){
    for(let r = 0; r < sudokuArr[i].length; r += 1){
        if(sudokuArr[r][j] !== '-' || numbers.includes(sudokuArr[r][j])){
            usedNum.push(sudokuArr[r][j])
        }
    }
    return usedNum
}
function checkBox(sudokuArr, i, j){
    const col = Math.floor(i / 3) * 3
    const row = Math.floor(j / 3) * 3
    for(let i = col; i < col + 3; i += 1){
        for(let j = row; j < row + 3; j += 1){
            if(sudokuArr[i][j] !== '-'){
                usedNum.push(sudokuArr[i][j])
            }
        }
    }
    return usedNum
}
function checkAll(sudokuArr, i, j){
    checkRow()
    checkCol()
    checkBox()
}












