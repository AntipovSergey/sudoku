let sudoku =  '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'

const strToArr = () => {
  const sudokuArr = [];
  let result = sudoku.split('')
  for (let i = 0;i<result.length;i++) {
    sudokuArr.push(result.splice(0,9));
  }
}
