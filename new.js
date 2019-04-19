let column = [[1,2,3,4],[5,3,4,5],[3,4,5,6],[4,5,6,7]];

function columnSearch(column){
    let columnNumbers = [];
    for (let j = 0; j < 9; j++) {
        let numbers = [];
        for (let i = 0; i < 9; i++) {
            numbers.push(column[i][j]);
        }
        columnNumbers.push(numbers);
    }
    let c = columnNumbers.join('');
    return c;
 }
 console.log(columnSearch(column))