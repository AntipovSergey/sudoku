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

function blockFind(arr, el, ver, hor) {
  // определяем в каком блоке находится элемент
  // передается индекс по горизонтали и вертикали
  let newArr = [];
  let result = 0;
  if (hor < 3 && ver < 3) {
    newArr.push(
      arr[0][0],
      arr[0][1],
      arr[0][2],
      arr[1][0],
      arr[1][1],
      arr[1][2],
      arr[2][0],
      arr[2][1],
      arr[2][2]
    );
  } else if (ver >= 3 && ver < 6 && hor < 3) {
    newArr.push(
      arr[3][0],
      arr[3][1],
      arr[3][2],
      arr[4][0],
      arr[4][1],
      arr[4][2],
      arr[5][0],
      arr[5][1],
      arr[5][2]
    );
  } else if (ver >= 6 && ver < 9 && hor < 3) {
    newArr.push(
      arr[6][0],
      arr[6][1],
      arr[6][2],
      arr[7][0],
      arr[7][1],
      arr[7][2],
      arr[8][0],
      arr[8][1],
      arr[8][2]
    );
  } else if (hor >= 3 && hor < 6 && ver < 3) {
    newArr.push(
      arr[0][3],
      arr[0][4],
      arr[0][5],
      arr[1][3],
      arr[1][4],
      arr[1][5],
      arr[2][3],
      arr[2][4],
      arr[2][5]
    );
  } else if (hor >= 6 && hor < 9 && ver < 3) {
    newArr.push(
      arr[0][6],
      arr[0][7],
      arr[0][8],
      arr[1][6],
      arr[1][7],
      arr[1][8],
      arr[2][6],
      arr[2][7],
      arr[2][8]
    );
  } else if (hor >= 3 && hor < 6 && ver >= 3 && ver < 6) {
    newArr.push(
      arr[3][3],
      arr[3][4],
      arr[3][5],
      arr[4][3],
      arr[4][4],
      arr[4][5],
      arr[5][3],
      arr[5][4],
      arr[5][5]
    );
  } else if (hor >= 6 && hor < 9 && ver >= 3 && ver < 6) {
    newArr.push(
      arr[6][3],
      arr[6][4],
      arr[6][5],
      arr[7][3],
      arr[7][4],
      arr[7][5],
      arr[8][3],
      arr[8][4],
      arr[8][5]
    );
  } else if (hor >= 6 && hor < 9 && ver >= 6 && ver < 9) {
    newArr.push(
      arr[6][6],
      arr[6][7],
      arr[6][8],
      arr[7][6],
      arr[7][7],
      arr[7][8],
      arr[8][6],
      arr[8][7],
      arr[8][8]
    );
  } else if (hor >= 3 && hor < 6 && ver >= 6 && ver < 9) {
    newArr.push(
      arr[6][3],
      arr[6][4],
      arr[6][5],
      arr[7][3],
      arr[7][4],
      arr[7][5],
      arr[8][3],
      arr[8][4],
      arr[8][5]
    );
  }
  for (let j = 0; j < newArr.length; j++) {
    if (newArr[j] !== el) {
      result += 1;
    }
  }
    if (result === 9) {
      result = true;
    } else {
      result = false;
    }

  return result;
}
let example = [
  ["1", "-", "5", "8", "-", "2", "-", "-", "-"],
  ["-", "9", "-", "-", "7", "6", "4", "-", "5"],
  ["2", "-", "-", "4", "-", "-", "8", "1", "9"],
  ["-", "1", "9", "-", "-", "7", "3", "-", "6"],
  ["7", "6", "2", "-", "8", "3", "-", "9", "-"],
  ["-", "-", "-", "-", "6", "1", "-", "5", "-"],
  ["-", "-", "7", "6", "-", "-", "-", "3", "-"],
  ["4", "3", "-", "-", "2", "-", "5", "-", "1"],
  ["6", "-", "-", "3", "-", "8", "9", "-", "-"],
];

// console.log(blockFind(example, "4", 5, 3));
