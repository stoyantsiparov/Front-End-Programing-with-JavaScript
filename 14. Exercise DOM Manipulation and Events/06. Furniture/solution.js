function solve() {
  let textareaInputElement = document.querySelector("#exercise textarea:first-of-type");
  let textareaOutputElement = document.querySelector("#exercise textarea:last-of-type");
  let generateButtonElement = document.querySelector("#exercise button:first-of-type");
  let buyButtonElement = document.querySelector("#exercise button:last-of-type");
  let furnitureTbodyElement = document.querySelector(".table tbody");

  generateButtonElement.addEventListener("click", (e) => {
    let furnitures = JSON.parse(textareaInputElement.value);

    for (const furniture of furnitures) {
      let imgElement = document.createElement("img");
      imgElement.src = furniture.img;
      let imageTdElement = document.createElement("td");
      imageTdElement.appendChild(imgElement);

      let pElement = document.createElement("p");
      pElement.textContent = furniture.name;
      let nameTdElement = document.createElement("td");
      nameTdElement.appendChild(pElement);

      let pricePElement = document.createElement("p");
      pricePElement.textContent = furniture.price;
      let priceTdElement = document.createElement("td");
      priceTdElement.appendChild(pricePElement);

      let decPElement = document.createElement("p");
      decPElement.textContent = furniture.decFactor;
      let decTdElement = document.createElement("td");
      decTdElement.appendChild(decPElement);

      let markElement = document.createElement("input");
      markElement.setAttribute("type", "checkbox");
      let markTdElement = document.createElement("td");
      markTdElement.appendChild(markElement);

      let furnitureTrElement = document.createElement("tr");
      furnitureTrElement.appendChild(imageTdElement);
      furnitureTrElement.appendChild(nameTdElement);
      furnitureTrElement.appendChild(priceTdElement);
      furnitureTrElement.appendChild(decTdElement);
      furnitureTrElement.appendChild(markTdElement);

      furnitureTbodyElement.appendChild(furnitureTrElement);
    }
  });

  buyButtonElement.addEventListener("click", (e) => {
    let names = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    let markedChildren = 0;

    Array.from(furnitureTbodyElement.children)
      .forEach(furnitureTrElement => {
        let markInputElement = furnitureTrElement.querySelector("input[type=checkbox]");
        if (!markInputElement.checked) {
          return;
        }

        let itemName = furnitureTrElement.children.item(1).textContent;
        let itemPrice = Number(furnitureTrElement.children.item(2).textContent);
        let itemDecoration = Number(furnitureTrElement.children.item(3).textContent);

        names.push(itemName);
        totalPrice += itemPrice;
        totalDecFactor += itemDecoration;
        markedChildren++;
      });

    let averagetotalDecFactor = totalDecFactor / markedChildren;
    textareaOutputElement.textContent += `Bought furniture: ${names.join(", ")}\n`;
    textareaOutputElement.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    textareaOutputElement.textContent += `Average decoration factor: ${averagetotalDecFactor}`;
  })
}