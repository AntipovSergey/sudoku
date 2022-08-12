const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const { fileURLToPath } = require('url');
const { runInContext } = require('vm');

const puzzles = fs.readFileSync('./puzzles.txt','utf-8')
const {runSudoku} = require('./run')

function reader(puzzles){
    let arr = puzzles.split('\n')
    // let bord = arr[0].split('')
    let sudoku
    for (let i = 0; i < 15; i++){
        let bord = arr[i].split('')
        sudoku = bord.reduce((acc, val, i) => {
        const tmp = Math.floor(i/9)
        if (!Array.isArray(acc[tmp])){
            acc[tmp] = [val]
        } else {
            acc[tmp].push(val)
        }
        return acc
        }, [])
        let table = runSudoku(sudoku);
        console.table(table.mass);
        if (table.fl === 0){
            console.log('Судоку не решена.')
        } else {
            console.log('Судоку решена.')
        }
    }
}


reader(puzzles)

