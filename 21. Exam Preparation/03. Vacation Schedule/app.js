let baseUrl = "http://localhost:3030/jsonstore/tasks";

let loadButtonElement = document.getElementById("load-vacations");
let addButtonElement = document.getElementById("add-vacation");
let editButtonElement = document.getElementById("edit-vacation");
let vacationsListElement = document.getElementById("list");
let nameInputElement = document.getElementById("name");
let daysInputElement = document.getElementById("num-days");
let dateInputElement = document.getElementById("from-date");

let currentId = null;

let loadVacations = async () => {
    let res = await fetch(baseUrl);
    let date = await res.json();

    let vacationSchedule = Object.values(date);
    vacationsListElement.innerHTML = "";

    for (const vacation of vacationSchedule) {
        let changeButtonElement = document.createElement("button");
        changeButtonElement.classList.add("change-btn");
        changeButtonElement.textContent = "Change";

        let doneButtonElement = document.createElement("button");
        doneButtonElement.classList.add("done-btn");
        doneButtonElement.textContent = "Done";

        let nameH2Element = document.createElement("h2");
        nameH2Element.textContent = vacation.name;

        let dateH3Element = document.createElement("h3");
        dateH3Element.textContent = vacation.date;

        let daysH3Element = document.createElement("h3");
        daysH3Element.textContent = vacation.days;

        let vacationElement = document.createElement("div");
        vacationElement.classList.add("container");
        vacationElement.appendChild(nameH2Element);
        vacationElement.appendChild(dateH3Element);
        vacationElement.appendChild(daysH3Element);
        vacationElement.appendChild(changeButtonElement);
        vacationElement.appendChild(doneButtonElement);

        vacationsListElement.appendChild(vacationElement);

        changeButtonElement.addEventListener("click", () => {
            currentId = vacation._id;

            nameInputElement.value = vacation.name;
            dateInputElement.value = vacation.date;
            daysInputElement.value = vacation.days;

            editButtonElement.removeAttribute("disabled");
            addButtonElement.setAttribute("disabled", "disabled");

            vacationElement.remove();
        });

        doneButtonElement.addEventListener("click", async () => {
            await fetch(`${baseUrl}/${vacation._id}`, {
                method: "DELETE",
            });

            vacationElement.remove();
        });
    };
};

loadButtonElement.addEventListener("click", loadVacations);

addButtonElement.addEventListener("click", async () => {
    let name = nameInputElement.value;
    let days = daysInputElement.value;
    let date = dateInputElement.value;

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name,
            days,
            date,
        }),
    });

    nameInputElement.value = "";
    daysInputElement.value = "";
    dateInputElement.value = "";

    await loadVacations();
});

editButtonElement.addEventListener("click", async () => {
    let name = nameInputElement.value;
    let days = daysInputElement.value;
    let date = dateInputElement.value;

    await fetch(`${baseUrl}/${currentId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            _id: currentId,
            name,
            days,
            date,
        }),
    });

    editButtonElement.setAttribute("disabled", "disabled");
    addButtonElement.removeAttribute("disabled");

    currentId = null;
    nameInputElement.value = "";
    daysInputElement.value = "";
    dateInputElement.value = "";

    await loadVacations();
});