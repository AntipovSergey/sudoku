let z = [
    [
      '1', '-', '5',
      '8', '-', '2',
      '-', '-', '-'
    ],
    [
      '-', '9', '-',
      '-', '7', '6',
      '4', '-', '5'
    ],
    [
      '2', '-', '-',
      '4', '-', '-',
      '8', '1', '9'
    ],
    [
      '-', '1', '9',
      '-', '-', '7',
      '3', '-', '6'
    ],
    [
      '7', '6', '2',
      '-', '8', '3',
      '-', '9', '-'
    ],
    [
      '-', '-', '-',
      '-', '6', '1',
      '-', '5', '-'
    ],
    [
      '-', '-', '7',
      '6', '-', '-',
      '-', '3', '-'
    ],
    [
      '4', '3', '-',
      '-', '2', '-',
      '5', '-', '1'
    ],
    [
      '6', '-', '-',
      '3', '-', '8',
      '9', '-', '-'
    ]
  ]
  function isValid(arr, i, j, currentValue) {
    // проверка квадратами
    // верхние три
    if (i <= 2 && j <= 2) {
      //создание первого квадрата
      let compareArr = []
      for (let i = 0; i < 3; i++) {
        compareArr.push(arr[i][0])
        compareArr.push(arr[i][1])
        compareArr.push(arr[i][2])
      }
      // проверка
      for (let i = 0; i < compareArr.length; i++) {
        if (currentValue === compareArr[i]) {
          return false
        }
      }
    } else if (i <= 2 && j <= 5) {
      //создание второго квадрата
      let compareArr = []
      for (let i = 0; i < 3; i++) {
        compareArr.push(arr[i][3])
        compareArr.push(arr[i][4])
        compareArr.push(arr[i][5])
      }
      // проверка
      for (let i = 0; i < compareArr.length; i++) {
        if (currentValue === compareArr[i]) {
          return false
        }
      }
    } else if (i <= 2 && j <= 8) {
      //создание третьего квадрата
      let compareArr = []
      for (let i = 0; i < 3; i++) {
        compareArr.push(arr[i][6])
        compareArr.push(arr[i][7])
        compareArr.push(arr[i][8])
      }
      // проверка
      for (let i = 0; i < compareArr.length; i++) {
        if (currentValue === compareArr[i]) {
          return false
        }
      }
    }
    //средние три
    if (i > 2 && i <= 5 && j <= 2) {
      //создание четвертого квадрата
      let compareArr = []
      for (let i = 3; i < 5; i++) {
        compareArr.push(arr[i][0])
        compareArr.push(arr[i][1])
        compareArr.push(arr[i][2])
      }
      // проверка
      for (let i = 0; i < compareArr.length; i++) {
        if (currentValue === compareArr[i]) {
          return false
        }
      }
    } else if (i > 2 && i <= 5 && j <= 5) {
      //создание пятого квадрата
      let compareArr = []
      for (let i = 3; i < 5; i++) {
        compareArr.push(arr[i][3])
        compareArr.push(arr[i][4])
        compareArr.push(arr[i][5])
      }
      // проверка
      for (let i = 0; i < compareArr.length; i++) {
        if (currentValue === compareArr[i]) {
          return false
        }
      }
    } else if (i > 2 && i <= 5 && j <= 8) {
      //создание шестого квадрата
      let compareArr = []
      for (let i = 3; i < 5; i++) {
        compareArr.push(arr[i][6])
        compareArr.push(arr[i][7])
        compareArr.push(arr[i][8])
      }
      // проверка
      for (let i = 0; i < compareArr.length; i++) {
        if (currentValue === compareArr[i]) {
          return false
        }
      }
    }
    //нижние три
    if (i > 5 && i <= 8 && j <= 2) {
      //создание седьмого квадрата
      let compareArr = []
      for (let i = 3; i < 8; i++) {
        compareArr.push(arr[i][1])
        compareArr.push(arr[i][2])
        compareArr.push(arr[i][3])
      }
      // проверка
      for (let i = 0; i < compareArr.length; i++) {
        if (currentValue === compareArr[i]) {
          return false
        }
      }
    } else if (i > 5 && i <= 8 && j <= 5) {
      //создание восьмого квадрата
      let compareArr = []
      for (let i = 3; i < 8; i++) {
        compareArr.push(arr[i][3])
        compareArr.push(arr[i][4])
        compareArr.push(arr[i][5])
      }
      // проверка
      for (let i = 0; i < compareArr.length; i++) {
        if (currentValue === compareArr[i]) {
          return false
        }
      }
    } else if (i > 5 && i <= 8 && j <= 8) {
      //создание девятого квадрата
      let compareArr = []
      for (let i = 3; i < 8; i++) {
        compareArr.push(arr[i][6])
        compareArr.push(arr[i][7])
        compareArr.push(arr[i][8])
      }
      // проверка
      for (let i = 0; i < compareArr.length; i++) {
        if (currentValue === compareArr[i]) {
          return false
        }
      }
    }
    // горизонталь
    for (let iter = 0; iter < 9; iter++) {
      if (currentValue === arr[i][iter]) {
        return false;
      }
    }
    // вертикаль
    for (let iter = 0; iter < 9; iter++) {
      if (currentValue === arr[iter][j]) {
        return false;
      }
    }
    return true
  }
  console.log(isValid(z, 1, 0, '8'))