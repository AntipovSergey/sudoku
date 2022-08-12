const fs = require('fs');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const { fileURLToPath } = require('url');
const { runInContext } = require('vm');

const puzzles = fs.readFileSync('./puzzles.txt','utf-8')

function reader(puzzles){
    let arr = puzzles.split('\n')
    // let bord = arr[0].split('')
    let res
    for (let i = 0; i < 15; i++){
        let bord = arr[i].split('')
        res = bord.reduce((acc, val, i) => {
        const tmp = Math.floor(i/9)
        if (!Array.isArray(acc[tmp])){
            acc[tmp] = [val]
        } else {
            acc[tmp].push(val)
        }
        return acc
        }, [])
        console.table(res)
    }
   
    return res
}

// console.table (reader(puzzles));
reader(puzzles)