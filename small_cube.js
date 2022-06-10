const createBoard = require('./simBoard')

function smallCube(boord, num, i, j){
        for (let k = Math.floor(i/3)*3; k < (Math.floor(i/3)*3)+3; k++){    //y
            for (let l = Math.floor(j/3)*3; l < (Math.floor(j/3)*3)+3; l++){    //x
            if (+boord[k][l] == num && (l !== i || k !== j)){
                return false
            }
        }
    }
        return true
}
// console.log(createBoard())
// console.log(smallCube(createBoard(), 9, 8, 8))

module.exports = smallCube