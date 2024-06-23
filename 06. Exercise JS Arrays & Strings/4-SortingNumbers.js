function sortedNumbers(numbers) {
    // Сортирам масива като взимам най-малкия и най-големия елемент, след което взимам следващия най-малък и най-голям елемент и т.н.
    const sortedNumbers = numbers.sort((a, b) => a - b);
    const result = [];

    while (sortedNumbers.length > 0) {
        // Първо {(sortedNumbers.shift()} вади 1вия елемент от масива
        let firstNumber = sortedNumbers.shift();
        // После {sortedNumbers.pop} вади последния елемент от масива
        let lastNumber = sortedNumbers.pop();

        // {result.push} слага най-отзад елемента в празния масив (най-малкото число)
        result.push(firstNumber);

        if (lastNumber) {
            // {result.push} слага най-отзад елемента в празния масив (най-голямото число)
            result.push(lastNumber);
        }
    }

    return result;
}

sortedNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);