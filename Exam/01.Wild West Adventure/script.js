function solve(input) {
    let heroCount = Number(input.shift());
    let team = {};

    for (let i = 0; i < heroCount; i++) {
        let [name, hp, bullets] = input[i].split(" ");

        team[name] = {
            hp: Number(hp),
            bullets: Number(bullets),
        };
    }

    function printStatus() {
        Object.keys(team).forEach(name => {
            console.log(`${name}
  HP: ${team[name].hp}
  Bullets: ${team[name].bullets}`);
        });
    }

    for (let commandLine of input) {
        let [command, ...args] = commandLine.split(" - ");

        if (command === "Ride Off Into Sunset") {
            printStatus();
            break;
        }

        let [character, target] = args;

        switch (command) {
            case "FireShot":
                if (team[character].bullets > 0) {
                    team[character].bullets--;
                    console.log(`${character} has successfully hit ${target} and now has ${team[character].bullets} bullets!`);
                } else {
                    console.log(`${character} doesn't have enough bullets to shoot at ${target}!`);
                }
                break;
            case "TakeHit":
                let [damage, attacker] = args.slice(1);
                team[character].hp -= Number(damage);
                if (team[character].hp > 0) {
                    console.log(`${character} took a hit for ${damage} HP from ${attacker} and now has ${team[character].hp} HP!`);
                } else {
                    console.log(`${character} was gunned down by ${attacker}!`);
                    delete team[character];
                }
                break;
            case "Reload":
                if (team[character].bullets < 6) {
                    let bulletsReloaded = 6 - team[character].bullets;
                    team[character].bullets = 6;
                    console.log(`${character} reloaded ${bulletsReloaded} bullets!`);
                } else {
                    console.log(`${character}'s pistol is fully loaded!`);
                }
                break;
            case "PatchUp":
                let amount = Number(target);
                if (team[character].hp < 100) {
                    let recovered = Math.min(100 - team[character].hp, amount);
                    team[character].hp += recovered;
                    console.log(`${character} patched up and recovered ${recovered} HP!`);
                } else {
                    console.log(`${character} is in full health!`);
                }
                break;
        }
    }
}


solve(["2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset"]);

solve(["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"]);

solve(["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"]);
