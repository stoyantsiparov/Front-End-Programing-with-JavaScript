function revealWords(wordsInput, template) {
    const words = wordsInput.split(', ');
    let startIndex = -1;
    let endIndex = -1;

    // Обикалям целия масив
    for (let i = 0; i < template.length; i++) {
        // Проверявам кога съм на 1вия елемент {*}
        if (template[i] === '*') {
            // Запомням от кой до кой индекс елементите са {*}-ки
            if (startIndex < 0) {
                startIndex = i;
                endIndex = i + 1;
            } else {
                endIndex = i + 1;
            }
        } else {
            // Проверявам кога съм на 1вия елемент след {*}
            if (startIndex >= 0) {
                // Намирам дължината на {*}-ките, на мястото на които трябва да съвпадне дума
                let emptySpace = endIndex - startIndex;
                // Намирам думата, която е с еднаква дължина като звездичките
                let wordToPaste = words.find(w => w.length === emptySpace);
                // Поставям думата върху мястото заето от {*}-ките
                template = template.replace('*'.repeat(emptySpace), wordToPaste);

                // Занулявам стартовия и крайния индекс на мястото за попълване ({*}-ките)
                startIndex = -1;
                endIndex = -1;
            }
        }
    }

    // Проверявам 2ри път същото нещо, защото думата може да е последната дума в изречението
    // Проверявам кога съм на 1вия елемент след {*}
    if (startIndex >= 0) {
        // Намирам дължината на {*}-ките, на мястото на които трябва да съвпадне дума
        let emptySpace = endIndex - startIndex;
        // Намирам думата, която е с еднаква дължина като звездичките
        let wordToPaste = words.find(w => w.length === emptySpace);
        // Поставям думата върху мястото заето от {*}-ките
        template = template.replace('*'.repeat(emptySpace), wordToPaste);
    }

    console.log(template);
}
// Решение с {REGEX}
function revealWordsWithRegex(wordsInput, template) {
    const words = wordsInput.split(', ');

    const matches = template.matchAll(/\*/g);
    for (const match of matches) {
        const word = words.find(w => w.length === match[0].length)
        template = template.replace(match[0], words.find);
    }

    console.log(template);
}

revealWords('great',
    'softuni is ***** place for learning new programming languages'
);

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);