function solve(input) {
    let towns = [];

    for (const row of input) {
        let [townName, latitude, longitude] = row.split(' | ');


        let town = {
            town: townName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        };

        towns.push(town);
    }

    towns.forEach(town => console.log(town));
}

solve(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);

solve(['Plovdiv | 136.45 | 812.575']);