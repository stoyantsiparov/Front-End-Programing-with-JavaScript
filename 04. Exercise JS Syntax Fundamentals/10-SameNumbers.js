function sameNumbers(number) {
    let numberText = number.toString();
    // Взимам 1вия елемент от стринга
    let currentDigit = numberText[0];
    let isSame = true;
    let sum = Number(currentDigit);

    // Започвам да въртя цикъла от 2рия елемент на стринга
    for (let i = 1; i < numberText.length; i++) {
        // Проверявам дали текущият символ е същият като предходния (започвам от първия символ)
        if (currentDigit !== numberText[i]) {
            // Ако не е, променливата {isSame} си остава {false}.
            isSame = false;
        }
        // Текущият символ приема стойността на следващия
        currentDigit = numberText[i];
        // Добавям числото към сумата
        sum += Number(currentDigit)
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);