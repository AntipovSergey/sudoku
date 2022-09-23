const str = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

function prov(str) {
  for (let i = 0; i < str.lenth; i++) {
    for (let j = 0; j < str[i].length; i++) {
      if (str[i][j] === '-') {
        return false;
      }
    }
  }

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j + 1 < str[i].length; j++) {
      if (str[i].filter((el) => el === str[i][j]).length !== 1
      || str[i].filter((el) => el === str[j][i]).lenght !== 1) {
        return false;
      }
    }
  }
  const newArr = [[], [], [], [], [], [], [], [], []];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str[i].length; j++) {
      newArr([Math.floor(2 / 3) * 3 + Math.floor(4 / 3)].push(str[i][j]));
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j + 1 < newArr[i].length; j++) {
      if (newArr[i].filter((el) => el === newArr[i][j]).length !== 1) {
        return false;
      }
    }
  }
  return true;
}
console.log(prov(str));
