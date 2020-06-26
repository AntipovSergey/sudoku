//Создаем массив с квадратами
function createCub(boardArg) {
  //упростить код разбиение на кубы
  let arrCub = [];
  let begin = 0;
  let end = 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 9; j++) {
      for (let k = begin; k < end; k++) {
        arrCub.push(boardArg[k][j]);
      } 
    }
    begin += 3;
    end += 3;
  }
  let cub = [];
  for (let i = 0; i < 9; i++) {
    let arrCub1 = arrCub.slice();
    cub[i] = arrCub1.splice(i * 9, 9);
  }
  // console.log(cub);
  return cub;
}

//Создаем массивы по-вертикали

function createColumn(boardArg) {
  let arr = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      arr.push(boardArg[j][i]);
    }
  }

  let column = [];
  for (let i = 0; i < 9; i++) {
    let arr1 = arr.slice();
    column[i] = arr1.splice(i * 9, 9);
  }
  // console.log(column);
  return column;
}

function sudoku(board) {
  let copyBoard = board;

  //Возможные номера

  let defaultNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //запускается цикл при которой будет находиться и проставляться значение если искомый элемент
  //будет единственным возможном
  //и так несколько раз пока судоку не решится
  for (let start = 0; start < 200; start++) {
    //возможно это лишнее придумать как
    //При каждой итерации будут создаваться новые массивы с кубами и вертикалями
    let column = createColumn(copyBoard);
    let cub = createCub(copyBoard);
    // и чтобы лишний раз не гонять проверки если пропусков не осталось то пропускаем код с решением
    if (copyBoard.join('').includes(0)) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          //весь этот свитч нужен чтобы установить значения куба в искомом элемменте;
          //тоесть если 0 нашелся в первой строчке и в 5 вертикале то то устанавливаем координату второго куба;
          let c;
          switch (true) {
            case (i === 0 || i === 1 || i === 2) &&
              (j === 0 || j === 1 || j === 2):
              c = 0;
              break;
            case (i === 0 || i === 1 || i === 2) &&
              (j === 3 || j === 4 || j === 5):
              c = 1;
              break;
            case (i === 0 || i === 1 || i === 2) &&
              (j === 6 || j === 7 || j === 8):
              c = 2;
              break;
            case (i === 3 || i === 4 || i === 5) &&
              (j === 0 || j === 1 || j === 2):
              c = 3;
              break;
            case (i === 3 || i === 4 || i === 5) &&
              (j === 3 || j === 4 || j === 5):
              c = 4;
              break;
            case (i === 3 || i === 4 || i === 5) &&
              (j === 6 || j === 7 || j === 8):
              c = 5;
              break;
            case (i === 6 || i === 7 || i === 8) &&
              (j === 0 || j === 1 || j === 2):
              c = 6;
              break;
            case (i === 6 || i === 7 || i === 8) &&
              (j === 3 || j === 4 || j === 5):
              c = 7;
              break;
            case (i === 6 || i === 7 || i === 8) &&
              (j === 6 || j === 7 || j === 8):
              c = 8;
              break;
          }
          //если координат который идет по горизонтале равен нулю то начинаем искать варианты

          if (copyBoard[i][j] === 0) {
            let checkAr = []; //массив с возможными номерами в пустой клетке
            // console.log(checkAr);
            for (let k = 0; k < 9; k++) {
              //заходим в цикл который идет по всем цифрам от 1 до 9
              if (
                //условия при котором мы провверяем что цифра по вертикале горизонтале и в квадрате не имеется
                !column[j].includes(defaultNumbers[k]) &&
                !copyBoard[i].includes(defaultNumbers[k]) &&
                !cub[c].includes(defaultNumbers[k])
              ) {
                // console.log(checkAr);
                //если все проверки прошли то пушим в массив
                checkAr.push(defaultNumbers[k]);
              }
            }

            //если судоку не решается методом 'одиночки' то подставляем случайную цифру
            // if (start > 50 && checkAr.length > 0) {
            //   const randomIndex = ~~(Math.random() * checkAr.length);
            //   console.log(randomIndex);
            //   copyBoard[i][j] = checkAr[randomIndex];
            // }

            if (checkAr.length === 1) {
              //если в массиве оказался один возможный
              // вариант переписываем пустое место на на найденный элемент
              copyBoard[i][j] = checkAr[0];
            }

            // if (start > 50 && checkAr.length > 1) {
            //   copyBoard[i][j] = checkAr[0];
            // }
          }
        }
      }
    }
  }
  return copyBoard;
}

console.log(
  sudoku([
    [0, 0, 0, 0, 7, 0, 0, 0, 0],
    [0, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ])
);
