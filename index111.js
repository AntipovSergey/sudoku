let array =
[
    ['1', '-', '5', '8', '-', '2', '-', '-', '-'],
    ['-', '9', '-', '-', '7', '6', '4', '-', '5'],
    ['2', '-', '-', '4', '-', '-', '8', '1', '9'],
    ['-', '1', '9', '-', '-', '7', '3', '-', '6'],
    ['7', '6', '2', '-', '8', '3', '-', '9', '-'],
    ['-', '-', '-', '-', '6', '1', '-', '5', '-'],
    ['-', '-', '7', '6', '-', '-', '-', '3', '-'],
    ['4', '3', '-', '-', '2', '-', '5', '-', '1'],
    ['6', '-', '-', '3', '-', '8', '9', '-', '-'],
  ];

//  console.log(array[0].filter((el) => el != '-')); 
// console.log(array[0].indexOf('-'));

 function posOfFirstDyrka(array){
    posOfdyrka = [];
    for (let i = 0; i < array.length; i++) {
    if (array[i].indexOf('-') != -1) {
        //записываем координаты
        posOfdyrka.push(i);
        posOfdyrka.push(array[i].indexOf('-'));
    }
    return posOfdyrka;
 }
 }

 function rowCheck(array, num){
 return array[num[0]].filter((el) => el != '-');
 }

// console.log(posOfFirstDyrka(array));
//  console.log(numberFrom(array, posOfFirstDyrka(array)));