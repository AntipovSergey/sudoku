const fi = [
    [1, 0, 5, 8, 0, 2, 0, 0, 0],
    [0, 9, 0, 0, 7, 6, 4, 0, 5],
    [2, 0, 0, 4, 0, 0, 8, 1, 9],
    [0, 1, 9, 0, 0, 7, 3, 0, 6],
    [7, 6, 2, 0, 8, 3, 0, 9, 0],
    [0, 0, 0, 0, 6, 1, 0, 5, 0],
    [0, 0, 7, 6, 0, 0, 0, 3, 0],
    [4, 3, 0, 0, 2, 0, 5, 0, 1],
    [6, 0, 0, 3, 0, 8, 9, 0, 0]
];
const vert = [
    
]
const hor = [];



const check = (fields, verticalElems, horizontalElems) => {
    const valuesForCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const fieldsCopy = fields.map((el) => el);
    let check = false;
    for (let i = 0; i < fields.length; i += 1) {
        for (let j = 0; j < fields[i].length; j += 1) {
            if (
                !fields[i].includes(valuesForCheck[j]) &&
                !verticalElems.includes(valuesForCheck[j]) &&
                !horizontalElems.includes(valuesForCheck[j])
            ) fieldsCopy[i][j] = valuesForCheck[j];
        };
    };
};