// let sudokuRow = [
//   [4,5,9,3,7,2,8,6,1],
//   [6,7,2,1,9,8,4,5,3],
//   [1,8,3,6,4,5,2,9,7],
//   [7,4,1,2,8,6,5,3,9],
//   [3,9,8,4,5,7,6,1,2],
//   [2,6,5,9,1,3,7,4,8],
//   [9,1,7,8,6,4,3,2,5],
//   [8,2,6,5,3,9,1,7,4],
//   [5,3,4,7,2,1,9,8,6]
// ];                            // полученный массив строк


function getSolved(check) {
  let count = 0;
  do {
      let result = arrPrintBoard(fillRandomNums(string));
      test(result);
      if (test(result) == true)  return result;
      count++;
      if (count > 10000) break;
  } while (count);
  return count
}

// const string1 = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
const string = '1458-2673-9317-425276435819519247386762583194384961752957614238438729561621358947'
const check = fillRandomNums(string);
function fillRandomNums(boardString) {
  const getString = boardString.split('');
  for (let index = 0; index < getString.length; index++) {
      if (getString[index] === '-') {
          getString[index] = Math.floor(Math.random() * 9) + 1;
      }
  }
return (getString.map((str) => parseInt(str)));
}

const sudokuRow = arrPrintBoard(check);
function arrPrintBoard(array) {
  let size = 9; //размер подмассива
  let subarray = []; //массив в который будет выведен результат.
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
      subarray[i] = array.slice((i * size), (i * size) + size);
  } return subarray;
}

function test(sudokuRow) {
   const arrayColumn = (arr, n) => arr.map(x => x[n]);  // получение массива столбцов из массива строк
  let sudokuColumn = [];
  for (let i = 0; i < sudokuRow.length; i++) {
      sudokuColumn.push(arrayColumn(sudokuRow, i))
  }
  let sudokuSq = [];                                           // получение массива квадратов из массива строк
  let arrSq1 = [];
  let arrSq2 = [];
  let arrSq3 = [];
  for (let i = 0; i < sudokuRow.length - 6; i++) {
      arrSq1.push(sudokuRow[i][0], sudokuRow[i][1], sudokuRow[i][2]);
      arrSq2.push(sudokuRow[i][3], sudokuRow[i][4], sudokuRow[i][5]);
      arrSq3.push(sudokuRow[i][6], sudokuRow[i][7], sudokuRow[i][8]);
  }
  let arrSq4 = [];
  let arrSq5 = [];
  let arrSq6 = [];
  for (let i = 3; i < sudokuRow.length - 3; i++) {
      arrSq4.push(sudokuRow[i][0], sudokuRow[i][1], sudokuRow[i][2]);
      arrSq5.push(sudokuRow[i][3], sudokuRow[i][4], sudokuRow[i][5]);
      arrSq6.push(sudokuRow[i][6], sudokuRow[i][7], sudokuRow[i][8]);
  }
  let arrSq7 = [];
  let arrSq8 = [];
  let arrSq9 = [];
  for (let i = 6; i < sudokuRow.length; i++) {
      arrSq7.push(sudokuRow[i][0], sudokuRow[i][1], sudokuRow[i][2]);
      arrSq8.push(sudokuRow[i][3], sudokuRow[i][4], sudokuRow[i][5]);
      arrSq9.push(sudokuRow[i][6], sudokuRow[i][7], sudokuRow[i][8]);
  }
  sudokuSq.push(arrSq1, arrSq2, arrSq3, arrSq4, arrSq5, arrSq6, arrSq7, arrSq8, arrSq9)
  // итого у нас 3 массива sudokuRow, sudokuColumn, sudokuSq
 
  let compare = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  for (let i = 0; i < sudokuRow.length; i++) {
      for (let j = 0; j < compare.length; j++) {
          if (sudokuRow[i].join().indexOf(compare[j]) == -1) return false;
      }
  }
  for (let i = 0; i < sudokuColumn.length; i++) {
      for (let j = 0; j < compare.length; j++) {
          if (sudokuColumn[i].join().indexOf(compare[j]) == -1) return false;
      }
  }
  for (let i = 0; i < sudokuSq.length; i++) {
      for (let j = 0; j < compare.length; j++) {
          if (sudokuSq[i].join().indexOf(compare[j]) == -1) return false;
      }
  }
  return true; 
}
console.log(getSolved())
