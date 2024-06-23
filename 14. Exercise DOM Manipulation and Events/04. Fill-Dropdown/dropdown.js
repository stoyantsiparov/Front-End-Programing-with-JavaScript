function addItem() {
    let inputTextElement = document.getElementById("newItemText");
    let inputValueElement = document.getElementById("newItemValue");
    let menuElement = document.getElementById("menu");

    let optionElement = document.createElement("option");
    optionElement.value = inputValueElement.value;
    optionElement.textContent = inputTextElement.value;

    menuElement.appendChild(optionElement);

    inputTextElement.value = "";
    inputValueElement.value = "";
}