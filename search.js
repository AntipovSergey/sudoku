let arr = [
        [1,0,5,8,0,2,0,0,0],[0,9,0,0,7,6,4,0,5],[2,0,0,4,0,0,8,1,9],
        [0,1,9,0,0,7,3,0,6],[7,6,2,0,8,3,0,9,0],[0,0,0,0,6,1,0,5,0],
        [0,0,7,6,0,0,0,3,0],[4,3,0,0,2,0,5,0,1],[6,0,0,3,0,8,9,0,0]
    ]


function VerticalGorizontal(arr){
let arrVertival = []
    let verticalElem1Stolbec = []
    let verticalElem2Stolbec = []
    let verticalElem3Stolbec = []
    let verticalElem4Stolbec = []
    let verticalElem5Stolbec = []
    let verticalElem6Stolbec = []
    let verticalElem7Stolbec = []
    let verticalElem8Stolbec = []
    let verticalElem9Stolbec = []
let arrGorizontal = []
    let gorizontElem1Strochka = []
    let gorizontElem2Strochka = []
    let gorizontElem3Strochka = []
    let gorizontElem4Strochka = []
    let gorizontElem5Strochka = []
    let gorizontElem6Strochka = []
    let gorizontElem7Strochka = []
    let gorizontElem8Strochka = []
    let gorizontElem9Strochka = []

    //1 Vertical Gorizont
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gorizontElem1Strochka.push(arr[i][j])
            }
        }
    for (let k = 0; k < 7; k+=3) {
        for (let l = 0; l < 7; l+=3) {
            verticalElem1Stolbec.push(arr[k][l])
                }
            }
            //2 Vertical Gorizont
            for (let i = 0; i < 3; i++) {
                for (let j = 3; j < 6; j++) {
                    gorizontElem2Strochka.push(arr[i][j])
                    }
                }
            for (let k = 0; k < 7; k+=3) {
                for (let l = 1; l < 8; l+=3) {
                    verticalElem2Stolbec.push(arr[k][l])
                        }
                    }
                    //3 Vertical Gorizont
                    for (let i = 0; i < 3; i++) {
                        for (let j = 6; j < 9; j++) {
                            gorizontElem3Strochka.push(arr[i][j])
                            }
                        }
                    for (let k = 0; k < 7; k+=3) {
                        for (let l = 2; l < 9; l+=3) {
                            verticalElem3Stolbec.push(arr[k][l])
                                }
                            }
                            //4 Vertical Gorizont
                            for (let i = 3; i < 6; i++) {
                                for (let j = 0; j < 3; j++) {
                                    gorizontElem4Strochka.push(arr[i][j])
                                    }
                                }
                            for (let k = 1; k < 8; k+=3) {
                                for (let l = 0; l < 7; l+=3) {
                                    verticalElem4Stolbec.push(arr[k][l])
                                        }
                                    }
                                    //5 Vertical Gorizont
                                    for (let i = 3; i < 6; i++) {
                                        for (let j = 3; j < 6; j++) {
                                            gorizontElem5Strochka.push(arr[i][j])
                                            }
                                        }
                                    for (let k = 1; k < 8; k+=3) {
                                        for (let l = 1; l < 8; l+=3) {
                                            verticalElem5Stolbec.push(arr[k][l])
                                                }
                                            }
                                            //6 Vertical Gorizont
                                            for (let i = 3; i < 6; i++) {
                                                for (let j = 6; j < 9; j++) {
                                                    gorizontElem6Strochka.push(arr[i][j])
                                                    }
                                                }
                                            for (let k = 1; k < 8; k+=3) {
                                                for (let l = 2; l < 9; l+=3) {
                                                    verticalElem6Stolbec.push(arr[k][l])
                                                        }
                                                    }
                                                     //7 Vertical Gorizont
                                            for (let i = 6; i < 9; i++) {
                                                for (let j = 0; j < 3; j++) {
                                                    gorizontElem7Strochka.push(arr[i][j])
                                                    }
                                                }
                                            for (let k = 2; k < 9; k+=3) {
                                                for (let l = 0; l < 7; l+=3) {
                                                    verticalElem7Stolbec.push(arr[k][l])
                                                        }
                                                    }
                                                       //8 Vertical Gorizont
                                            for (let i = 6; i < 9; i++) {
                                                for (let j = 3; j < 6; j++) {
                                                    gorizontElem8Strochka.push(arr[i][j])
                                                    }
                                                }
                                            for (let k = 2; k < 9; k+=3) {
                                                for (let l = 1; l < 8; l+=3) {
                                                    verticalElem8Stolbec.push(arr[k][l])
                                                        }
                                                    }
                                                    //9 Vertical Gorizont
                                            for (let i = 6; i < 9; i++) {
                                                for (let j = 6; j < 9; j++) {
                                                    gorizontElem9Strochka.push(arr[i][j])
                                                    }
                                                }
                                            for (let k = 2; k < 9; k+=3) {
                                                for (let l = 2; l < 9; l+=3) {
                                                    verticalElem9Stolbec.push(arr[k][l])
                                                        }
                                                    }

    
    return [
            [verticalElem1Stolbec, 
            verticalElem2Stolbec, 
            verticalElem3Stolbec, 
            verticalElem4Stolbec, 
            verticalElem5Stolbec,
             verticalElem6Stolbec, 
             verticalElem7Stolbec, 
             verticalElem8Stolbec, 
             verticalElem9Stolbec],
            [gorizontElem1Strochka,
                gorizontElem2Strochka,
                gorizontElem3Strochka, 
                gorizontElem4Strochka, 
                gorizontElem5Strochka, 
                gorizontElem6Strochka, 
                gorizontElem7Strochka, 
                gorizontElem8Strochka, 
                gorizontElem9Strochka]
            ]
}
        




    console.log(VerticalGorizontal(arr))
    

    

