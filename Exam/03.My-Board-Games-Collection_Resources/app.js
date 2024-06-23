let baseUrl = "http://localhost:3030/jsonstore/games";

let loadButtonElement = document.getElementById("load-games");
let addButtonElement = document.getElementById("add-game");
let editButtonElement = document.getElementById("edit-game");
let gamesListElement = document.getElementById("games-list");
let gameNameInputElement = document.getElementById("g-name");
let typeInputElement = document.getElementById("type");
let playersInputElement = document.getElementById("players");

let currentId = null;

let loadGames = async () => {
    let res = await fetch(baseUrl);
    let date = await res.json();

    let gamesCollection = Object.values(date);
    gamesListElement.innerHTML = "";

    for (const game of gamesCollection) {
        let changeButtonElement = document.createElement("button");
        changeButtonElement.classList.add("change-btn");
        changeButtonElement.textContent = "Change";

        let deleteButtonElement = document.createElement("button");
        deleteButtonElement.classList.add("delete-btn");
        deleteButtonElement.textContent = "Delete";

        let buttonDivContainer = document.createElement("div");
        buttonDivContainer.classList.add("buttons-container");
        buttonDivContainer.appendChild(changeButtonElement);
        buttonDivContainer.appendChild(deleteButtonElement);

        let gamePElement = document.createElement("p");
        gamePElement.textContent = game.name;

        let playersPElement = document.createElement("p");
        playersPElement.textContent = game.players;

        let typePElement = document.createElement("p");
        typePElement.textContent = game.type;

        let contentDivContainer = document.createElement("div");
        contentDivContainer.classList.add("content");
        contentDivContainer.appendChild(gamePElement);
        contentDivContainer.appendChild(playersPElement);
        contentDivContainer.appendChild(typePElement);

        let gameElement = document.createElement("div");
        gameElement.classList.add("board-game");
        gameElement.appendChild(contentDivContainer);
        gameElement.appendChild(buttonDivContainer);

        gamesListElement.appendChild(gameElement);

        changeButtonElement.addEventListener("click", () => {
            currentId = game._id;

            gameNameInputElement.value = game.name;
            playersInputElement.value = game.players;
            typeInputElement.value = game.type;

            editButtonElement.removeAttribute("disabled");
            addButtonElement.setAttribute("disabled", "disabled");

            gameElement.remove();
        });

        deleteButtonElement.addEventListener("click", async () => {
            await fetch(`${baseUrl}/${game._id}`, {
                method: "DELETE",
            });

            gameElement.remove();
        });
    }
};

loadButtonElement.addEventListener("click", loadGames);

addButtonElement.addEventListener("click", async () => {
    let gameName = gameNameInputElement.value;
    let players = playersInputElement.value;
    let type = typeInputElement.value;

    await fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: gameName,
            players,
            type,
        }),
    });

    gameNameInputElement.value = "";
    playersInputElement.value = "";
    typeInputElement.value = "";

    await loadGames();
});

editButtonElement.addEventListener("click", async () => {
    let gameName = gameNameInputElement.value;
    let players = playersInputElement.value;
    let type = typeInputElement.value;

    await fetch(`${baseUrl}/${currentId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            _id: currentId,
            name: gameName,
            players,
            type,
        }),
    });

    editButtonElement.setAttribute("disabled", "disabled");
    addButtonElement.removeAttribute("disabled");

    currentId = null;
    gameNameInputElement.value = "";
    playersInputElement.value = "";
    typeInputElement.value = "";

    await loadGames();
});