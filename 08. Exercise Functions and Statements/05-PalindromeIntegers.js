function palindromeIntegers(numbers) {
    numbers.forEach(printPalindromeResult);

    function isPalindrome(number) {
        let normalNumber = number.toString();
        let reversedNumber = normalNumber.split('').reverse().join('');

        return normalNumber === reversedNumber;
    }

    function printPalindromeResult(number) {
        console.log(isPalindrome(number));
    }
}

palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32, 2, 232, 1010]);