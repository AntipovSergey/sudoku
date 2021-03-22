const sudoku = new Sudoku(`
  100 000 004
  000 020 000
  000 000 900

  000 000 060
  000 030 000
  500 060 000

  000 700 000
  500 000 000
  008 000 040
`);
document.querySelector('#app').append(sudoku.getHTML(750));
