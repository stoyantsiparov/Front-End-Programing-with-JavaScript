function solve(input) {
    // input.shift маха (отпред на масива) 1вия елемент (броя на баристите)
    let baristaCount = Number(input.shift());
    let team = {};

    for (let i = 0; i < baristaCount; i++) {
        let [name, shift, coffeeTypes] = input[i].split(" ");

        team[name] = {
            shift,
            coffeeTypes: coffeeTypes.split(","),
        }
    }

    let commandLine = input.shift();

    while (commandLine != "Closed") {
        let [command, name, firstArg, secondArg] = commandLine.split(" / ");
        let barista = team[name];

        let shift;
        let coffeeType;
        switch (command) {
            case "Prepare":
                shift = firstArg;
                coffeeType = secondArg;

                if (barista.shift === shift && barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${name} has prepared a ${coffeeType} for you!`);
                } else {
                    console.log(`${name} is not available to prepare a ${coffeeType}.`);
                }
                break;
            case "Change Shift":
                shift = firstArg;

                barista.shift = shift;
                console.log(`${name} has updated his shift to: ${shift}`);
                break;
            case "Learn":
                coffeeType = firstArg;
                if (barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${name} knows how to make ${coffeeType}.`);
                } else {
                    barista.coffeeTypes.push(coffeeType);
                    console.log(`${name} has learned a new coffee type: ${coffeeType}.`);
                }
                break;
        }

        commandLine = input.shift();
    }

    for (const baristaName in team) {
        console.log(`Barista: ${baristaName}, Shift: ${team[baristaName].shift}, Drinks: ${team[baristaName].coffeeTypes.join(", ")}`);
    }
}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
)