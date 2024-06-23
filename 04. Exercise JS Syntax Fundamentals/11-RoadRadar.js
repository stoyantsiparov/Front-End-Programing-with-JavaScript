function roadRadar(currentSpeed, area) {
    let speedLimit = 0;

    switch (area) {
        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
    }

    const speedDifferance = currentSpeed - speedLimit;

    if (speedDifferance <= 0) {
        return console.log(`Driving ${currentSpeed} km/h in a ${speedLimit} zone`);
    }

    let status = "";
    if (speedDifferance <= 20) {
        status = "speeding";
    } else if (speedDifferance <= 40) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }

    console.log(`The speed is ${speedDifferance} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');