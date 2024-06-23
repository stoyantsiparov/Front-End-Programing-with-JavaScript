function substring(word, text) {
    // Вземаме всички думи и ги правим с малки букви от текста
    const words = text.toLowerCase().split(' ');
    // Проверяваме в нова променлива дали сплитнатите думи {words} отговавят на думата дадена ни по условие {word}
    const isIncluded = words.includes(word.toLowerCase());

    // Ако я има е изписвам и ако е няма изписвам -> {`${word} not found!`}
    if (isIncluded) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

substring('javascript',
    'JavaScript is the best programming language'
);

substring('python',
    'JavaScript is the best programming language'
);