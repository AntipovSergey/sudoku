let str = "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
let obj = createObj(str)
let coor = '30';

// создаем объект из строки
// ключи = координаты на сетке
// значения = массиву кандидатов (если ответ уже есть там только 1 значение)
function createObj(str) {
  let strArr = str.split('');
  let obj = {};

  let i = 0;
  for (let x = 0; x < 9; x += 1) {
    for (let y = 0; y < 9; y += 1) {
      if (strArr[i] === '-') {
        obj[`${x}${y}`] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      } else {
        obj[`${x}${y}`] = [Number(strArr[i])];
      }
      i += 1;
    }
  }
  return obj
}


function checkRow(obj, coor) {
  for (let n = 0; n < 9; n++) {
    if ((coor !== `${coor[0]}${n}`) && obj[`${coor[0]}${n}`].length === 1) {

      obj[coor] = obj[coor].filter(item => item !== obj[`${coor[0]}${n}`][0]);
    }
  }
  return obj;
}



  checkColumn(obj);

}
console.log(createObj(str));

function checkColumn(obj) {
  let coor = '43';
  let secondCoor = coor[1]; //3
  let column = Object.keys(obj).filter((item) => item[1] === secondCoor)
  for (let everyItemOfColumn of column) {
    if ((coor !== everyItemOfColumn) && (obj[everyItemOfColumn].length === 1)) {
      obj[coor] = obj[coor].filter(item => item !== obj[everyItemOfColumn][0]);
    }
  }

  // console.log(obj['43']); //СТАЛА ЯЧЕЙКА
}



// функция проверки кандидатов внутри блока
// принимает объект (ключи = координатам на сетке, значения = массиву кандидатов)
function checkBlocks(obj, coor) {
  // карта квадрата, подмассивы содержат ключи клеток в своем квадрате
  // квадраты идут по очереди слева направо, сверху вниз
  let blocksMap = [
    ['00', '01', '02', '10', '11', '12', '20', '21', '22'],
    ['03', '04', '05', '13', '14', '15', '23', '24', '25'],
    ['06', '07', '08', '16', '17', '18', '26', '27', '27'],
    ['30', '31', '32', '40', '41', '42', '50', '51', '52'],
    ['33', '34', '35', '43', '44', '45', '53', '54', '55'],
    ['36', '37', '38', '46', '47', '48', '56', '57', '58'],
    ['60', '61', '62', '70', '71', '72', '80', '81', '82'],
    ['63', '64', '65', '73', '75', '75', '83', '84', '85'],
    ['66', '67', '68', '76', '77', '78', '86', '87', '88'],
  ]

  // определяем квадрат, в котором находится проверяемая ячейка
  let blockNum;
  for (let index = 0; index < blocksMap.length; index += 1) {
    console.log(index);
    if (blocksMap[index].includes(coor)) {
      blockNum = index;
      break;
    }
  }

  // проходим каждую ячейку квадрата
  // проверяем, чтобы она не совпадала с проверяемой
  // проверяем, что в ней одно значение, а не список кандидатов
  // при удовлетворении условиям фильтруем список кандидатов в проверяемой ячейке
  for (let checkCoor of blocksMap[blockNum]) {
    if ((coor !== checkCoor) && (obj[checkCoor].length === 1)) {
      obj[coor] = obj[coor].filter(item => item !== obj[checkCoor][0]);
    }
  }

  return obj;
}


console.log(checkBlocks(obj, coor));


/*
let a = [
  '1', '-', '5', '8', '-', '2', '-', '-', '-',
  '-', '9', '-', '-', '7', '6', '4', '-', '5',
  '2', '-', '-', '4', '-', '-', '8', '1', '9',
  '-', '1', '9', '-', '-', '7', '3', '-', '6',
  '7', '6', '2', '-', '8', '3', '-', '9', '-',
  '-', '-', '-', '-', '6', '1', '-', '5', '-',
  '-', '-', '7', '6', '-', '-', '-', '3', '-',
  '4', '3', '-', '-', '2', '-', '5', '-', '1',
  '6', '-', '-', '3', '-', '8', '9', '-', '-'
]
*/
// создаем объект из строки с ключами вида XY координат и значением массива вариантов от 0 до 9
// в случае, если значение уже дано, то в этот массив будет записано только одно это значение
// затем начать цикличискую проверку на "одиночек" в строке, столбце, 
// при проверке каждого ключа из массива значений вычитаются, уже существующие значения в строке, потом столбце
// создаем функцию для создания карты блока
// потом такая же провервка на "одиночек" в блоке
// затем проверка на "скрытых одиночек"
// это проверка внутри блока на наличие уникального кандидата, который и будет решением

// далее следует реализовать более сложные проверки (но как это делать без понятия)
// --------------------------------------------


  


// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!
function solve(boardString) {

}


// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}


// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve: solve,
  isSolved: isSolved,
  prettyBoard: prettyBoard
}
