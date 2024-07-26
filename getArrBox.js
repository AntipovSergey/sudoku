const getArrBox = (arr, index) => {
  const result = [];
  let columnIndexMin = 0;
  const columnIndexMax = 0;
  let rowIndexMin = 0;
  const rowIndexMax = 0;

  const points = [3, 5];

  if (index <= points[0]) {
    columnIndexMin = 0;
    rowIndexMin = 0;
  } else if (index >= points[0] && index <= points[1]) {
    columnIndexMin = 3;
    rowIndexMin = 3;
  } else {
    columnIndexMin = 6;
    rowIndexMin = 6;
  }

  const box = [];

  for (let i = columnIndexMin; i < 3; i++) {
    for (let j = columnIndexMin; j < 3; j++) {
      box.push(arr[i][j]);
    }
  }

  for (let i = 0; i < box.length; i++) {
    if (box[i] === "-") {
      continue;
    } else {
      result.push(+box[i]);
    }
  }
  return result;
};

module.exports = getArrBox;
