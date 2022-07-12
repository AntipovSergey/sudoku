const forSolve = require('./forSolve.js')

function solved(arr) {

    let count = 0;
    let stolb = forSolve.toColumns(arr);
    let squares = forSolve.toSquare(arr);

    for (let i = 0; i < arr.length; i++) {

        let stroka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        stroka = forSolve.arrCheck(arr[i], stroka);
        if (stroka.length !== 0) {
            return false;
        };

        let stroka2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        stroka2 = forSolve.arrCheck(stolb[i], stroka2);
        if (stroka2.length !== 0) {
            return false;
        };

        for (let u = 0; u < arr[i].length; u++) {
            let stroka3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            stroka3 = forSolve.arrCheck(squares[forSolve.coordinates(u, i)], stroka3)
            if (stroka3.length !== 0) {
                return false;
            };
        }
        let sum = arr[i].reduce((acc, val) => acc + val, 0)
        let chekZero = arr[i].includes(0)
        if (!chekZero /*&& sum === 45*/ ) {
            count += 1;
        } else {
            return false
        }
    }

    if (count === 9) {
        return true
    }

};
// console.log(solved(sud))

// console.log(solved(sud))


module.exports = solved;
