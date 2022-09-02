const fs = require('fs')
const puzzles = fs.readFileSync('./puzzles.txt','utf-8')

function returnNineLines(n){
let splitted = puzzles.split('\n')[n].split('')
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
console.log(returnNineLines(1))



module.exports = {returnNineLines}




















// for(let i = 0; i <=9 ; i+=1){
// let mainArr = []
// mainArr.push(convertedFirstLine.substring(0, 9));
// console.log(mainArr)
// }

// for(let i = 0; i <=9 ; i+=1){
//     // console.log(convertedFirstLine[i]);
//     convertedFirstLine[i].split('')
//     }



//     const arr = [1,2,3,4,5,6]

// const res = arr.reduce((acc,val,i)=> {
//     const tmp = Math.floor(i/2) // 0,0,1,1,2,2
//     if (!Array.isArray(acc[tmp])){
//         acc[tmp]=[val]
//     } else {
//         acc[tmp].push(val)
//     }
//     return acc
// }, [])
// console.log(res);