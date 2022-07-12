// let sud = [
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
// ];


// console.log(solved(sud))



function solved(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i].reduce((acc, val) => acc + val, 0)
        let chekZero = arr[i].includes(0)
        if (!chekZero /*&& sum === 45*/) {
            count += 1;
        } else {
            return false
        }

    }
    if (count === 9) {
        return true
    }
};

module.exports = solved;