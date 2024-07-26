const getSet = (arr) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (Number.isNaN(+arr[i][j])) {
        result.push(0);
      }
      result.push(+arr[i][j]);
    }
  }
  console.log(result);
  return [...new Set(result)].filter((item) => item !== 0);
};

module.exports = getSet;
