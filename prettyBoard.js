const read = require('./read');

const prettyBoard = () => {
    const sudokuVue = read().join('\n').replace(/,/g, ' ');
    return sudokuVue;
  }
console.log(prettyBoard())

module.exports = prettyBoard;