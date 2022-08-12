function rowColunmParser(index, puzzle) {// index[0] - i , index[1] - j
    const sudoku = [...puzzle]
    const candidates = [1,2,3,4,5,6,7,8,9]
    for (let i = index[0]; i < sudoku.length; i++) {
        puzzle[i].forEach((el) => {
            el = []
            el.filter(candidates)
            return
        });
    }

    for (let j = index[1]; j < sudoku.length; j++) {
        puzzle[j].forEach((el) => {
            el = []
            el.filter(candidates)
            return
        })
    }
    if (candidates.length > 1) return sudoku
    else {

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

  const indexTest = [3, 4]

  console.log(rowColunmParser(indexTest, test))

module.exports = rowColunmParser;