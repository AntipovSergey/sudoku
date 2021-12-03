// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
// Принимает доску как строку в формате
// вы видите в файле головоломки. Возврат
// что-то, представляющее доску после
// ваш решатель пытался решить эту проблему.
// Как вы представляете свою доску, зависит от вас!



function solve(boardString) {
  const size = 9
  const boxSize = 3

  const findEmpty = (boardString) => {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (boardString[r][c] === '.') {
          return [r, c];
        }
      }
  }
  return null;
}

  const validate = (num, pos, boardString) => {
    const [r, c] = pos;

    //Проверка строк
    for (let i = 0; i < size; i++) {
      if (boardString[i][c] === num && i !== r) {
        return false;
      }
    }

        //Проверка столбцов
    for (let i = 0; i < size; i++) {
      if (boardString[r][i] === num && i !== c) {
        return false;
      }
    }

    //Проверка внутренних квадратов
    const boxRow = Math.floor(r / boxSize) * boxSize;
    const boxCol = Math.floor(c / boxSize) * boxSize;

    for (let i = boxRow; i < boxRow + boxSize; i++) {
      for (let j = boxCol; j < boxCol + boxSize; j++) {
        if (boardString[i][j] === num && i !== r && i !== c) {
          return false;
        }
      }
    }
    return true;
  }

  const resolve = () => {
    const currPos = findEmpty(boardString);

    if (currPos === null) {
      return true;
    }

    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = validate(currNum, currPos, boardString);

      if (isValid) {
        const [x, y] = currPos;
        boardString[x][y] = currNum;
        
        if (resolve()) {
          return true;
        }
        
        boardString[x][y] = '.';
      }
    }
    return false;
  }
  resolve();
  return boardString;
}










// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
// Возвращает логическое значение, указывающее,
// или нет решена предоставленная плата.
// Плата ввода будет в любом
// возврат из формы `resolve`.

// let board = [
//   [2,3,8,9,6,5,7,1,4],
//   [7,5,9,4,1,3,6,8,2],
//   [4,1,6,2,7,8,9,5,3],
//   [9,4,5,1,3,6,2,7,8],
//   [6,8,7,5,2,4,1,3,9],
//   [3,2,1,8,9,7,4,6,5],
//   [1,6,2,3,5,9,8,4,7],
//   [5,7,4,6,8,2,3,9,1],
//   [8,9,3,7,4,1,5,2,6],
// ];

// //Функция для нахождения чисел от 1 до 9 во входящем массиве
// //Возвращает false, если не найдено какое либо число 
// function isSolved (input) {
//   for (let i=1; i<=9; i++) {
//       if (input.indexOf(i) == -1) {
//           return false;
//       }
//   }
  
//   return true;
// }

// //перевернуть массив для проверки строк
// function reversed(arr) {
//   for (x = 0; x < 9; x++)
//       for (y = x + 1; y < 9; y++) {
//           let temp = arr[x][y];
//           arr[x][y] = arr[y][x];
//           arr[y][x] = temp;
//       }
//   return arr;
// };

// //создание массива из квадрата 3x3 
// // X и Y координаты верхнего левого угла квадрата
// function box(Y, X, arr) {
//   let output = [];
// for (let i=0; i<3; i++) {
//   for (let j=0; j<3; j++) {
//           output.push(arr[Y+i][X+j]);
//   };
//   };
//   return output;
// };

// var transposedBoard = reversed(board);

// //проверка массива board
// for (let i=0; i<9; i++) {
//   //сначала проверяем правильность строк и столбцов
//   if (!isSolved(board[i]) || !isSolved(transposedBoard[i])) {
//       console.log("некорректно");
//       return false;
//   }

//   //проверка квадратов 3x3
// let y=Math.floor(i/3)*3;
//   let x=(i%3)*3;
//   if (!isSolved(box(y,x,board))) {
//       console.log("некорректно");
//       return false; 
//   }
// };


// console.log("корректно");
// return true;


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
// Принимает доску в той или иной форме и
// возвращает хорошо отформатированную строку
// для вывода на экран.
// Плата ввода будет в любом
// возврат из формы `resolve`.

let board =
  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';

function prettyBoard(board) {
  let arr = new Array(9);
  let char = 0;
  for (let index = 0; index < arr.length; index++) {
    arr[index] = [];
    for (let i = 0; i < 9; i++) {
      if (board[char] != '-') {
        arr[index].push(board[char]);
      } else {
        arr[index].push('.');
      }
      char++;
    }
  }
  return arr;
}
// console.log(prettyBoard(board));



// Exports all the functions to use them in another file.
// Экспортирует все функции, чтобы использовать их в другом файле.
module.exports = {
	// solve: solve,
	// isSolved: isSolved,
	prettyBoard: prettyBoard
}
