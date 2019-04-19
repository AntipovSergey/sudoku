let column = 
function columnSearch(column){
    for (let j = 0; j < 9; j++) { 
        let columnNumbers = [];
        for (let i = 0; i < 9; i++) {
            columnNumbers.push(column[i][j]);
        }
        let c = columnNumbers.join('');
        return c;
    }
}
console.log(columnSearch(column));