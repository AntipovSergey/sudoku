// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
let borderString = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
function solve(boardString) {
  let bigArray = []
  const horizont = []; // Горизонатльные строки
  const num = boardString.replace(/-/g, 0);
  const row0 = horizont.push(num.slice(0, 9).split("").map((el) => Number(el)));
  const row1 = horizont.push(num.slice(9, 18).split("").map((el) => Number(el)));
  const row2 = horizont.push(num.slice(18, 27).split("").map((el) => Number(el)));
  const row3 = horizont.push(num.slice(27, 36).split("").map((el) => Number(el)));
  const row4 = horizont.push(num.slice(36, 45).split("").map((el) => Number(el)));
  const row5 = horizont.push(num.slice(45, 54).split("").map((el) => Number(el)));
  const row6 = horizont.push(num.slice(54, 63).split("").map((el) => Number(el)));
  const row7 = horizont.push(num.slice(63, 72).split("").map((el) => Number(el)));
  const row8 = horizont.push(num.slice(72, 81).split("").map((el) => Number(el)));
  const colArr = []; // Временное хранилище столбцов
  for (let i = 0; i < horizont.length; i++) {
    for (let j = 0; j < horizont.length; j++) {
      colArr.push(horizont[j][i]);
    }
  }
  const vert = []; // Вертикальные строки
  const col0 = vert.push(colArr.slice(0, 9));
  const col1 = vert.push(colArr.slice(9, 18));
  const col2 = vert.push(colArr.slice(18, 27));
  const col3 = vert.push(colArr.slice(27, 36));
  const col4 = vert.push(colArr.slice(36, 45));
  const col5 = vert.push(colArr.slice(45, 54));
  const col6 = vert.push(colArr.slice(54, 63));
  const col7 = vert.push(colArr.slice(63, 72));
  const col8 = vert.push(colArr.slice(72, 81));
  // console.table (vert);
  bigArray.push (horizont, vert)
  return bigArray
}
// console.table(
//   solve(
//     "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
//   )
// );
// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(solve) {
 const horizont = solve[0]
 const vert = solve[1]
 let resArr = solve[1]
 
 for(let i = 0; i < horizont[0].length; i++){
   if (horizont[0][i] !== 0){
     continue
   } else {
    let n = 1
    let temp1 = horizont[0].includes(n)
    console.log (temp1)
    let temp2 = vert[0].includes(n)
    if (temp1 === true || temp2 === true) {
      n++
    }
    resArr[0][i] = n
   }
 }

 for(let i = 0; i < horizont[1].length; i++){
  if (horizont[1][i] !== 0){
    continue
  } else {
   let n = 1
   let temp1 = horizont[1].includes(n)
   let temp2 = vert[1].includes(n)
   if (temp1 === true || temp2 === true) {
     n++
   }
   resArr[1][i] = n
  }
}


  return resArr
}
console.table (isSolved (solve(borderString)))
// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {}
// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard,
};
