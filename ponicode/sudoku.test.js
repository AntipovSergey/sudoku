const sudoku = require("../sudoku")
// @ponicode
describe("sudoku.isSolved", () => {
    test("0", () => {
        let result = sudoku.isSolved({ length: 16, slice: () => "foo bar" })
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let result = sudoku.isSolved({ length: 32, slice: () => "Foo bar" })
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let result = sudoku.isSolved({ length: 64, slice: () => "foo bar" })
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let result = sudoku.isSolved({ length: 32, slice: () => "This is a Text" })
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let result = sudoku.isSolved({ length: 0, slice: () => "Foo bar" })
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = sudoku.isSolved({ length: NaN, slice: () => "" })
        expect(result).toMatchSnapshot()
    })
})
