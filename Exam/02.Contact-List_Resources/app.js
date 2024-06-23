window.addEventListener("load", solve);

function solve() {
  let addBtnElement = document.getElementById("add-btn");
  let nameInputElement = document.getElementById("name");
  let numberInputElement = document.getElementById("phone");
  let categoryInputElement = document.getElementById("category")
  let checkListElement = document.getElementById("check-list");
  let contactListElement = document.getElementById("contact-list");

  addBtnElement.addEventListener('click', () => {
    let name = nameInputElement.value;
    let phone = numberInputElement.value;
    let category = categoryInputElement.value;

    let editButton = document.createElement('button');
    editButton.classList.add('edit-btn');

    let saveButton = document.createElement('button');
    saveButton.classList.add('save-btn');

    let divContainerButtons = document.createElement('div');
    divContainerButtons.classList.add('buttons');
    divContainerButtons.appendChild(editButton);
    divContainerButtons.appendChild(saveButton);

    let pNameElement = document.createElement('p');
    pNameElement.textContent = `name:${name}`;

    let pPhoneElement = document.createElement('p');
    pPhoneElement.textContent = `phone:${phone}`;

    let pCategoryElement = document.createElement('p');
    pCategoryElement.textContent = `category:${category}`;

    let articleElement = document.createElement('article');
    articleElement.appendChild(pNameElement);
    articleElement.appendChild(pPhoneElement);
    articleElement.appendChild(pCategoryElement);

    let liElement = document.createElement('li');
    liElement.appendChild(articleElement);
    liElement.appendChild(divContainerButtons);

    checkListElement.appendChild(liElement);

    nameInputElement.value = '';
    numberInputElement.value = '';
    categoryInputElement.value = '';

    editButton.addEventListener('click', () => {
      nameInputElement.value = name;
      numberInputElement.value = phone;
      categoryInputElement.value = category;

      liElement.remove();
    });

    saveButton.addEventListener('click', () => {
      editButton.remove();
      saveButton.remove();
      contactListElement.appendChild(liElement);

      let delBtnElement = document.createElement('button');
      delBtnElement.classList.add('del-btn');
      liElement.appendChild(delBtnElement);

      delBtnElement.addEventListener('click', () => {
        liElement.remove();
      });
    });
  });
}