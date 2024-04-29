// arrNull
// arrN[i].values.length

const arrTest = [
  {
    values: [2, 5, 8],
    i: 3,
    g: 5,
  },
  {
    values: [3, 4, 6, 9],
    i: 2,
    g: 6,
  },
  {
    values: [2, 5],
    i: 7,
    g: 1,
  },
  {
    values: [5],
    i: 1,
    g: 2,
  },
  {
    values: [2, 3, 5, 8, 9],
    i: 4,
    g: 2,
  },
];

function findShortest(arrN) {
  let objRes = arrN[0];
  for (let i = 1; i < arrN.length; i++) {
    if (arrN[i].values.length < objRes.values.length) {
      objRes = arrN[i];
    }
  }
  return objRes;
}

console.log(findShortest(arrTest));
