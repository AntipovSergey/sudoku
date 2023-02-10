const getBoard = function (str) {
    const arr = str.split('');
    const board = [];
    while (arr.length) {
      board.push(arr.splice(0, 9));
    }
    return board;
  };
//   console.log(getBoard('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))
module.exports = getBoard