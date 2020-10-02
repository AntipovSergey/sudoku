const getRow = (array, n) => {
  const resArr = [];
  for (let i = 9 * n; i < (9 + 9 * n); i += 1) {
    resArr.push(array[i]);
  }
  return resArr;
};

const getColumn = (array, n) => {
  const resArr = [];
  for (let i = 0 + n; i <= 72 + n; i += 9) {
    resArr.push(array[i]);
  }
  return resArr;
};

const getSquare = (array, n) => {
  const rowStart = Math.floor(n / 3) * 3;
  const colStart = (n % 3) * 3;
  const resArr = [];
  for (let i = rowStart; i < rowStart + 3; i += 1) {
    for (let j = colStart; j < colStart + 3; j += 1) {
      resArr.push(array[i * 9 + j]);
    }
  }
  return resArr;
};

const getBestCell = (array) => {
  // let leastNulls;
  // let bestArrayIndex;
  // let bestArrayType;
  // for (let i = 0; i < 9; i += 1) {
  //   let currentArray = getRow(array, i);
  //   let currentLength = currentArray.filter(x => x === null).length;
  //   if (currentLength < bestLength) {
  //     bestLength = currentLength;
  //     bestArrayIndex = i;
  //     bestArrayType = 'row';
  //   }

  //   currentArray = getColumn(array, i);
  //   currentLength = currentArray.filter(x => x === null).length;
  //   if (currentLength < bestLength) {
  //     bestLength = currentLength;
  //     bestArrayIndex = i;
  //     bestArrayType = 'column';
  //   }

  //   currentArray = getSquare(array, i);
  //   currentLength = currentArray.filter(x => x === null).length;
  //   if (currentLength < bestLength) {
  //     bestLength = currentLength;
  //     bestArrayIndex = i;
  //     bestArrayType = 'square';
  //   }
  // }
  // if (bestArrayType === 'row') {
  //   getRow(array, bestArrayIndex)
  // } else if (bestArrayType === 'row')) {

  // }
}

module.exports = {
  getRow,
  getColumn,
  getSquare,
}
