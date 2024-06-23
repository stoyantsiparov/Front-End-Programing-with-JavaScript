let baseUrl = "http://localhost:3030/jsonstore/gifts";

let loadButtonElement = document.getElementById("load-presents");
let giftListElement = document.getElementById("gift-list");
let addButtonElement = document.getElementById("add-present");
let editButtonElement = document.getElementById("edit-present");
let giftInputElement = document.getElementById("gift");
let forInputElement = document.getElementById("for");
let priceInputElement = document.getElementById("price");
let formContainerElement = document.getElementById("form");


const loadPresents = async () => {
    let response = await fetch(baseUrl);
    let presentsResult = await response.json();

    giftListElement.innerHTML = "";

    let giftListFragment = document.createDocumentFragment();

    Object
        .values(presentsResult)
        .forEach(present => {
            giftListFragment.appendChild(createGiftSockElement(present));
        });

    giftListElement.appendChild(giftListFragment);
};

loadButtonElement.addEventListener("click", loadPresents);

// Това е БЕЗ {async}, но с {async} е по-лесно
addButtonElement.addEventListener("click", () => {

    let gift = giftInputElement.value;
    let giftFor = forInputElement.value;
    let price = priceInputElement.value;


    fetch(baseUrl, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            gift,
            for: giftFor,
            price,
        }),
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            crearInputFields();

            return loadPresents();
        });
});

editButtonElement.addEventListener("click", editGift);

giftListElement.addEventListener("click", deleteGift);

// Функция за бутона {Edit}, за да не е нестната (нестнато е по-лесно)
function changeGift(e, present) {
    let giftElement = e.currentTarget.parentElement.parentElement;
    giftElement.remove();

    giftInputElement.value = present.gift;
    forInputElement.value = present.for;
    priceInputElement.value = present.price;

    formContainerElement.setAttribute("data-id", present._id);

    editButtonElement.removeAttribute("disabled");
    addButtonElement.setAttribute("disabled", "disabled");

};

function editGift() {
    let gift = giftInputElement.value;
    let giftFor = forInputElement.value;
    let price = priceInputElement.value;

    let giftId = formContainerElement.getAttribute("data-id");

    formContainerElement.removeAttribute("data-id");

    fetch(`${baseUrl}/${giftId}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            gift,
            for: giftFor,
            price,
            _id: giftId,
        })
    })
        .then(res => {
            if (!res.ok) {
                return;
            }

            loadPresents();

            editButtonElement.setAttribute("disabled", "disabled");

            addButtonElement.removeAttribute("disabled");

            crearInputFields();
        })
};

// Това е с {event delegation}
function deleteGift(e) {
    if (e.target.tagName !== "BUTTON" || !e.target.classList.contains("delete-btn")) {
        return;
    }

    let giftElement = e.target.parentElement.parentElement;

    let giftId = giftElement.getAttribute("data-id");

    fetch(`${baseUrl}/${giftId}`, {
        method: "DELETE",
    })
        .then(res => {
            if (!res.ok) {
                return;
            };

            giftElement.remove();
        });
};

function createGiftSockElement(present) {
    let changeButtonElenet = document.createElement("button");
    changeButtonElenet.classList.add("change-btn");
    changeButtonElenet.textContent = "Change";
    changeButtonElenet.addEventListener("click", (e) => changeGift(e, present));

    let deleteButtonElenet = document.createElement("button");
    deleteButtonElenet.classList.add("delete-btn");
    deleteButtonElenet.textContent = "Delete";

    let buttonsDivElement = document.createElement("div");
    buttonsDivElement.classList.add("buttons-container");
    buttonsDivElement.appendChild(changeButtonElenet);
    buttonsDivElement.appendChild(deleteButtonElenet);

    let giftPElement = document.createElement("p");
    giftPElement.textContent = present.gift;

    let forPElement = document.createElement("p");
    forPElement.textContent = present.for;

    let pricePElement = document.createElement("p");
    pricePElement.textContent = present.price;

    let contentDivElement = document.createElement("div");
    contentDivElement.classList.add("content");
    contentDivElement.appendChild(giftPElement);
    contentDivElement.appendChild(forPElement);
    contentDivElement.appendChild(pricePElement);

    let giftSockDivElement = document.createElement("div");
    giftSockDivElement.classList.add("gift-sock");
    giftSockDivElement.appendChild(contentDivElement);
    giftSockDivElement.appendChild(buttonsDivElement);

    giftSockDivElement.setAttribute("data-id", present._id);

    return giftSockDivElement;
};

function getFunctionData() {
    return {
        gift: giftInputElement.value,
        giftFor: forInputElement.value,
        price: priceInputElement.value,
    };
};

function crearInputFields() {
    giftInputElement.value = "";
    forInputElement.value = "";
    priceInputElement.value = "";
};