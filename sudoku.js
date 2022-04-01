// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {
  console.log('first changes');

  function sudokuFill(arr) {
    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 9; j += 1) {

      }
    }


      // // function solveSudoku() {
      // const sudokuBoard = 
      // [
      // [1, 2, 3, 4], 
      // [4, 3, 2, 1], 
      // [3, 1, 4, 2], 
      // [2, 4, 1, 3]
      // ];
      // function isCorrect(arr) {
      //   let reacher = 0;
      //   let reacher0 = 0;
      //   let reacher1 = 0;
      //   let reacher2 = 0;
      //   let blyat = 0;
      //   for (let x = 0; x < 4; x++) {
      //     for (let fillNum1 = 1; fillNum1 < 5; fillNum1++) {
      //       if (arr[x].includes(fillNum1)) {
        for (let i = 0; i <= 2; i += 2) {
          for (let fillNum2 = 1; fillNum2 < 5; fillNum2++) {
            for (let j = 0; j <= 2; j += 2) {
              if ([arr[i][j]].concat([arr[i][j + 1]], [arr[i + 1][j]], [arr[i + 1][j + 1]]).includes(fillNum2)) {
                reacher2++;
              }
            }
          }
      //           if (reacher2 === 16) reacher1++;
      //         }
      //       }
      //     }
      //     if (reacher1 === 4) reacher0++;
      //   }
      //   if (reacher === 4) {
      //     for (let y = 0; y < 4; y++) {
      //       if ([arr[0][y]].concat([arr[1][y]], [arr[2][y]], [arr[3][y]]).includes(1) && [arr[0][y]].concat([arr[1][y]], [arr[2][y]], [arr[3][y]]).includes(2) && [arr[0][y]].concat([arr[1][y]], [arr[2][y]], [arr[3][y]]).includes(3) && [arr[0][y]].concat([arr[1][y]], [arr[2][y]], [arr[3][y]]).includes(4)) {
      //         blyat++;
      //       }
      //     }
      //   }
      //   if (blyat === 4) return true;
      //   return false;
      // }
      // console.log(isCorrect(sudokuBoard));
      // // }
      - функция первого порядка решает судоку, функции на вход подается двумерный массив - задача с "0" или "-" или " " на незаполненных ячейках
      - объявляется вложенная функция проверки, вызывается после заполнения всей доски
      - считывается первая пустая ячейка
      - проверяется на соответствие правилам судоку (ряд, столбец, квадрат) с подстановкой значением от 1 до 9 (на первом подходящем ПРОВАЛИВАЕМСЯ ВО ВЛОЖЕННЫЙ ЦИКЛ? РЕКУРСИЯ?)
      - после заполнения переходим к следующей пустой ячейке
      - если в момент проверки пустой ячейки не удовлетворяет правилам ни одно значение от 1 до 9, нужно вернуться в ячейку, которая заполнялась последней, и подставить следующее значение для нее
      возвращение = возврат массива до заполнения?
      два БАЗОВЫХ случая
      1) если нельзя заполнить ячейку на основании ранее вставленных чисел, возврат массива до заполнения
      2) если массив-судоку решается, вернуть массив
      function a(arr) {
      if proverka polnostiu zapolnen { //basoviy sluchai
      return arr;
      }
      else
      ishem diru - nam nuzhni (x, y)  //suda if??
      for i 1 do 9 {
      if proverkaPravil {
      arr[x][y] = i
      return a(arr) // СЮДА ИФ??
      sdelat' diru x,y
      }
      }
      )
      return false;
      }
      return 
      if a(arr) === true;
      a[i] ===true
      esli 1-9 ne podhjodit gde-to RETURN FALSE
      МОЖЕТ В ФУНКЦИЮ САМУ?
  }

  //
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
