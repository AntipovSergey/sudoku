// поиск по горизонтали
// проходим по строке и сравниваем с элементом. Если элемент не совпадает, то счетчик +1
// если счетчик = 9 (9 это длинна строки), значит элемент не повторяется и проверка пройдена

function horizontalFind(arr, el) {
  let ok = 0;
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== el) {
      ok += 1;
    }
  }
  if (ok === 9) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// console.log(horizontalFind(["-", "-", "3", "1", "-", "-", "5", "-", "9"], "1"));

//поиск по столбцам
// принимает общий массив с массивами. создаем новый массив, содержащий все элементы столбца
// и сравниваем с ним
//нужно туда передать позицию элемента в подмассиве
function verticalFind(arr, el, position) {
  let ok = 0;
  let newArr = [];
  let result;
  //создаем массив с элементами столбца
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][position]);
  }
  for (let n = 0; n < newArr.length; n++) {
    if (newArr[n] !== el) {
      ok += 1;
    }
  }
  if (ok === 9) {
    result = true;
  } else {
    result = false;
  }

  return result;
}
// console.log(verticalFind([["-", "-", "3"],['2','-','7'],['1','-','7'],['2','-','7'],['1','-','7'],['2','-','7'],['2','-','7'],['2','-','7'],['2','-','7']], "1",0));
