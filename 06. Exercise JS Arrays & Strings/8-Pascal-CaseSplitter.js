function splitter(input) {
    // С {REGEX} сплитвам {input}-а по думи с една главна буква и {n} на брой малки след нея
    const matches = input.matchAll(/[A-Z][a-z]*/g);

    // С {Array.from(matches)} правя {REGEX}-а на масив, а с {.map(match => match[0]} изписвам всички думи които са с една главна буква и {n} на брой малки след нея
    const words = Array.from(matches).map(match => match[0]);
    console.log(words.join(', '));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
splitter('HoldTheDoor');
splitter('ThisIsSoAnnoyingToDo');