function printAndSum(firstNum, secondNum) {
    let result = "";
    let sum = 0;
    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;
        result += i + " ";
    }

    console.log(result.trim());
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);