const rewire = require("rewire")
const sudoku = rewire("../sudoku")
const isSolvedColumn = sudoku.__get__("isSolvedColumn")
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

// @ponicode
describe("isSolvedColumn", () => {
    test("0", () => {
        let param1 = [["da7588892", "12345", "c466a48309794261b64a4f02cfcc3d64", "9876"], ["c466a48309794261b64a4f02cfcc3d64", "da7588892", "9876", "c466a48309794261b64a4f02cfcc3d64"], ["12345", "9876", "12345", "12345"], ["9876", "9876", "12345", "9876"]]
        let result = isSolvedColumn(param1)
        expect(result).toMatchSnapshot()
    })

    test("1", () => {
        let param1 = [["da7588892", "da7588892", "bc23a9d531064583ace8f67dad60f6bb", "9876"], ["da7588892", "9876", "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb"], ["bc23a9d531064583ace8f67dad60f6bb", "da7588892", "da7588892", "12345"], ["c466a48309794261b64a4f02cfcc3d64", "12345", "bc23a9d531064583ace8f67dad60f6bb", "12345"]]
        let result = isSolvedColumn(param1)
        expect(result).toMatchSnapshot()
    })

    test("2", () => {
        let param1 = [["da7588892", "c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb", "12345"], ["bc23a9d531064583ace8f67dad60f6bb", "12345", "da7588892", "c466a48309794261b64a4f02cfcc3d64"], ["c466a48309794261b64a4f02cfcc3d64", "da7588892", "da7588892", "bc23a9d531064583ace8f67dad60f6bb"], ["da7588892", "da7588892", "12345", "da7588892"]]
        let result = isSolvedColumn(param1)
        expect(result).toMatchSnapshot()
    })

    test("3", () => {
        let param1 = [["c466a48309794261b64a4f02cfcc3d64", "da7588892", "c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb"], ["12345", "12345", "12345", "bc23a9d531064583ace8f67dad60f6bb"], ["c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb", "bc23a9d531064583ace8f67dad60f6bb"], ["12345", "bc23a9d531064583ace8f67dad60f6bb", "da7588892", "9876"]]
        let result = isSolvedColumn(param1)
        expect(result).toMatchSnapshot()
    })

    test("4", () => {
        let param1 = [["bc23a9d531064583ace8f67dad60f6bb", "da7588892", "c466a48309794261b64a4f02cfcc3d64", "da7588892"], ["bc23a9d531064583ace8f67dad60f6bb", "9876", "bc23a9d531064583ace8f67dad60f6bb", "9876"], ["c466a48309794261b64a4f02cfcc3d64", "da7588892", "c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb"], ["9876", "da7588892", "c466a48309794261b64a4f02cfcc3d64", "bc23a9d531064583ace8f67dad60f6bb"]]
        let result = isSolvedColumn(param1)
        expect(result).toMatchSnapshot()
    })

    test("5", () => {
        let result = isSolvedColumn([])
        expect(result).toMatchSnapshot()
    })
})
