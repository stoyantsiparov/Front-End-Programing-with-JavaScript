function cookingByNums(number, op1, op2, op3, op4, op5) {
    let result = Number(number);

    // Взимам 1вата букна от всички 5 операции и ги запазвам в 1 стринг
    let operations = op1[0] + op2[0] + op3[0] + op4[0] + op5[0];

    // Обикалям целия стринг
    for (let i = 0; i < operations.length; i++) {
        // Проверявам коя буква се пада на стринга {operations[i]} и според това правя дадената операция
        switch (operations[i]) {
            case "c":
                result /= 2;
                break;
            case "d":
                result = Math.sqrt(result);
                break;
            case "s":
                result += 1;
                break;
            case "b":
                result *= 3;
                break;
            case "f":
                result -= result * 0.2;
                break;
        }

        console.log(result);
    }
}

cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

// Решение с масив
// function cookingByNums(number, ...operations) {
//     let result = Number(number);

//     for (let i = 0; i < operations.length; i++) {
//         switch (operations[i]) {
//             case "chop":
//                 result /= 2;
//                 break;
//             case "dice":
//                 result = Math.sqrt(result);
//                 break;
//             case "spice":
//                 result += 1;
//                 break;
//             case "bake":
//                 result *= 3;
//                 break;
//             case "fillet":
//                 result -= result * 0.2;
//                 break;
//         }

//         console.log(result);
//     }
// }