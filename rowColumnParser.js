function rowColumnParser(index, puzzle) {      // index[0] - i , index[1] - j
    const candidates = ['1','2','3','4','5','6','7','8','9']
    for (let i = index[0]; i < puzzle.length; i++) {
        if (puzzle[i].includes(candidates[i])) {
            candidates.splice(puzzle[i].indexOf(candidates[i]), 1)
            puzzle[i].splice(puzzle[i], 1, candidates[i])
         }
        }

    for (let j = index[1]; j < puzzle.length; j++) {
        if (puzzle[j][index[1]].includes(candidates[j])) {
            candidates.splice(puzzle[j].indexOf(candidates[j]), 1)
            puzzle[j][index[1]].splice(puzzle[j], 1, candidates[j])
         }
    }

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

  console.log(rowColumnParser(indexTest, test))

module.exports = rowColumnParser;