// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
const arr1 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'
//Преобразовали строку в многомерный массив
let arr=[]
for (let i=0;i<9; i++){
  arr[i]=arr1.substr(i*9,9);
}
   for (let j=0;j<arr.length;j++){
   arr[j]=arr[j].split('')
   } 
// console.log(arr)

//Решение самой функции
function solve(arr) {
let strH = '';
  let strV = '';
  const arrH = [];
  const arrV = [];
//Горизонтальные массивы
  for (let i = 0; i < arr.length; i++) {
    strH = arr[i].join('');
    arrH.push(strH);
//Вертикальные массивы
    const columnArray = [];

    for (let j = 0; j < 9; j++) {
      columnArray.push(arr[j][i]);
    }

    const columnString = columnArray.join('');
    arrV.push(columnString);
  }

  console.log(arrV)

  strH;
  strV;

  console.log('arrH:', arrH);
  console.log('arrV:', arrV);
  //Выполняем проверку
  const rangeToCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const exclusionNums = []; 

  // for (let o = 0; o < 9; o++) {
  //   if (!arr.includes(rangeToCheck[o])) {
  //     exclusionNums.push(rangeToCheck[o]);
  //   }
  // }
  // console.log(exclusionNums); // результат от строки
}

console.log(solve(arr))



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
