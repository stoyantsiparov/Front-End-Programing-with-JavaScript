function OddAndEvenSum(number) {
    const sumOdd = sumOfOddDigits(number);
    const sumEven = sumOfEvenDigits(number);

    function sumOfEvenDigits(number) {
        let evenSum = 0;
        // Пвавя числото (number) на стринг в  -> (digits)
        let digits = number.toString();

        for (let i = 0; i < digits.length; i++) {
            // Пвавя стринга (digits) за всяко число (digits[i])
            let digit = parseInt(digits[i]);

            if (digit % 2 === 0) {
                evenSum += digit;
            }
        }

        return evenSum;
    }

    function sumOfOddDigits(number) {
        let oddSum = 0;
        // Пвавя числото (number) на стринг в  -> (digits)
        let digits = number.toString();

        for (let i = 0; i < digits.length; i++) {

            let digit = parseInt(digits[i]);

            if (digit % 2 !== 0) {
                oddSum += digit;
            }
        }

        return oddSum;
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}

OddAndEvenSum(1000435);

OddAndEvenSum(3495892137259234);