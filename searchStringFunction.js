function creatBord(str) {
  let stringToArr = str.split('');
  // console.log(stringToArr);
  let newArr = [];
  newArr.push(stringToArr.slice(0,9));
  newArr.push(stringToArr.slice(9,18));
  newArr.push(stringToArr.slice(18,27));
  newArr.push(stringToArr.slice(27,36));
  newArr.push(stringToArr.slice(36,45));
  newArr.push(stringToArr.slice(45,54));
  newArr.push(stringToArr.slice(54,63));
  newArr.push(stringToArr.slice(63,72));
  newArr.push(stringToArr.slice(72,81));
 
  console.table(newArr);
  
  digits = [1,2,3,4,5,6,7,8,9]
  // newDigits = []
  for (let i = 0; 9 > i; i++){
    for (let j = 0; 9 > j; j++){
      if (newArr[i][j] == '-'){
        for (let k = 0; 9 > k; k++){
          console.log(newArr[i][k], newArr[k][j])
          //if (newArr[i] && newArr[][j] === )
        }

        console.log(i, j)
      }
    }
  }
  //console.log(newDigits) 
}

creatBord('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--');
// function solve() {
//   var changed = 0;
//   do {
//     // сужаем множество значений для всех нерешенных чисел
//     changed = updateSuggests();
//     steps++;
//     if ( 81 < steps ) {
//       // Зашита от цикла
//       break;
//     }
//   } while (changed);
// }; // end of method solve()
 
// /**
// * Обновляем множество предположений
// *
// * Проверяем основные правила -- уникальность в строке, столбце и секции.
// */
// function updateSuggests() {
//   var changed = 0;
//   var buf = arrayDiff(solved[1][3][2], rowContent(1));
//   buf = arrayDiff(buf, colContent(3));
//   buf = arrayDiff(buf, sectContent(1, 3));
//   for ( var i=0; i<9; i++) {
//     for ( var j=0; j<9; j++) {
//       if ( 'unknown' != solved[i][j][1] ) {
//         // Здесь решение либо найдено, либо задано
//         continue;
//       }
//       // "Одиночка"
//       changed += solveSingle(i, j);
//       // "Скрытый одиночка"
//       changed += solveHiddenSingle(i, j);
//     }
//   }
//   return changed;
// }; // end of method updateSuggests()

// /**
// * Метод "Одиночка"
// */
// function solveSingle(i, j) {
//   solved[i][j][2] = arrayDiff(solved[i][j][2], rowContent(i));
//   solved[i][j][2] = arrayDiff(solved[i][j][2], colContent(j));
//   solved[i][j][2] = arrayDiff(solved[i][j][2], sectContent(i, j));
//   if ( 1 == solved[i][j][2].length ) {
//     // Исключили все варианты кроме одного
//     markSolved(i, j, solved[i][j][2][0]);
//     return 1;
//   }
//   return 0;
// }; // end of method solveSingle()

// var in_val = [
//   [0, 0, 3, 0, 0, 8, 2, 0, 4],
//   [0, 2, 0, 0, 6, 4, 0, 1, 0],
//   [9, 0, 0, 0, 0, 0, 0, 0, 8],
//   [0, 8, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 6, 9, 8, 0],
//   [0, 0, 0, 0, 0, 0, 5, 0, 0],
//   [0, 0, 4, 9, 0, 7, 0, 3, 0],
//   [8, 0, 0, 0, 0, 1, 0, 0, 0],
//   [0, 7, 0, 0, 5, 0, 4, 0, 0]
// ];
 
// var sudoku = new Sudoku(in_val);
// document.write(sudoku.html());
