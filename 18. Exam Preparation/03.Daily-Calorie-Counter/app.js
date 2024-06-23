let baseUrl = "http://localhost:3030/jsonstore/tasks";

let loadButtonElement = document.getElementById("load-meals");
let addButtonElement = document.getElementById("add-meal");
let editButtonElement = document.getElementById("edit-meal");
let mealsListElement = document.getElementById("list");
let foodInputElement = document.getElementById("food");
let timeInputElement = document.getElementById("time");
let caloriesInputElement = document.getElementById("calories");

// Създавам променлива, в която ще пазя {id}-то на текущото ястие
let currentMealId = null;

let loadMeals = async () => {
    let response = await fetch(baseUrl);
    let data = await response.json();

    let meals = Object.values(data);
    // Зачиствам списъка с ястия
    mealsListElement.innerHTML = "";

    for (const meal of meals) {
        // Създавам си бутона {Change}
        let changeButtonElement = document.createElement("button");
        changeButtonElement.classList.add("change-meal");
        changeButtonElement.textContent = "Change";
        // Създавам си бутона {Delete}
        let deleteButtonElement = document.createElement("button");
        deleteButtonElement.classList.add("delete-meal");
        deleteButtonElement.textContent = "Delete";
        // Създавам {div} контейнер за 2та бутона и ги слагам вътре
        let buttonContainerElement = document.createElement("div");
        buttonContainerElement.id = "meal-buttons";
        buttonContainerElement.appendChild(changeButtonElement);
        buttonContainerElement.appendChild(deleteButtonElement);
        // Създавам {h2} елемент -> храна
        let foodH2Element = document.createElement("h2");
        foodH2Element.textContent = meal.food;
        // Създавам {h3} елемент -> час
        let timeH3Element = document.createElement("h3");
        timeH3Element.textContent = meal.time;
        // Създавам {h3} елемент -> калории
        let calorieH3Element = document.createElement("h3");
        calorieH3Element.textContent = meal.calories;
        // Създавам {div} контейнер с клас {meal} и слагам всичко вътре (храна, час, калории и контейнера с 2та бутона вътре)
        let mealElement = document.createElement("div");
        mealElement.classList.add("meal");
        mealElement.appendChild(foodH2Element);
        mealElement.appendChild(timeH3Element);
        mealElement.appendChild(calorieH3Element);
        mealElement.appendChild(buttonContainerElement);
        // Закачам създадения от мен {div} контейнер с клас {meal} за {mealsListElement} листа, в който трябваше да се появят ястията
        mealsListElement.appendChild(mealElement);
        // Взимам информацията от ястието и го местя за {edit}, като го махам от списъка с ястия
        changeButtonElement.addEventListener("click", () => {
            // Запазвам {id}-то на текущото ястие
            currentMealId = meal._id;

            foodInputElement.value = meal.food;
            timeInputElement.value = meal.time;
            caloriesInputElement.value = meal.calories;

            editButtonElement.removeAttribute("disabled");
            addButtonElement.setAttribute("disabled", "disabled");

            mealElement.remove();
        });
        // Трия ястието от списъка с ястия
        deleteButtonElement.addEventListener("click", async () => {
            // Трия {HTTP} заявката
            await fetch(`${baseUrl}/${meal._id}`, {
                method: "DELETE",
            });
            // Трия елемента от {DOM} дървото
            mealElement.remove();
        });
    };
};
// Функциалността от бутона долу е изкарана горе в {loadMeals}, за да може да се презползва
loadButtonElement.addEventListener("click", loadMeals);

addButtonElement.addEventListener("click", async () => {
    let food = foodInputElement.value;
    let time = timeInputElement.value;
    let calories = caloriesInputElement.value;

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            food,
            time,
            calories,
        }),
    });

    foodInputElement.value = "";
    timeInputElement.value = "";
    caloriesInputElement.value = "";

    //Зареждам всички ястия от списъка 
    await loadMeals();
});

editButtonElement.addEventListener("click", async () => {
    let food = foodInputElement.value;
    let time = timeInputElement.value;
    let calories = caloriesInputElement.value;

    await fetch(`${baseUrl}/${currentMealId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            _id: currentMealId,
            food,
            time,
            calories,
        }),
    });

    editButtonElement.setAttribute("disabled", "disabled");
    addButtonElement.removeAttribute("disabled");

    currentMealId = null;
    foodInputElement.value = "";
    timeInputElement.value = "";
    caloriesInputElement.value = "";

    await loadMeals();
});