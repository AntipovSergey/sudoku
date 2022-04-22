// Принимает доску как строку в формате
// вы видите в файле головоломки. Возвращает
// что-то, представляющее доску после
// ваш решатель пытался ее решить.
// То, как вы представляете свою доску, зависит от вас!
function strToArr(puzzle) {
  return puzzle.split('');
}
// strToArr();

function rowToSqr(array) {
  const size = 9; // размер подмассива
  const result = []; // массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(array.length / size); i += 1) {
    result[i] = array.slice((i * size), (i * size) + size);
  }
  return result;
}

function solve(boardString) {
  console.log(strToArr(boardString));
  let arr =  
  console.log(rowToSqr(result[0]));
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
