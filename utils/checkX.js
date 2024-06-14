let bord = [
  [1, 0, 5, 8, 0, 2, 0, 0, 0],
  [0, 9, 0, 0, 7, 6, 4, 0, 5],
  [2, 0, 0, 4, 0, 0, 8, 1, 9],
  [0, 1, 9, 0, 0, 7, 3, 0, 6],
  [7, 6, 2, 0, 8, 3, 0, 9, 0],
  [0, 0, 0, 0, 6, 1, 0, 5, 0],
  [0, 0, 7, 6, 0, 0, 0, 3, 0],
  [4, 3, 0, 0, 2, 0, 5, 0, 1],
  [6, 0, 0, 3, 0, 8, 9, 0, 0],
];
for (let i = 0; i < bord.length; i++) {
  const solve = (bord, x, num) => {
    let res1 = [];
    let res2 = [];
    for (let i = 0; i < bord.length; i++) {
      res1.push(bord[x][i]);
      res2.push(bord[i][x]);
    }

    for (let i = 0; i < res1.length; i++) {
      if (res1[i] === 0 && res1.indexOf(1) < 0) {
        res1[i] = 1;
      } else if (res1[i] === 0 && res1.indexOf(2) < 0) {
        res1[i] = 2;
      } else if (res1[i] === 0 && res1.indexOf(3) < 0) {
        res1[i] = 3;
      } else if (res1[i] === 0 && res1.indexOf(4) < 0) {
        res1[i] = 4;
      } else if (res1[i] === 0 && res1.indexOf(5) < 0) {
        res1[i] = 5;
      } else if (res1[i] === 0 && res1.indexOf(6) < 0) {
        res1[i] = 6;
      } else if (res1[i] === 0 && res1.indexOf(7) < 0) {
        res1[i] = 7;
      } else if (res1[i] === 0 && res1.indexOf(8) < 0) {
        res1[i] = 8;
      } else if (res1[i] === 0 && res1.indexOf(9) < 0) {
        res1[i] = 9;
      }
    }

    for (let i = 0; i < res2.length; i++) {
      if (res2[i] === 0 && res2.indexOf(1) < 0) {
        res2[i] = 1;
      } else if (res2[i] === 0 && res2.indexOf(2) < 0) {
        res2[i] = 2;
      } else if (res2[i] === 0 && res2.indexOf(3) < 0) {
        res2[i] = 3;
      } else if (res2[i] === 0 && res2.indexOf(4) < 0) {
        res2[i] = 4;
      } else if (res2[i] === 0 && res2.indexOf(5) < 0) {
        res2[i] = 5;
      } else if (res2[i] === 0 && res2.indexOf(6) < 0) {
        res2[i] = 6;
      } else if (res2[i] === 0 && res2.indexOf(7) < 0) {
        res2[i] = 7;
      } else if (res2[i] === 0 && res2.indexOf(8) < 0) {
        res2[i] = 8;
      } else if (res2[i] === 0 && res2.indexOf(9) < 0) {
        res2[i] = 9;
      }
    }

    for (let i = 0; i < bord.length; i++) {
      bord[x][i] = res1[i];
      bord[i][x] = res2[i];
    }
  };
  solve(bord, i);
}

console.log(bord);
