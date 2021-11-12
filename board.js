const boardStr = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const testBoard = makeBoard(boardStr)
const coordinates = [3, 4]

function makeBoard (str) {
  let result = []
  let arr = str.match(/([1-9]|\-){9}/g)
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i].split(''))
  }
  return result
}
 /*Возвращает массив оставшихся кандидатов*/
// coordinates = [x,y], где x строка, y столбец 

function lineSearch (board, candidates, coordinates) {

 
}

function columnSearch (board, candidates) {

  if (board.length === 1) {
    return board
  }
}

function squareSearch (board, candidates) {

  if (board.length === 1) {
    return board
  }
}

