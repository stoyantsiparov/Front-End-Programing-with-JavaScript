function create(words) {
   let contentElement = document.getElementById("content");

   let divElements = words.map(word => {
      let divElement = document.createElement("div");
      let pElement = document.createElement("p");

      pElement.textContent = word;
      pElement.style.display = "none";

      divElement.appendChild(pElement);

      return divElement;
   });

   divElements.forEach(divElement => {
      divElement.addEventListener("click", () => {
         let pElement = divElement.querySelector("p");
         pElement.style.display = "block";
      });
   });

   divElements.forEach(divElement => contentElement.appendChild(divElement));
}