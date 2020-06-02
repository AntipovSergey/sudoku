function getSolved(check) {
  let count = 0;
  do {
      let result = arrPrintBoard(fillRandomNums(string));
      test(result);
      if (test(result) == true) return result.join('\n');
      count++;
      if (count > 2000000) break;
  } while (count);
  return count
}

const string = '13-2-------1--34';
const check = fillRandomNums(string);
function fillRandomNums(boardString) {
  const getString = boardString.split('');
  for (let index = 0; index < getString.length; index++) {
      if (getString[index] === '-') {
          getString[index] = Math.floor(Math.random() * 4) + 1;
      }
  }
return (getString.map((str) => parseInt(str)));
}

const sudokuRow = arrPrintBoard(check);
function arrPrintBoard(array) {
  let size = 4; //размер подмассива
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
  for (let i = 0; i < sudokuRow.length - 2; i++) {
      arrSq1.push(sudokuRow[i][0], sudokuRow[i][1]);
      arrSq2.push(sudokuRow[i][2], sudokuRow[i][3]);
  }
  let arrSq3 = [];
  let arrSq4 = [];
  for (let i = 2; i < sudokuRow.length; i++) {
      arrSq3.push(sudokuRow[i][0], sudokuRow[i][1]);
      arrSq4.push(sudokuRow[i][2], sudokuRow[i][3]);
  }

  sudokuSq.push(arrSq1, arrSq2, arrSq3, arrSq4)

  let compare = ['1', '2', '3', '4'];
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
