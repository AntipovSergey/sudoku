//let board = '125882444492276475299422819119997326762383396666661754447633337437723571655338966'

function getTable(board){
let result = []

for(let i = 0; i < board.length; i+=9){
let arr = board.slice(i, i+9).split('')
result.push(arr)
}
console.table(result)
return result
}
// getTable(board)

// let arr = []
// for(let i = 0; i < board.length; i += 3){
//   let result = ''
//   result = '|' + board[i] + '|' + board[i + 1] + '|' + board[i + 2] + '|'
//   arr.push(result)
// }

// console.log(arr)
module.exports = getTable
