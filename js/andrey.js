function convertToSquare3x3Horizontal(array) {

  let array2 = [];
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      array2.push((array[i])[j]);
    }
  }
  searchMissingOneNumberInArray(array2)
  searchAndReplaceOneMissingNumberInArray(array2)  //первый квадрат
  for (i = 0; i < 3; i += 1) {
    for (j = 0; j < 3; j += 1) {
      (array[i])[j] = array2.shift();
    }
  }



  array2 = [];
  for (let i = 0; i < 3; i += 1) {
    for (let j = 3; j < 6; j += 1) {
      array2.push((array[i])[j]);
    }
  }
  searchMissingOneNumberInArray(array2)
  searchAndReplaceOneMissingNumberInArray(array2)  //второй
  for (i = 0; i < 3; i += 1) {
    for (j = 3; j < 6; j += 1) {
      (array[i])[j] = array2.shift();
    }
  }



  array2 = [];
  for (let i = 0; i < 3; i += 1) {
    for (let j = 6; j < 9; j += 1) {
      array2.push((array[i])[j]);
    }
  }
  searchMissingOneNumberInArray(array2)
  searchAndReplaceOneMissingNumberInArray(array2)  //третий
  for (i = 0; i < 3; i += 1) {
    for (j = 6; j < 9; j += 1) {
      (array[i])[j] = array2.shift();
    }
  }



  array2 = [];
  for (let i = 3; i < 6; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      array2.push((array[i])[j]);
    }
  }
  searchMissingOneNumberInArray(array2)
  searchAndReplaceOneMissingNumberInArray(array2)  //четвертый
  for (i = 3; i < 6; i += 1) {
    for (j = 0; j < 3; j += 1) {
      (array[i])[j] = array2.shift();
    }
  }

  array2 = [];
  for (let i = 3; i < 6; i += 1) {
    for (let j = 3; j < 6; j += 1) {
      array2.push((array[i])[j]);
    }
  }
  searchMissingOneNumberInArray(array2)
  searchAndReplaceOneMissingNumberInArray(array2)  //пятый
  for (i = 3; i < 6; i += 1) {
    for (j = 3; j < 6; j += 1) {
      (array[i])[j] = array2.shift();
    }
  }

  array2 = [];
  for (let i = 3; i < 6; i += 1) {
    for (let j = 6; j < 9; j += 1) {
      array2.push((array[i])[j]);
    }
  }
  searchMissingOneNumberInArray(array2)
  searchAndReplaceOneMissingNumberInArray(array2)  //шестой
  for (i = 3; i < 6; i += 1) {
    for (j = 6; j < 9; j += 1) {
      (array[i])[j] = array2.shift();
    }
  }

  array2 = [];
  for (let i = 6; i < 9; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      array2.push((array[i])[j]);
    }
  }
  searchMissingOneNumberInArray(array2)
  searchAndReplaceOneMissingNumberInArray(array2)  //седьмой
  for (i = 6; i < 9; i += 1) {
    for (j = 0; j < 3; j += 1) {
      (array[i])[j] = array2.shift();
    }
  }

  array2 = [];
  for (let i = 6; i < 9; i += 1) {
    for (let j = 3; j < 6; j += 1) {
      array2.push((array[i])[j]);
    }
  }
  searchMissingOneNumberInArray(array2)
  searchAndReplaceOneMissingNumberInArray(array2)  //четвертый
  for (i = 6; i < 9; i += 1) {
    for (j = 3; j < 6; j += 1) {
      (array[i])[j] = array2.shift();
    }
  }

  array2 = [];
  for (let i = 6; i < 9; i += 1) {
    for (let j = 6; j < 9; j += 1) {
      array2.push((array[i])[j]);
    }
  }
  searchMissingOneNumberInArray(array2)
  searchAndReplaceOneMissingNumberInArray(array2)  //четвертый
  for (i = 6; i < 9; i += 1) {
    for (j = 6; j < 9; j += 1) {
      (array[i])[j] = array2.shift();
    }
  }

  return (array);

}

convertToSquare3x3Horizontal(arr)

