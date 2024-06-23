function lockedProfile() {
    let profileElements = document.querySelectorAll(".profile");

    for (const profileElement of profileElements) {
        let showButtonElement = profileElement.querySelector("button");
        let lockRadioElement = profileElement.querySelector("input[type=radio][value=lock]")

        showButtonElement.addEventListener('click', (e) => {
            if (lockRadioElement.checked) {
                return;
            }

            let additionalInfoElement = showButtonElement.previousElementSibling;

            if (showButtonElement.textContent === "Show more") {
                additionalInfoElement.style.display = "block";
                showButtonElement.textContent = "Hide it";
            } else {
                additionalInfoElement.style.display = "none";
                showButtonElement.textContent = "Hide it";
            }
        });
    }
}