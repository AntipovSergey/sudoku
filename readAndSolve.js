const fs = require('fs');

function readAndSolve(numEx) {
  const txtfile = fs.readFileSync('./puzzles.txt', 'utf8');
  const fullStr = txtfile.split('\n');
  const expArr = fullStr[numEx].split('');
  const res = [[], [], [], [], [], [], [], [], []];
  expArr.forEach((elem, i) => {
    if (i <= 8) res[0].push(elem);
    if (i > 8 && i <= 17) res[1].push(elem);
    if (i > 17 && i <= 26) res[2].push(elem);
    if (i > 26 && i <= 35) res[3].push(elem);
    if (i > 35 && i <= 44) res[4].push(elem);
    if (i > 44 && i <= 53) res[5].push(elem);
    if (i > 53 && i <= 62) res[6].push(elem);
    if (i > 62 && i <= 71) res[7].push(elem);
    if (i > 71) res[8].push(elem);
  });
  return res;
}
