let arr = [[1, 2, 33, 4, 5, 6, 7, 8, 9],
[1, 2, 33, 4, 5, 6, 7, 8, 9],
[1, 2, 33, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9],
[1, 2, 3, 4, 5, 6, 7, 8, 9]
]

function convertToSquare3x3Horizontal(array) {
  let array2 = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {   //первый блок
      array2.push((array[i])[j])
    }
  }
  // здесь searchStringMissingOneNumber и searchAndAddedOneMissingNumber
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {   //первый блок со вставленной
      ((array[i])).push(array2)
    }
  }

  console.log(array);
  
  //  array2 = [];
  // for (let i = 3; i < 6; i++) {
  //   for (let j = 0; j < 3; j++) {    //четвертый блок
  //     array2.push((array[i])[j])
  //   }
  // }
  // // здесь searchStringMissingOneNumber и searchAndAddedOneMissingNumber
  

  // array2 = [];
  // for (let i = 6; i < 9; i++) {
  //   for (let j = 0; j < 3; j++) {  // седьмой блок
  //     array2.push((array[i])[j])
  //   }
  // }
  // // здесь searchStringMissingOneNumber  и searchAndAddedOneMissingNumber
  


  // array2 = [];
  // for (let i = 0; i < 3; i++) {
  //   for (let j = 3; j < 6; j++) { // второй
  //     array2.push((array[i])[j])
  //   }
  // }
  // // здесь searchStringMissingOneNumber и searchAndAddedOneMissingNumber
  

  // array2 = [];
  // for (let i = 3; i < 6; i++) {
  //   for (let j = 3; j < 6; j++) { // пятый
  //     array2.push((array[i])[j])
  //   }
  // }
  // // здесь searchStringMissingOneNumber и searchAndAddedOneMissingNumber
  

  // array2 = [];
  // for (let i = 6; i < 9; i++) {
  //   for (let j = 3; j < 6; j++) { // восьмой
  //     array2.push((array[i])[j])
  //   }
  // }
  // // здесь searchStringMissingOneNumber и searchAndAddedOneMissingNumber
  


  // array2 = [];
  // for (let i = 0; i < 3; i++) {
  //   for (let j = 6; j < 9; j++) { // третий
  //     array2.push((array[i])[j])
  //   }
  // }
  // // здесь searchStringMissingOneNumber и searchAndAddedOneMissingNumber
  

  // array2 = [];
  // for (let i = 3; i < 6; i++) {
  //   for (let j = 6; j < 9; j++) { // шестой
  //     array2.push((array[i])[j])
  //   }
  // }
  // // здесь searchStringMissingOneNumber и searchAndAddedOneMissingNumber
  

  // array2 = [];
  // for (let i = 6; i < 9; i++) {
  //   for (let j = 6; j < 9; j++) { // девятый
  //     array2.push((array[i])[j])
  //   }
  // }
  // // здесь searchStringMissingOneNumber, если есть, то 
  // // вставляем недостающую и возвращаем 
  


}

convertToSquare3x3Horizontal(arr); 



