const data = [
  '105802000090076405200400819019007306762083090000061050007600030430020501600308900',
  '005030081902850060600004050007402830349760005008300490150087002090000600026049503',
  '290500007700000400004738012902003064800050070500067200309004005000080700087005109',
  '080020000040500320020309046600090004000640501134050700360004002407230600000700450',
  '608730000200000460000064820080005701900618004031000080860200039050000100100456200',
  '000689100800000029150000008403000050200005000090240801084700910500000060060410000',
  '030500804504200010008009000790806103000005400050000007800000702000704600610300500',
  '096040001100060004504810390007950043030080000405023018010630059059070830003590007',
  '000075400000000008080190000300001060000000034000068170204000603900000020530200000',
  '300000000050703008000028070700000043000000000003904105400300800100040000968000200',
  '302609005500730000000000900000940000000000109000057060008500006000000003019082040',
  '020500004805000000004809020000005073090000060250900000030601800000000407100004090',
  '007008000000200060650079000070000305083000670201000080000710038020005000000400200',
  '000000000020650000000180040090000604030005700000000000000000007300000090000000000',
  '000000000000000000000000000000000000000000000000000000000000000000000000000000000',
];

// function sudokuParse(content, puzzleNumber = 0) {
//   let puzzle = content.split('\n')[puzzleNumber];
//   console.log(puzzle);
//   return puzzle;
// }

// function readAndSolve(err, data) {
//   if (err) {
//     throw err;
//   }
//   let puzzle = sudokuParse(data);

//   let board = sudoku.createBoard(puzzle);
//   let solvedPuzzle = sudoku.solve(board);
//   if (sudoku.isSolved(solvedPuzzle)) {
//     console.log('The board was solved!');
//     console.table(sudoku.prettyBoard(board));
//   } else {
//     console.log("The board wasn't solved :(");
//   }
// }
// fs.readFile('./sudoku-puzzles.txt', 'utf-8', readAndSolve);
// front end

const button = document.getElementById('button');
const lines = document.getElementsByClassName('line');


// 105802000
// 090076405
// 200400819
// 019007306
// 762083090
// 000061050
// 007600030
// 430020501
// 600308900

button.addEventListener('click', () => {
  console.log(lines);
  for (let i = 0; i < 81; i += 1) {
    lines[i].innerText = data[0][i];
  }
  const board = createBoard(data[0]);
  solve(board);
  button.addEventListener('click', () => {
    if (isSolved()) {
      console.log(board);
      for (let i = 0; i < 81; i++) {
        lines[i].innerText = board[i][i]

      }
    }
  })
})

// Reads file and sends data from it to the readAndSolve function.

