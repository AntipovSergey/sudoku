boardString = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"
// boardString = "---------------------------------------------------------------------------------"

function parsing(boardString) {
  const newStr = boardString.replace(/-/g, "0");
  let arr = newStr.split("");
  let newArr = [];
  for (let i = 0; i < 9; i++) {
    newArr.push(arr.splice(0,9));
  }
  return newArr;
}
console.log(parsing(boardString));

const arr = parsing(boardString);

function che (arr) {
  const num = 3;
  for (let i = 0; i < arr.length; i++) {
    return arr.findIndex((el) => el = num);
  }
}

console.log(che(arr));




// console.log(parsing(boardString));
// let board = parsing(boardString);

// function prettyBoard(board) {
//   const newArr = board.flat();
//   for (let i = 0; i < newArr.length; i++) {
//     return newArr.join("")
//   }
// }

// console.log(prettyBoard(board));

module.exports = {
  parsing
}
