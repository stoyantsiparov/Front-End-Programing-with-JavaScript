let baseUrl = "http://localhost:3030/jsonstore/tasks";

let loadButtonElement = document.getElementById("load-history");
let addButtonElement = document.getElementById("add-weather");
let editButtonElement = document.getElementById("edit-weather");
let weatherListElement = document.getElementById("list");
let locationInputElement = document.getElementById("location");
let tempInputElement = document.getElementById("temperature");
let dateInputElement = document.getElementById("date");

let currentId = null;

let loadWeather = async () => {
    let response = await fetch(baseUrl);
    let data = await response.json();

    let weatherHistory = Object.values(data);
    weatherListElement.innerHTML = "";

    for (const weather of weatherHistory) {
        let changeButtonElement = document.createElement("button");
        changeButtonElement.classList.add("change-btn");
        changeButtonElement.textContent = "Change";

        let deleteButtonElement = document.createElement("button");
        deleteButtonElement.classList.add("delete-btn");
        deleteButtonElement.textContent = "Delete";

        let buttonContainerElement = document.createElement("div");
        buttonContainerElement.classList.add("buttons-container");
        buttonContainerElement.appendChild(changeButtonElement);
        buttonContainerElement.appendChild(deleteButtonElement);

        let locationH2Element = document.createElement("h2");
        locationH2Element.textContent = weather.location;

        let dateH3Element = document.createElement("h3");
        dateH3Element.textContent = weather.date;

        let tempH3Element = document.createElement("h3");
        tempH3Element.id = "celsius";
        tempH3Element.textContent = weather.temperature;

        let weatherElement = document.createElement("div");
        weatherElement.classList.add("container");
        weatherElement.appendChild(locationH2Element);
        weatherElement.appendChild(dateH3Element);
        weatherElement.appendChild(tempH3Element);
        weatherElement.appendChild(buttonContainerElement);

        weatherListElement.appendChild(weatherElement);

        changeButtonElement.addEventListener("click", () => {
            currentId = weather._id;

            locationInputElement.value = weather.location;
            dateInputElement.value = weather.date;
            tempInputElement.value = weather.temperature;

            editButtonElement.removeAttribute("disabled");
            addButtonElement.setAttribute("disabled", "disabled");

            weatherElement.remove();
        });

        deleteButtonElement.addEventListener("click", async () => {
            await fetch(`${baseUrl}/${weather._id}`, {
                method: "DELETE",
            });

            weatherElement.remove();
        });
    };
};

loadButtonElement.addEventListener("click", loadWeather);

addButtonElement.addEventListener("click", async () => {
    let location = locationInputElement.value;
    let temp = tempInputElement.value;
    let date = dateInputElement.value;

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            location,
            temperature: temp,
            date,
        }),
    });

    locationInputElement.value = "";
    tempInputElement.value = "";
    dateInputElement.value = "";

    await loadWeather();
});

editButtonElement.addEventListener("click", async () => {
    let location = locationInputElement.value;
    let temp = tempInputElement.value;
    let date = dateInputElement.value;

    await fetch(`${baseUrl}/${currentId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            _id: currentId,
            location,
            temperature: temp,
            date,
        }),
    });

    editButtonElement.setAttribute("disabled", "disabled");
    addButtonElement.removeAttribute("disabled");

    currentId = null;
    locationInputElement.value = "";
    tempInputElement.value = "";
    dateInputElement.value = "";

    await loadWeather();
});