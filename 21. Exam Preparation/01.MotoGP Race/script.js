function solve(input) {
    const riders = {};

    function stopForFuel(rider, minFuel, changedPos) {
        if (riders[rider].fuel < minFuel) {
            console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPos}.`);
            riders[rider].position = changedPos;
        } else {
            console.log(`${rider} does not need to stop for fuel!`);
        }
    }

    function overtake(rider1, rider2) {
        const pos1 = riders[rider1].position;
        const pos2 = riders[rider2].position;
        if (pos1 < pos2) {
            console.log(`${rider1} overtook ${rider2}!`);
            [riders[rider1].position, riders[rider2].position] = [pos2, pos1];
        }
    }

    function engineFail(rider, lapsLeft) {
        console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
        delete riders[rider];
    }

    function printFinalResults() {
        for (const rider in riders) {
            console.log(`${rider}\n  Final position: ${riders[rider].position}`);
        }
    }

    const commands = {
        "StopForFuel": stopForFuel,
        "Overtaking": overtake,
        "EngineFail": engineFail,
        "Finish": printFinalResults
    };

    const n = parseInt(input.shift());
    for (let i = 0; i < n; i++) {
        const [rider, fuel, position] = input[i].split('|');
        riders[rider] = { fuel: parseInt(fuel), position: parseInt(position) };
    }

    for (let i = n; i < input.length; i++) {
        const [command, ...args] = input[i].split(' - ');
        commands[command](...args);
    }
}

solve(["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]);

solve(["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]);
