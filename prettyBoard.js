
function prettyBoard(board) {
   let resultArr = [];
 for (let i = 0; i < board.length; i = i + 9) {
   resultArr.push(board.slice(i, i + 9));
 }
 let newArr = resultArr.map(el => el.split('').join(' '));

 return newArr;

}

module.exports = {prettyBoard};
  