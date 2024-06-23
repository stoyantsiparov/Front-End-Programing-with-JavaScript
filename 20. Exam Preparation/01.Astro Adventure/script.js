function solve(input) {
    const astronautCount = Number(input.shift());
    const team = {};

    for (let i = 0; i < astronautCount; i++) {
        let [name, oxygen, energy] = input[i].split(" ");

        team[name] = {
            oxygen: Number(oxygen),
            energy: Number(energy),
        }
    }

    let commandLine = input.shift();
    while (commandLine !== "End") {
        let [command, name, value] = commandLine.split(" - ");
        let astronaut = team[name];

        switch (command) {
            case "Explore":
                if (astronaut && astronaut.energy >= Number(value)) {
                    astronaut.energy -= Number(value);
                    console.log(`${name} has successfully explored a new area and now has ${astronaut.energy} energy!`);
                } else {
                    console.log(`${name} does not have enough energy to explore!`);
                }
                break;
            case "Refuel":
                if (astronaut) {
                    const amountToAdd = Math.min(200 - astronaut.energy, Number(value));
                    astronaut.energy += amountToAdd;
                    console.log(`${name} refueled their energy by ${amountToAdd}!`);
                }
                break;
            case "Breathe":
                if (astronaut) {
                    const amountToAdd = Math.min(100 - astronaut.oxygen, Number(value));
                    astronaut.oxygen += amountToAdd;
                    console.log(`${name} took a breath and recovered ${amountToAdd} oxygen!`);
                }
                break;
        }

        commandLine = input.shift();
    }

    for (const astronautName in team) {
        const { oxygen, energy } = team[astronautName];
        console.log(`Astronaut: ${astronautName}, Oxygen: ${oxygen}, Energy: ${energy}`);
    }
}

solve(['3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End']);
