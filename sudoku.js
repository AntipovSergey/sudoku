let string = "6-873----2-----46-----6482--8---57-19--618--4-31----8-86-2---39-5----1--1--4562--";

//Преобразуем строку в массив массивов
function solve(boardString) {
  let board = [];
  let newArray = boardString.split("");
  for (let i = 0; i < boardString.length; i += 9) {
    board.push(newArray.slice(i, i + 9));
  }
  return board;
}

//Преобразовывает столбец в строку
function checkVertical(board) {
  for (let i = 0; i < board.length; i += 1) {
    const newArr = [];
    for (let j = 0; j < board.length; j += 1) {
      if (newArr.includes(board[j][i])) {
        return false;
      }
      if (!newArr.includes(board[j][i])) {
        if (board[i][j] !== "-") {
          newArr.push(board[j][i]);
        }
      }
    }
  }
  return true;
}

//Проверяет горизонтали
// function checkHorizont(board) {
//   for (let i = 0; i < board.length; i += 3) {
//     const newArr = [];
//     for (let j = 0; j < board.length; j += 1) {
//       if (newArr.includes(board[i][j])) {
//         return false;
//       } if (!newArr.includes(board[i][j])) {
//         if (board[i][j] !== '-') {
//           newArr.push(board[i][j]);
//         }
//       }
//     }
//   }
//   return true;
// }

//преобразует массив в кубы
function kub(arr) {
  let generalArray = [];
  let columnKub = [];
  let arrayCubes = [];
  let assistantArray1 = [];
  let assistantArray2 = [];
  let assistantArray3 = [];
  for (let i = 0; i < arr.length; i++) {
    let firstThreeColumns = arr[i].slice(0, 3);
    let secondThreeColumns = arr[i].slice(3, 6);
    let thirdThreeColumns = arr[i].slice(6, 9);
    assistantArray1.push(firstThreeColumns);
    assistantArray2.push(secondThreeColumns);
    assistantArray3.push(thirdThreeColumns);
  }
  generalArray.push(assistantArray1);
  generalArray.push(assistantArray2);
  generalArray.push(assistantArray3);
  for (let i = 0; i < generalArray.length; i++) {
    for (let j = 0; j < generalArray[i].length; j++) {
      columnKub.push(generalArray[i][j].slice(0, 3));
    }
  }
  for (let i = 0; i < columnKub.length; i += 3) {
    let swap = columnKub[i].concat(columnKub[i + 1], columnKub[i + 2]);
    arrayCubes.push(swap);
  }
  return arrayCubes;
}
let arrCubes = kub(solve(string));
function verticalCheck(board) {
  let verticalString = [];
  for (let i = 0; i < board.length; i += 1) {
    let value = [];
    verticalString.push(value);
    for (let j = 0; j < board[i].length; j += 1) {
      value.push(board[j][i]);
    }
  }
  return verticalString;
}
let arrVertical = verticalCheck(solve(string));

//находит индекс куба
function findIndexCube(i, j) {
  if (0 <= i && i <= 2 && 0 <= j && j <= 2) {
    return 0;
  } else if (3 <= i && i <= 5 && 0 <= j && j <= 2) {
    return 1;
  } else if (6 <= i && i <= 8 && 0 <= j && j <= 2) {
    return 2;
  } else if (0 <= i && i <= 2 && 3 <= j && j <= 5) {
    return 3;
  } else if (3 <= i && i <= 5 && 3 <= j && j <= 5) {
    return 4;
  } else if (6 <= i && i <= 8 && 3 <= j && j <= 5) {
    return 5;
  } else if (0 <= i && i <= 2 && 6 <= j && j <= 8) {
    return 6;
  } else if (3 <= i && i <= 5 && 6 <= j && j <= 8) {
    return 7;
  } else if (6 <= i && i <= 8 && 6 <= j && j <= 8) {
    return 8;
  }
}

//Находит пустые строки
function checkOne(arr, index) {
  const newArr = [];
  for (let j = 0; j < 9; j += 1) {
    if (newArr.includes(arr[index][j])) {
      return false;
    }
    if (!newArr.includes(arr[index][j])) {
      if (arr[index][j] !== "-") {
        newArr.push(arr[index][j]);
      }
    }
  }
  return newArr;
}

//Заполняет судоку
function main(board) {
  let changedBoard = JSON.parse(JSON.stringify(board));
  let arrAllNumbers = ["6", "3", "8", "9", "1", "7", "4", "2", "5"];
  for (let i = 0; i < changedBoard.length; i++) {
    for (let j = 0; j < changedBoard.length; j++) {
      if (changedBoard[i][j] === "-") {
        let string = i;
        let vertic = j;
        let cubick = findIndexCube(i, j);
        let arrStr = checkOne(changedBoard, string);
        let arrVert = checkOne(verticalCheck(board), vertic);
        let arrCub = checkOne(kub(board), cubick);
        let concatArr = arrStr.concat(arrVert, arrCub);
        let uniqNumbers = [];
        for (let k = 0; k < concatArr.length; k++) {
          if (!uniqNumbers.includes(concatArr[k])) {
            uniqNumbers.push(concatArr[k]);
          }
        }
        if (uniqNumbers.length === 8) {
          for (let d = 0; d < arrAllNumbers.length; d++) {
            if (!uniqNumbers.includes(arrAllNumbers[d])) {
              changedBoard[i][j] = arrAllNumbers[d];
            }
          }
        }
      }
    }
  }
  console.table(changedBoard);
  return changedBoard;
}
let secondBoard = main(solve(string));
let therdBoard = main(secondBoard);
let fourBoard = main(therdBoard);
let fiveBoard = main(fourBoard);
let sixBoard = main(fiveBoard);
let sevenBoard = main(sixBoard);

main(sevenBoard);
