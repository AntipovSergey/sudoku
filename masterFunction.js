const {isEmpty} = require('./isEmpty')
// const {isHorizontal} = require('./isHorizontal')
// const {isVertical} = require('./isVertical')
// const {isBox} = require('./isBox')
const {fillBlock} = require('./fillBlock')

// ---------------------------------------------------------------------------------------------------
// Перевод строки в двумерный массив

let sudoku = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"

let size = 9; //размер подмассива
let subarray = []; //массив в который будет выведен результат.

function sudokuContainer(sudoku) {
  for (let i = 0; i < Math.ceil(sudoku.length/size); i++){
      subarray[i] = sudoku.slice((i*size), (i*size) + size).split('');
  }
  return subarray
}

// ------------------------------------------------------------------------------------------------------
// Мастер функция

function walker(sudoku) {
  let sudokuArray = sudokuContainer(sudoku)
  sudokuArray.forEach(element => {
    console.log(element);
    element.forEach(el => {
      // if(isEmpty(el)) {
      //   if(isHorizontal() && isVertical() && isBox()) {
      //     fillBlock()
      //   } 
      // }
    });
  });
}

console.log(walker(sudoku));

