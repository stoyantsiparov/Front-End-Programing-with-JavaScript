function arrayRotation(numbers, rotations) {
    for (let i = 0; i < rotations; i++) {
        // Първо {(numbers.shift()} вади 1вия елемент от масива
        let firstNumber = numbers.shift();
        // И {numbers.push} го слага най-отзад
        numbers.push(firstNumber);
    }

    console.log(numbers.join(" "));
}

arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);