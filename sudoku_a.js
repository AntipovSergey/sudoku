// переводим исходную строку в массив, содержащий 9 числовых массивов 

function stringToArr(str) {
  let newStr = str.replace(/-/g, "0") // заменил в строке - на 0
  const arr = newStr.split("");  // разбил строку на массив

  for (let i = 0; i < arr.length; i++) { //  преобразовал все строки в массиве в числа
    arr[i] = Number(arr[i]);
  }

  const row1 = arr.slice(0, 9);
  const row2 = arr.slice(9, 18);
  const row3 = arr.slice(18, 27);
  const row4 = arr.slice(27, 36);
  const row5 = arr.slice(36, 45);
  const row6 = arr.slice(45, 54);
  const row7 = arr.slice(54, 63);
  const row8 = arr.slice(63, 72);
  const row9 = arr.slice(72, 81);

  resultArr = []; // создал итоговый массив
  resultArr.push(row1, row2, row3, row4, row5, row6, row7, row8, row9) // добавил в итоговыйй массив массивы полученные методом slice

  return resultArr;
}


// --------------------------------------------------

function prettyBoard(arr) {           // получает массив с массивами, 
  arr.forEach(element => {            // перебирает его и печатает каждый 
    console.log(element.join(" "))    // элемент как строку, разделяя пробелом
  });
}

// -------------------------------------------------



module.exports = {
  stringToArr: stringToArr,
  prettyBoard: prettyBoard
}
