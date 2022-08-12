function rowColumnParser(index, puzzle, candidates) {      // index[0] - i , index[1] - j
    for (let i = index[0]; i < 9; i++) {
      if (candidates.indexOf(puzzle[index[0]][i]) !== -1)
      candidates.splice(candidates.indexOf(puzzle[index[0]][i]), 1)
        }

    for (let j = index[1]; j < 9; j++) {
      if (candidates.indexOf(puzzle[j][index[1]]) !== -1)
      candidates.splice(candidates.indexOf(puzzle[j][index[1]]), 1)
    }

    // if (candidates.length === 1) {
    //   puzzle[index[0]][index[1]] = candidates[0]
    // }

    if (candidates.length > 1) { 
        return {candidates , puzzle}
    } else {
        return 'test'
    }
}


const test = [
    [
      '1', '-', '5',
      '8', '-', '2',
      '-', '-', '-'
    ],
    [
      '-', '9', '-',
      '-', '7', '6',
      '4', '-', '5'
    ],
    [
      '2', '-', '-',
      '4', '-', '-',
      '8', '1', '9'
    ],
    [
      '-', '1', '9',
      '-', '-', '7',
      '3', '-', '6'
    ],
    [
      '7', '6', '2',
      '-', '8', '3',
      '-', '9', '-'
    ],
    [
      '-', '-', '-',
      '-', '6', '1',
      '-', '5', '-'
    ],
    [
      '-', '-', '7',
      '6', '-', '-',
      '-', '3', '-'
    ],
    [
      '4', '3', '-',
      '-', '2', '-',
      '5', '-', '1'
    ],
    [
      '6', '-', '-',
      '3', '-', '8',
      '9', '-', '-'
    ]
  ]

  const indexTest = [0, 1]

  const candidates = ['1','2','3','4','5','6','7','8','9']

  console.log(rowColumnParser(indexTest, test, candidates))

module.exports = rowColumnParser;