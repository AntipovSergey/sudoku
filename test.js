function check(arr4, tempArray4, num4) {
  const x = tempArray4[0];
  const y = tempArray4[1];

  const arrDop = [];
  for (let i = 0; i < arr4.length; i++) {
    arrDop.push(arr4[i][y]);
  }
  if (!arr4[x].includes(num4) && !arrDop.includes(num4)) {
    return true;
  } return false;
}

module.exports = check;
