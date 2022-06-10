const createBoard = require('./simBoard');

function column(boord, num, i, j){
        for (let k = 0; k < boord.length; k++){
            
            if (+boord[k][j] == num && i !== k){
                return false
            }
        }
        return true
}
// console.log(column(createBoard(), 4, 0, 1))
module.exports = column
