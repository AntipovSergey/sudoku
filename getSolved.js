

function getSolved(arr) {
    for (let i =0;i<arr.length;i++){
        if(arr[i].includes(0)) return false
    }
    return true
}
