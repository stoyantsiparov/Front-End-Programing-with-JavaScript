window.addEventListener("load", solve);

function solve() {
    let placeinputElement = document.getElementById("place");
    let actionInputElement = document.getElementById("action");
    let personInputElement = document.getElementById("person");
    let addBtnElement = document.getElementById("add-btn");
    let taskListElement = document.getElementById("task-list");
    let doneListElement = document.getElementById("done-list");

    addBtnElement.addEventListener("click", () => {
        let place = placeinputElement.value;
        let action = actionInputElement.value;
        let person = personInputElement.value;

        let taskLiElement = createTaskElement(place, action, person);

        taskListElement.appendChild(taskLiElement);

        clearInputs();
    });

    function createTaskElement(place, action, person) {
        let editBtnElement = document.createElement("button");
        editBtnElement.classList.add("edit");
        editBtnElement.textContent = "Edit";

        let doneBtnElement = document.createElement("button");
        doneBtnElement.classList.add("done");
        doneBtnElement.textContent = "Done";

        let btnDivElement = document.createElement("div");
        btnDivElement.classList.add("buttons");
        btnDivElement.appendChild(editBtnElement);
        btnDivElement.appendChild(doneBtnElement);

        let placePElement = document.createElement("p");
        placePElement.textContent = `Place:${place}`;

        let actionPElement = document.createElement("p");
        actionPElement.textContent = `Action:${action}`;

        let personPElement = document.createElement("p");
        personPElement.textContent = `Person:${person}`;

        let articleElement = document.createElement("article");
        articleElement.appendChild(placePElement);
        articleElement.appendChild(actionPElement);
        articleElement.appendChild(personPElement);

        let taskLiElement = document.createElement("li");
        taskLiElement.classList.add("clean-task");
        taskLiElement.appendChild(articleElement);
        taskLiElement.appendChild(btnDivElement);

        editBtnElement.addEventListener("click", () => {
            placeinputElement.value = place;
            actionInputElement.value = action;
            personInputElement.value = person;

            taskLiElement.remove();
        });

        doneBtnElement.addEventListener("click", () => {
            btnDivElement.remove();

            let deleteBtnElement = document.createElement("button");
            deleteBtnElement.classList.add("delete");
            deleteBtnElement.textContent = "Delete";

            taskLiElement.appendChild(deleteBtnElement);

            doneListElement.appendChild(taskLiElement);

            deleteBtnElement.addEventListener("click", () => {
                taskLiElement.remove();
            });
        });

        return taskLiElement;
    }

    function clearInputs() {
        placeinputElement.value = "";
        actionInputElement.value = "";
        personInputElement.value = "";
    }
}