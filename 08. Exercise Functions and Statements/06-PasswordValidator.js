function passwordValidator(password) {
    // Проверявам дали паролата е между 6 и 10 символа (включително)
    let isValidLength = password => password.length >= 6 && password.length <= 10;
    // Проверявам дали паролата има само букви и цифри 
    // {.test(password)} проверява бързо дали даден елемент отговаря на {REGEX} условие и връща -> true/false
    let isAlphaNumerical = password => /^[a-zA-Z0-9]+$/.test(password);
    // Проверявам дали паролата има поне 2 цифри
    // Проверявам дали числото е {INTEGER} с {Number.isInteger}, ако обърна {Number(character)} в {INTEGER}
    let doesItHave2Digits = password => password
        .split('')
        .filter(character => Number.isInteger(Number(character)))
        .length >= 2;

    let isValid = true;

    if (!isValidLength(password)) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }

    if (!isAlphaNumerical(password)) {
        isValid = false;
        console.log("Password must consist only of letters and digits");
    }

    if (!doesItHave2Digits(password)) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }

    if (isValid) {
        console.log("Password is valid");
    }
}

passwordValidator('logIn');

passwordValidator('MyPass123');

passwordValidator('Pa$s$s');