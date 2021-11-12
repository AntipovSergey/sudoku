const boardStr = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
const candidates = ['1']
const testBoard = makeBoard(boardStr)
const coordinates = [3, 8]

function makeBoard (str) {
  let result = []
  let arr = str.match(/([1-9]|\-){9}/g)
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i].split(''))
  }
  return result
}
// console.log(makeBoard(boardStr));

function render (boardSolved) {
  let result = boardSolved.map((x) => x = x.join(' ')).join('\n')
  return result
}
console.log(render(testBoard))


 /*Возвращает массив оставшихся кандидатов*/
// coordinates = [x,y], где x строка, y столбец 

function columnSearch (board, candidates, coordinates) {
  let result = []
  let arr = []
  let coor = coordinates[1]

  if (candidates.length === 1) {
    return candidates
  }


  for(let i = 0; i < board.length; i++) {
    
    arr.push(board[i][coor])
     
  }
  
  for (let i = 0; i < candidates.length; i++ ) {
   
  if (!arr.includes(candidates[i])) {
    result.push(candidates[i])
  }
  }
  return result
}
   


  
// console.log(columnSearch(testBoard, candidates, coordinates))
  



