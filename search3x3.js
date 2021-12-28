function f3(i, j, arr0) {
  // первый квадрат
  const qw = [];
  const newArr = [];
  if (i < 3 && i >= 0 && j >= 0 && j < 3) {
    newArr[0] = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        newArr[0].push(arr0[i][j]);
      }
    }
    for (let x = 1; x < 10; ++x) {
      const number = x.toString();
      if (!newArr[0].includes(number)) {
        qw.push(number);
      }

      // console.log(qw)
    }
    // второй квадрат
    newArr[1] = [];
    for (let i = 3; i < 6; i++) {
      for (let j = 0; j < 3; j++) {
        newArr[1].push(arr0[i][j]);
      }
    }
    // третий квардрат
    newArr[2] = [];
    for (let i = 6; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        newArr[2].push(arr0[i][j]);
      }
    }
    // четвертый квадрат
    newArr[3] = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 3; j < 6; j++) {
        newArr[3].push(arr0[i][j]);
      }
    }
    // пятый квадрат
    newArr[4] = [];
    for (let i = 3; i < 6; i++) {
      for (let j = 3; j < 6; j++) {
        newArr[4].push(arr0[i][j]);
      }
    }
    // шестой  квардрат
    newArr[5] = [];
    for (let i = 6; i < 9; i++) {
      for (let j = 3; j < 6; j++) {
        newArr[5].push(arr0[i][j]);
      }
    }
    // седьмой квадрат
    newArr[6] = [];
    for (let i = 0; i < 3; i++) {
      for (let j = 6; j < 9; j++) {
        newArr[6].push(arr0[i][j]);
      }
    }
    // восьмой  квадрат
    newArr[7] = [];
    for (let i = 3; i < 6; i++) {
      for (let j = 6; j < 9; j++) {
        newArr[7].push(arr0[i][j]);
      }
    }
    // девятый   квардрат
    newArr[8] = [];
    for (let i = 6; i < 9; i++) {
      for (let j = 6; j < 9; j++) {
        newArr[8].push(arr0[i][j]);
      }
    }
    // console.log(newArr)
  }
}
