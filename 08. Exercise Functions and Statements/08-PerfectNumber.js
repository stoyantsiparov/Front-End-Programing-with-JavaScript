function perfectNumber(number) {
    let divisors = getDivisors(number);
    let sum = divisors.reduce((a, b) => a + b, 0);

    if (sum === number) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

    function getDivisors(number) {
        let divisors = [];

        // Правя това {number - 2}, за да не хвана {number}-а
        for (let i = number - 1; i >= 0; i--) {
            if (number % i === 0) {
                divisors.push(i);
            }
        }

        return divisors;
    }
}

perfectNumber(6);

perfectNumber(28);

perfectNumber(1236498);