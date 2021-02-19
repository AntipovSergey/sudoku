let sudoku = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--"

let size = 9; //размер подмассива
let subarray = []; //массив в который будет выведен результат.

function sudokuCreator(sudoku) {
  for (let i = 0; i < Math.ceil(sudoku.length/size); i++){
      subarray[i] = [sudoku.slice((i*size), (i*size) + size).split('')];
  }
  return subarray
}

console.log(sudokuCreator(sudoku));
