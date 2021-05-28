let str = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
//Вместо строки необходимо добавить решаемую головоломку


function sudokuParse(content) {
     //Преобразование строки в массив
  let array = [];
  for (let i = 0; i < content.length; i++) {array.push(content[i])}


  //Преобразование массива в многомерный массив
  //Спасибо Семён!
  //Я почти понял как это работает

  let transphorm = array.reduce((acc, el, i) => {
    let row = Math.floor(i / 9);
    if (!Array.isArray(acc[row])) acc[row] = [];
    acc[row].push(el);
    return acc;
  }, []);
//   console.log(transphorm);
  return transphorm;
}

// sudokuParse(str);
console.table(sudokuParse(str));

//===============================================================================

function createMegaArr (input) {
let arr0 = [];
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let arr7 = [];
let arr8 = [];
//Не придумал как это сделать красивей

let switcher; //Переменная для использования switch


for (el of input) {
    if (input.indexOf(el)<=2) {switcher = 0}
    else if (input.indexOf(el)>=6) {switcher = 1}
    else {switcher = 2}
   
switch(switcher) {
case (0):
    for (let i = 0; i < 9; i++) {
        if (i<=2) arr0.push(el[i])
        else if (i>=6) arr2.push(el[i])
        else arr1.push(el[i])
    } /// Проход по 1 строке 'Квадратов'

case (1):
    for (let i = 0; i < 9; i++) {
        if (i<=2) arr3.push(el[i])
        else if (i>=6) arr5.push(el[i])
        else arr4.push(el[i])
    }
        /// Проход по 2 строке 'Квадратов'

case (2):
    for (let i = 0; i < 9; i++) {
        if (i<=2) arr6.push(el[i])
        else if (i>=6) arr8.push(el[i])
        else arr7.push(el[i])
    }
    /// Проход по 3 строке 'Квадратов'
}

console.table(arr0,arr1,arr2,arr3,arr4,arr5,arr6,arr7,arr8);
}
}


   

createMegaArr(sudokuParse(str));

// module.exports = { sudokuParse };

// console.table(input);
// console.log(input[1][1]);

    // function cb(input) {
    // for (let i = 0; i<9; i++) {
    //     if (i <= 2) arr.push(input[i])
    // }
    // }
