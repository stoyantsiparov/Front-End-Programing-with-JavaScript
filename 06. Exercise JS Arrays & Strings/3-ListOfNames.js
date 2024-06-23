function printSortedNames(names) {
    // Сортира масива по азбучен ред, възходящо ({a.localeCompare(b)} се изпозлзва като допълнение към {.sort}, зашото ако имаме име с малки букви няма да се изпечата правилно, ако няма допълнението) 
    names.sort((a, b) => a.localeCompare(b));

    // Обикалям масива
    for (let i = 0; i < names.length; i++) {
        // Принтирам числата пред имената {i + 1} -> ({+1}, зашото броенето започва от 1) и след това принтирам и имената {names[i]}
        console.log(`${i + 1}.${names[i]}`);
    }
}

printSortedNames(["John", "Bob", "Christina", "Ema"]);