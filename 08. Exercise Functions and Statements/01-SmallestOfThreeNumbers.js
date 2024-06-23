function findSmallestNum(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
}

// function findSmallestNumber(num1, num2, num3) {
//     let smallest = Math.min(num1, num2, num3);
//     console.log(smallest);
// }

findSmallestNum(2,
    5,
    3
);

findSmallestNum(600,
    342,
    123

);

findSmallestNum(25,
    21,
    4

);

findSmallestNum(2,
    2,
    2
);