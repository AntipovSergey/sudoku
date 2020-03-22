//Формирование таблицы
function solve(boardString) {
  let board = [[],[],[],[],[],[],[],[],[]];
  let sch = 0;
  for(let stroka = 0; stroka<9; stroka ++){
    for(let pozition =0;pozition<9; pozition++){
      board[stroka][pozition] = boardString[sch]
      sch++;
    }
  } 
return board;
}
/////////////////////////////////////////////////////////////////////
//Поиск отсутствий
function finde_tire(board){
  for(let vtf = 0; vtf<1000; vtf++){
    for(let stroka = 0; stroka < 9; stroka++){
    for(let pozition = 0; pozition<9;pozition++){
      if(board[stroka][pozition]==="-"){
        sydoky(board,stroka,pozition)
      };
    }
  }
  }
  console.table(board)
}
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
//поиск отсутствующих цифр в строке
function proverka_stroka(board,stroka){
let line = ['1','2','3','4','5','6','7','8','9']

  for(let i = 0; i<9; i++){
    for(let b = 0; b< 9; b++)
    {
      if(board[stroka][i] === line[b]) line[b]=0;
    }  
  }

return line.filter((a)=>{return a!=0});  
}
////////////////////////////////////////////////////////////////////
//поиск отсутствующих цифр по столбцу
function proverka_stolb(board,pozition){
  let stolb = ['1','2','3','4','5','6','7','8','9']

  for(let i = 0; i<9; i++){
    for(let b = 0; b< 9; b++)
    {
      if(board[i][pozition] === stolb[b]) stolb[b]=0;
    }  
  }

return stolb.filter((a)=>{return a!=0});  
}
//////////////////////////////////////////////////////////////////
///Исключение повторяющихся цифр(из строк и столбцов) и получение масива возможных
function sort1(board,stroka,pozition){
  let arr1 = proverka_stroka(board,stroka)
  let arr2 = proverka_stolb(board,pozition)
  for(let i = 0;i<arr1.length;i++){
    for(let b = 0; b<arr2.length; b++){
      if(arr1[i]===arr2[b])arr2[b]=0
    }
  }
 return arr1.concat(arr2).filter((a)=>{return a!=0});
}
/////////////////////////////////////////////////////////////////////
///Возвращает числа, которые могут встать на место пропуска(учитывая строки и столбцы)
function sort2(board,stroka,pozition){
  let test = sort1(board,stroka,pozition)
  let arr1 = board[stroka].filter((arg)=>{return arg != "-"})
  let arr2 = []
  for(let i = 0; i<9; i++){
    arr2.push(board[i][pozition])
  }
  let gotovo = arr1.concat(arr2).filter((arg)=>{return arg != "-"})
  
  for(let i = 0;i<test.length;i++){
    for(let b = 0; b<gotovo.length; b++){
      if(test[i]===gotovo[b])test[i]=0
    }
  }
 return test.filter((a)=>{return a!=0}); 
}
////////////////////////////////////////////////////////////////////////
////
function sydoky(board,stroka,pozition){
  let variant = sort2(board,stroka,pozition);
  
  if(variant.length == 1){
    board[stroka][pozition]=variant[0];
  }
}
console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))
console.log(finde_tire(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--')))


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
	solve: solve,
	isSolved: isSolved,
	prettyBoard: prettyBoard
}
