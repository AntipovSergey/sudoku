const {num, read} = require('./read');
const {solve} = require('./solve');
const { isSolved } = require('./issolved')

function prettyBoard () {console.table(solve(read(num)))}

prettyBoard();