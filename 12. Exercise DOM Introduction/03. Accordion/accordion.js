function toggle() {
    let extraInfoElement = document.getElementById("extra");
    let buttonElement = document.querySelector(".head span.button");

    let currentTextButton = buttonElement.textContent;
    if (currentTextButton === "More") {
        extraInfoElement.style.display = "block";
        buttonElement.textContent = "Less";
    } else if (currentTextButton === "Less") {
        extraInfoElement.style.display = "none";
        buttonElement.textContent = "More";
    }
}