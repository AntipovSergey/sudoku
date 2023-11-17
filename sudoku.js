const puzzles = [
  [1, "-", 5, 8, "-", 2, "-", "-", "-"],
  ["-", 9, "-", "-", 7, 6, 4, "-", 5],
  [2, "-", "-", 4, "-", "-", 8, 1, 9],
  ["-", 1, 9, "-", "-", 7, 3, "-", 6],
  [7, 6, 2, "-", 8, 3, "-", 9, "-"],
  ["-", "-", "-", "-", 6, 1, "-", 5, "-"],
  ["-", "-", 7, 6, "-", "-", "-", 3, "-"],
  [4, 3, "-", "-", 2, "-", 5, "-", 1],
  [6, "-", "-", 3, "-", 8, 9, "-", "-"],
];

// console.table(puzzles);

function validateSquared(puzzles) {
  let resultArr = [];
  for (let i = 0; i < puzzles.length; i += 3) {
    for (let j = 0; j < puzzles.length; j++) {
      resultArr.push(puzzles[j].slice(i, i + 3));
    }
  }

  resultArrSqd = []
  for (let i = 0; i < resultArr.length; i += 3) {
    resultArrSqd.push(resultArr.slice(i, i+3).join())
  }

  console.log(resultArrSqd);

}

validateSquared(puzzles);
