let arr = [
        [1,0,5,8,0,2,0,0,0],[0,9,0,0,7,6,4,0,5],[2,0,0,4,0,0,8,1,9],
        [0,1,9,0,0,7,3,0,6],[7,6,2,0,8,3,0,9,0],[0,0,0,0,6,1,0,5,0],
        [0,0,7,6,0,0,0,3,0],[4,3,0,0,2,0,5,0,1],[6,0,0,3,0,8,9,0,0]
    ]


function seachVerticalGorizontal(arr){
   
    let verticalElem1Stolbec = []
    let verticalElem2Stolbec = []
    let verticalElem3Stolbec = []
    let verticalElem4Stolbec = []
    let verticalElem5Stolbec = []
    let verticalElem6Stolbec = []
    let verticalElem7Stolbec = []
    let verticalElem8Stolbec = []
    let verticalElem9Stolbec = []

    let gorizontElem1Strochka =[]
    let gorizontElem2Strochka =[]
    let gorizontElem3Strochka =[]
    let gorizontElem4Strochka =[]
    let gorizontElem5Strochka =[]
    let gorizontElem6Strochka =[]
    let gorizontElem7Strochka =[]
    let gorizontElem8Strochka =[]
    let gorizontElem9Strochka =[]

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
    
    

   
    return gorizontElem1Strochka

 }
        




    console.log(searchQuatro(arr))
    

    

