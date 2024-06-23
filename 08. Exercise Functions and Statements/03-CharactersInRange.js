function charactersInRange(char1, char2) {
    const sortedCharacters = getSortedCharacters(char1, char2);
    const start = sortedCharacters[0];
    const end = sortedCharacters[1];

    const result = getCharacterBetween(start, end);

    console.log(result.join(' '));

    function getCharacterBetween(start, end) {
        let characters = [];

        const startIndex = start.charCodeAt(0) + 1;
        const endIndex = end.charCodeAt(0);

        for (let i = startIndex; i < endIndex; i++) {
            characters.push(String.fromCharCode(i))
        }

        return characters;
    }

    function getSortedCharacters(a, b) {
        const characters = [a, b];

        characters.sort();

        return characters;
    }
}

charactersInRange('a',
    'd'
);

charactersInRange('#',
    ':'
);

charactersInRange('C',
    '#'
);