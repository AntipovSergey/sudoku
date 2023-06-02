const input =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";

const input1 =
  "----------2-65-------18--4--9----6-4-3---57-------------------73------9----------";
const input2 =
  "---------------------------------------------------------------------------------";

function arrayIsArray(str) {
  // собираем массив с девятью подмассивами
  let newArr = [];
  let arr = str.split(""); //---преобразуем строку в массив
  for (let i = 0; i < arr.length; i += 9) {
    //шаг 9
    let subArray = arr.slice(i, i + 9); // последний аргумент задает размер
    newArr.push(subArray); // пушим отрезанный массив в новый массив
  }
  return newArr;
}

//console.log(arrayIsArray(input))
function emptyCoordinates(arr) {
  // собираем индексы
  for (let r = 0; r < arr.length; r++) {
    for (let c = 0; c < arr[r].length; c++) {
      if (arr[r][c] == "-") {
        return [r, c];
      }
    }
  }
  return null;
}

function checkAll(num, pos, board) {
  const [r, c] = pos;
  //1 row  проверка по строкам
  for (let i = 0; i < 9; i++) {
    if (board[i][c] == num) {
      return false;
    }
  }
  //2 colum проверка по колонкам
  for (let i = 0; i < 9; i++) {
    if (board[r][i] == num) {
      return false;
    }
  }

  //3 box
  const boxRow = Math.floor(r / 3) * 3;
  const boxCol = Math.floor(c / 3) * 3;

  for (let i = boxRow; i < boxRow + 3; i++) {
    for (let j = boxCol; j < boxCol + 3; j++) {
      if (board[i][j] == num) {
        return false;
      }
    }
  }

  return true;
}

function sudoku(arr) {
//   console.table(arr);
  const coordinates = emptyCoordinates(arr);

  if (!coordinates) {
    return true;
  }
  const [row, col] = coordinates;
  for (let i = 1; i <= 9; i++) {
    if (checkAll(i, coordinates, arr)) {
      //   const [row, col] = coordinates;
      arr[row][col] = i;

      if (sudoku(arr)) {
        return true;
      }
      arr[row][col] = "-";
    }
  }
  return false;
}

const sudokuTable = arrayIsArray(input2);
console.table(sudoku(sudokuTable));
