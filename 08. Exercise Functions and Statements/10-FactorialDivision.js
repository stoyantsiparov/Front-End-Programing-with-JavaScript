function factoryDivision(num1, num2) {
    let result = calculateFactoriel(num1) / calculateFactoriel(num2);

    console.log(result.toFixed(2));

    function calculateFactoriel(number) {
        if (number === 1) {
            return 1;
        }

        return number * calculateFactoriel(number - 1);
    }
}

factoryDivision(5, 2);

factoryDivision(6, 2);