const td = document.getElementsByClassName('item');
const cleanBtn = document.getElementById('clean');
const solveBtn = document.getElementById('solved');

solveBtn.addEventListener('click', () => {
    const arr = document.getElementsByClassName('item');
    const res = solve(str);
    for (let i = 0; i < arr.length; i += 1) {
        arr[i].innerHTML = res[i]
    }
});

cleanBtn.addEventListener('click', () => {
    window.location.reload();
})