const boardStr = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
const candidates = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const testBoard = makeBoard(boardStr)
const coordinates = [0, 1]

function makeBoard (str) {
  let result = []
  let board = str.match(/([1-9]|\-){9}/g)
  for(let i = 0; i < board.length; i++){
    result.push(board[i].split(''))
  }
  return result
}

// coordinates = [x,y], где x строка, y столбец 

console.table(testBoard)
console.log(coordinates)
console.log(squareSearch(testBoard, candidates, coordinates))


function squareSearch (board, candidates, coordinates) {
  if (candidates.length === 1) {
    return candidates
  }
  let x = coordinates[0] // это внешний массив
  let y = coordinates[1] // это внутренний
  let square = []
  switch (x){
    case 0 : // -------------------------------------- вот здесь первая треть
    case 1 :
    case 2 :
      switch (y){
        case 0 :
        case 1 :
        case 2 : {
          for (let i = 0; i < 3; i++){
            square.push(board[i][0])
            square.push(board[i][1])
            square.push(board[i][2])
          }          
        } break;
        case 3 :
        case 4 :
        case 5 : {
          for (let i = 0; i < 3; i++){
            square.push(board[i][3])
            square.push(board[i][4])
            square.push(board[i][5])
          }          
        } break;
        case 6 :
        case 7 :
        case 8 : {
          for (let i = 0; i < 3; i++){
            square.push(board[i][6])
            square.push(board[i][7])
            square.push(board[i][8])
          }          
        } break;        
      } break;
    case 3 : // -------------------------------------- вот здесь вторая треть
    case 4 :
    case 5 :
      switch (y){
        case 0 :
        case 1 :
        case 2 : {
          for (let i = 3; i < 6; i++){
            square.push(board[i][0])
            square.push(board[i][1])
            square.push(board[i][2])
          }          
        } break;
        case 3 :
        case 4 :
        case 5 : {
          for (let i = 3; i < 6; i++){
            square.push(board[i][3])
            square.push(board[i][4])
            square.push(board[i][5])
          }          
        } break;
        case 6 :
        case 7 :
        case 8 : {
          for (let i = 3; i < 6; i++){
            square.push(board[i][6])
            square.push(board[i][7])
            square.push(board[i][8])
          }          
        } break;        
      } break;
    case 6 : // -------------------------------------- вот здесь третья треть
    case 7 :
    case 8 :
      switch (y){
        case 0 :
        case 1 :
        case 2 : {
          for (let i = 6; i < 9; i++){
            square.push(board[i][0])
            square.push(board[i][1])
            square.push(board[i][2])
          }          
        } break;
        case 3 :
        case 4 :
        case 5 : {
          for (let i = 6; i < 9; i++){
            square.push(board[i][3])
            square.push(board[i][4])
            square.push(board[i][5])
          }          
        } break;
        case 6 :
        case 7 :
        case 8 : {
          for (let i = 6; i < 9; i++){
            square.push(board[i][6])
            square.push(board[i][7])
            square.push(board[i][8])
          }          
        } break;        
      } break;
    }

    // теперь отбираем нужное
    result = []
    for (let i = 0; i < candidates.length; i++) {
      if(!square.includes(candidates[i])){
        result.push(candidates[i])
      }
    }
    return result
  }
  
