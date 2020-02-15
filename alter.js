//Данный алгоритм решает все судоку, все зависит от времени сколько у вас есть))
//с 1 по 8 решает быстро.
//с 9 - 12 уходит в долгие думы со скоростью 35 000 циклов в секунду
//с 13 по 14 по 2-5 минут по 2-5 млн циклов
//14-15 решает за секунду
//Eldar Sufiyanov (c)


let textdata = "---------------------------------------------------------------------------------";
let result = true;
let r = 0;
let flag = 0;
let res = [];
while (result) {
  function createArray(texdata) {
    let bigArr = [];
    let arrData = texdata.split("");
    for (let i = 0; i < 81; i = i + 9) {
      bigArr.push(arrData.slice(i, i + 9))
    }
    for (let row = 0; row < bigArr.length; row++) {
      for (let col = 0; col < bigArr[row].length; col++) {
        if (bigArr[row][col] == '-') {
          bigArr[row][col] = 0;
        } else {
          bigArr[row][col] = +bigArr[row][col];//превращаем в цифру
        }
      }
    }
    if (flag = 0) {
      console.table(bigArr);
      flag = 1;
    }
    return bigArr
  }

  let bigArr = createArray(textdata)








  function sliceArr3() {
    let finish = [[], [], []];
    for (let r = 0; r < 9; r++) {
      let slicerow = [];
      for (let c = 0; c < 9; c++) {
        slicerow.push(bigArr[r][c])
      }
      createrow(slicerow)
    }

    for (let c = 0; c < 9; c++) {
      let slicecol = [];
      for (let r = 0; r < 9; r++) {
        slicecol.push(bigArr[r][c])
      }
      createcol(slicecol)
    }

    let qwad2 = []
    for (let n = 0; n < 9; n += 3) {
      let qwad1 = [];

      for (let m = 0; m < 9; m += 3) {
        let qwad0 = [];
        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            qwad0.push(bigArr[i + n][j + m])
          }
        }
        qwad1.push(qwad0)
      }
      qwad2.push(qwad1);
    }

    //console.log(qwad2);
    finish[2].push(qwad2)


    function createrow(row) {
      finish[0].push(row);
    }
    function createcol(col) {
      finish[1].push(col);
    }


    return finish;
  }

  let qub = sliceArr3();

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getNumber(r, c) {


    let d = [].concat(qub[0][r], qub[1][c], qub[2][0][Math.floor(r / 3)][Math.floor(c / 3)])
    let varik = []
    for (let i = 1; i < 10; i++)
      if (d.includes(i)) { }
      else { varik.push(i) }
    return varik[getRandomInt(0, varik.length)];    //возвращает массив занятых чисел  
  }


  function compare() {

    for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
        //console.log(c);

        if (bigArr[r][c] == 0) {
          bigArr[r][c] = getNumber(r, c);
          qub = sliceArr3();
          if (bigArr[r][c] === undefined) {
            return false
          }
        }
        //console.log(c);

      }
    }
    return true;
  }
  if (compare()) {
    res = bigArr;
    result = false;
  }
  else {
    result = true;
    //console.table(bigArr)
  }
  r++;
}
console.table(res);
console.log("Количество итераций: " + r);

