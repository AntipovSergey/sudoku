// const createBoard = require('./simBoard')

function row(boord, num, i, j) {
  for (let k = 0; k < boord.length; k++) {
    if (+boord[i][k] === num && j !== k) {
      return false;
    }
  }
  return true;
}
// console.log(row(createBoard(), 4, 0, 1))

module.exports = row;
