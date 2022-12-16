const generateBoard = require('./generateBoard');
const VerticalGorizontal = require('./search');

const field = generateBoard(0);
const vertical = VerticalGorizontal(field)[0];
const horizontal = VerticalGorizontal(field)[1];

const check = (fields, verticalElems, horizontalElems) => {
    const valuesForCheck = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const fieldsCopy = fields.map((el) => el);
    let check = false;
    for (let i = 0; i < 999; i += 1) {
        for (let i = 0; i < fields.length; i += 1) {
            for (let j = 0; j < fields[i].length; j += 1) {
                if (
                    fields[i][j] === 0 &&
                    !fields[i].includes(valuesForCheck[j]) &&
                    !verticalElems.includes(valuesForCheck[j]) &&
                    !horizontalElems.includes(valuesForCheck[j])
                ) fieldsCopy[i][j] = valuesForCheck[j];
            };
        };
    }
    return fieldsCopy;
};
