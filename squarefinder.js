
let incorrectNumbers = {};
 

function findInSquare(arr, i = 0, j = 0) {

    let borders = defineBoarders(i, j);

    for (let i = borders.top; i <= borders.bottom; i++) {
        for (let j = borders.left; j <= borders.right; j++) {
            if (arr[i][j]){
                incorrectNumbers[arr[i][j]] = true;
            }
        }
    }
}


function defineBoarders(i, j) {

    let borders = {};

    if (i / 3 < 1) {
        borders.top = 0;
        borders.bottom = 2;
    } else if (i / 3 < 2){
        borders.top = 3;
        borders.bottom = 5;
    } else {
        borders.top = 6;
        borders.bottom = 8;
    }

    if (j / 3 < 1) {
        borders.left = 0;
        borders.right = 2;
    } else if (j / 3 < 2){
        borders.left = 3;
        borders.right = 5;
    } else {
        borders.left = 6;
        borders.right = 8;
    }
    return borders;
}

