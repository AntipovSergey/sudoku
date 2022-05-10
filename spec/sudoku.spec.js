/* eslint-disable */


const sudoku = require('../sudoku.js')


describe ("проверят заполняемость судоку", () => {

  const simple = sudoku.createArrays("29-5----77-----4----4738-129-2--3-648---5--7-5---672--3-9--4--5----8-7---87--51-9")
  const difficult = sudoku.createArrays("--7--8------2---6-65--79----7----3-5-83---67-2-1----8----71--38-2---5------4--2--")
  const emptyPos = sudoku.findEmpty(difficult)

  describe ("test for fillBoard simple", () => {
    it("if fillBoard is working", function (){
      expect(sudoku.fillBoard(simple)).toBeTruthy()
    })
  })

  describe ("test for fillBoard difficult", () => {
    it("if fillBoard is working", function (){
      expect(sudoku.fillBoard(difficult)).toBeFalsy()
    })
  })

  describe ("test for fillBoardSmart", () => {
    it("if fillBoardSmart is working", function (){
      expect(sudoku.fillBoardSmart(difficult, emptyPos, 0)).toBeTruthy()
    })
  })
})



