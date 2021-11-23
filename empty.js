function empty(boar) {
  for (let i = 0; i < boar.length; i++) {
    for (let k = 0; k < boar[i].length; k++) {
      if (boar[i][k] === 0) {
        return [i, k];
      }
    }
  }
  return null;
}
module.exports = empty;
