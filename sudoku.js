const fs = require('fs');

const boardStringVar = fs.readFileSync('./sudoku-puzzles.txt', 'utf-8');
const boardString = boardStringVar.split('\n').map((el) => [...el]);
//console.table(boardString[0]);
//console.log(boardString[0],'boardString[0]');

const sudocuFild = (strArr) => {
let arrayIndex = -1;
  return strArr.reduce((final, curr, i) => {
    if (i % 9 === 0) {
      final.push([curr]);
      arrayIndex++;
    } else {
      final[arrayIndex].push(curr);
    }
    return final;
  }, []);
}
console.log(sudocuFild(boardString[13]))
console.log(boardString[14]);



// Принимает доску как строку в формате
// вы видите в файле головоломки. Возвращает
// что-то, представляющее доску после
// ваш решатель пытался ее решить.
// То, как вы представляете свою доску, зависит от вас!

function solve(sudocuFild) {
  const size = 9;
  const boxSize = 3;

  const findEmpty = (sudocuFild) => {
    for(let r = 0; r < size; r += 1){
      for(let c = 0; c < size; c += 1){
        if(sudocuFild[r][c] === '-'){
          return [r,c];
        }
      }
    }
    return null;
  }
  const validate = (num, pos, sudocuFild) => {
  const [r,c] = pos;


  // проверка строк
  for(let i = 0; i < size; i += 1){
    if(sudocuFild[r][c] === num){

    }
  }
}


  const solveSud = () => {
   const currPos = findEmpty(sudocuFild);
   if(currPos === null){
     return true;
   }

   for(let i = 1; i < size + 1; i += 1){
     const currNum = i.toString();
     const isValid = validate(currNum, currPos, sudocuFild);
   }

   return false;
  }
 solveSud();
  return sudocuFild;
}

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
  solve,
  isSolved,
  prettyBoard,
};
