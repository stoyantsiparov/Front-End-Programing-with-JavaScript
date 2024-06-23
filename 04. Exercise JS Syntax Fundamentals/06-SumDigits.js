function sumDigids(number) {
    let textNumber = number.toString();
    let sum = 0;

    for (let i = 0; i < textNumber.length; i++) {
        // Number() така превръщам {string} в {number}
        sum += Number(textNumber[i]);
    }

    console.log(sum);
}

sumDigids(245678);
sumDigids(97561);
sumDigids(543);