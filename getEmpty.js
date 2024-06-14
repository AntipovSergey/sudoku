const getEmpty = (martix) => {
  const length = matrix[0].length;
  const arrLocation = [];
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (martix[i][j] === null) arrLocation.push([i, j]);
    }
  }
  return arrLocation.length ? arrLocation : false;
};

module.exports = { getEmpty };
