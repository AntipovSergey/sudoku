function isHorizontalGood(number, v, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[h][i] === number) {
      return false;
    }
  }
  return true;
}

function isVerticalGood(number, h, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][v] === number) {
      return false;
    }
  }
  return true;
}



function isBoxGood (number, h, v, arr) {
  const boxHorVer = Math.sqrt(arr.length);
  const boxHor = Math.floor(v/boxHorVer) * boxHorVer;
  const boxVer = Math.floor(h/boxHorVer) * boxHorVer;

  for (let i = boxHor; i < boxHor + boxHorVer; i++) {
    for (let j = boxVer; j < boxVer + boxHorVer; j++) {
      if (arr[i][j] === number) {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  isHorizontalGood,
  isVerticalGood,
  isBoxGood,
};

