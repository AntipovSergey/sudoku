const arr = [
  [['1'], ['1', '2'], ['5']],
  [['1', '2'], ['9'], ['1', '2']],
  [['2'], ['1', '2'], ['1', '2']],
];

function searchCol() {
  for (let m = 0; m < arr.length; m += 1) {
    const values = []; // [ [ '1' ], [ '2' ], [ '7' ], [ '4' ], [ '6' ] ]
    const proverka = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j][m].length === 1) {
        values.push(arr[j][m]);
      }
    }

    const filters = [];

    proverka.forEach((el2) => {
      for (let i = 0; i < values.length; i += 1) {
        if (el2 === values[i][0]) {
          proverka.splice(el2 - 1, 1, 0);
        }
      }
    });

    for (let i = 0; i < proverka.length; i += 1) {
      if (proverka[i] !== 0) {
        filters.push(proverka[i]);
      }
    }

    for (let j = 0; j < arr.length; j += 1) {
      if (arr[j][m].length !== 1) {
        arr[j][m] = filters;
      }
    }
    console.log(filters);
  }
  console.table(arr);
}

searchCol();
