function leapYear(leapYear) {
    if (leapYear % 4 === 0 && (leapYear % 100 !== 0 || leapYear % 400 === 0)) {
        console.log("yes");
    }
    else {
        console.log("no");
    }
}

leapYear(1984);
leapYear(2003);
leapYear(4);
leapYear(1900);
