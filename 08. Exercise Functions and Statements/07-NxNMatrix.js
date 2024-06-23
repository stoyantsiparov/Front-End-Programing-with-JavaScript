function nxnMatrix(number) {
    // Създавам нов масив е {new Array} пълня го с числото {fill(num)} и го сплитвам по интервал
    let createRow = (num) => new Array(num).fill(num).join(' ');

    for (let i = 0; i < number; i++) {
        console.log(createRow(number));
    }
}

nxnMatrix(3);

nxnMatrix(7);

nxnMatrix(2);