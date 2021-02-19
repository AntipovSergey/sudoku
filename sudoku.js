
let array = [
 [ '1', '2', '5', '8', '7', '2', '8', '9', '4'],
 [ '7', '1', '-', '-', '5', '4', '-', '6', '-']
]

let search = function placeNumber(board) {
  for(let str=0; str<board.length; str+=1){
    for(let col=0; col<board[str].length; col+=1 ){
      // console.log(board[str][col]);
      if(board[str][col] == '-'){
        return [str, col]
      }
    }
  }
}

console.log(search(array))




// module.exports = {
// 	solve: solve,
// 	isSolved: isSolved,
// 	prettyBoard: prettyBoard
// }
