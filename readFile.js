const fs = require('fs');
let playYard = fs.readFileSync('./puzzles.txt','utf-8')
function returnNineLines(n){
    let splitted = playYard.split('\n')[n].split('')
    const nineLines = splitted.reduce((acc,val,i)=> {
        const tmp = Math.floor(i/9)
        if (!Array.isArray(acc[tmp])){
            acc[tmp]=[val]
        } else {
            acc[tmp].push(val)
        }
        return acc
    }, [])
    return nineLines
    }
    // console.log(returnNineLines(0))
    module.exports = returnNineLines;