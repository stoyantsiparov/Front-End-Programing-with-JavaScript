function hashTags(input) {
    const pattern = /#([a-zA-X]+)/g;

    let matches = input.matchAll(pattern);
    for (const match of matches) {
        // Взимам от {match[1]}, защото не трябва да изписвам {#}
        console.log(match[1]);
    }
}

hashTags('Nowadays everyone uses # to tag a #special word in #socialMedia');
hashTags('The symbol # is known #variously in English-speaking #regions as the #number sign');