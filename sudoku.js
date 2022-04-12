
//преобразует строку в массив 
let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
 let board = solve(boardString)

 //работает, возвращает массив с массивами 
function solve(boardString) {
  let arr = []
  for(let i = 0; i < boardString.length; i +=9) {
    arr.push(boardString.slice(i, i+9).split(''))
  } 
   return arr
}


 //находит первый свободный элемент и возвращает позицию
 //работает! [g, v]
const cellCheck = (board) => {
for(let i = 0; i < board.length; i++) {
  for(let j = 0; j < board[i].length; j++) {
  if( board[i][j] == '-') return [i, j]
  }
 }
}


function isSolved(board) {

}

//проверяет элемент в строке
//работает, возвращает тру если нет цифры в строке
const row = (board, g, i) => {
  if(board[g].indexOf(i.toString()) == -1) {
  return true 
  } else { return false }
}

// работает, тру если элемента нет в столбце
const column = (board, v, i) => {
  let total = 0;
for(let j = 0; j < board.length; j++) {
  if(Number(board[j][v]) == i) {
      total += 1} 
 } 
  if(total < 1) {return true} else {return false}
}

//работает, если находит цифру в квадрате - возвращает фолс
const square = (board, g, v, i) => {
let g2 = Math.floor(g / 3) *3
let v2 = Math.floor(v / 3) *3
for(let j = g2; j < g2 + 3; j++) {
  for(let y = v2; y < v2 + 3; y++) {
   if(board[j][y] == i)  return false
  }
  return true
 }
}

//добавил число в одну ячейку и тормознул, как перезапустить, продлить цикл 
const cellFill = (board) => {
 const [g, v] = cellCheck(board);
  for (let i = 1; i <= 9; i++) {
    console.log([g, v],'элемент');
      console.log(i, 'i');
    console.log(row(board, g, i));
  if(row(board, g, i) === true){
    console.log(column(board, v, i));
   if(column(board, v, i) === true) {
    console.log(square(board, g, v, i));
    if(square(board, g, v, i) == true) {
      board[g][v] = i;
      break;
    } 
  }
}
}
return board
}; 

console.table(cellFill(board)); 




//приводит к виду доски 
//работает, возвращает таблицу
//привести все цифры к number
function prettyBoard(board) {
  let el = board.join('\n').replaceAll(',','')
  console.table(el);
}


// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
