function attachEventsListeners() {
    let convertButtonElements = document.querySelectorAll("input[type=button][value=Convert]");
    let inputElements = document.querySelectorAll("input[type=text]");

    let toSeconds = (value, unit) => {
        switch (unit) {
            case "days":
                return value * 24 * 60 * 60;
            case "hours":
                return value * 60 * 60;
            case "minutes":
                return value * 60;
            case "seconds":
                return value;
        }
    }

    let converters = {
        days(seconds) {
            return seconds / 60 / 60 / 24;
        },
        hours(seconds) {
            return seconds / 60 / 60;
        },
        minutes(seconds) {
            return seconds / 60;
        },
        seconds(seconds) {
            return seconds;
        },
    }

    for (const convertButtonElement of convertButtonElements) {
        convertButtonElement.addEventListener("click", (e) => {
            let currentInputElement = e.currentTarget.previousElementSibling;

            for (const inputElement of inputElements) {
                let seconds = toSeconds(Number(currentInputElement.value), currentInputElement.id);
                inputElement.value = converters[inputElement.id](seconds);
            }
        });
    }
}