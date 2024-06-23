window.addEventListener("load", solve);

function solve() {
  let nextBtnElement = document.getElementById("next-btn");
  let nameInputElement = document.getElementById("student");
  let universityInputElement = document.getElementById("university");
  let scoreInputElement = document.getElementById("score")
  let previewListElement = document.getElementById("preview-list");
  let candidatesListElement = document.getElementById("candidates-list");

  nextBtnElement.addEventListener("click", () => {
    let studentName = nameInputElement.value;
    let university = universityInputElement.value;
    let score = scoreInputElement.value;

    if (!studentName || !university || !score) {
      return;
    }

    let previewLiElement = createArticleElement(studentName, university, score);
    previewListElement.appendChild(previewLiElement);

    nextBtnElement.setAttribute("disabled", "disabled");

    nameInputElement.value = "";
    universityInputElement.value = "";
    scoreInputElement.value = "";

    let editBtnElement = previewLiElement.querySelector(".action-btn.edit");
    let applyBtnElement = previewLiElement.querySelector(".action-btn.apply");

    editBtnElement.addEventListener("click", () => {
      let elementsNodeList = previewLiElement.querySelectorAll("article h4, article p");
      let elementsList = Array.from(elementsNodeList);

      studentName = elementsList[0].textContent;
      university = elementsList[1].textContent.substring(12);
      score = elementsList[2].textContent.substring(7);

      nameInputElement.value = studentName;
      universityInputElement.value = university;
      scoreInputElement.value = score;

      previewLiElement.remove();

      nextBtnElement.removeAttribute("disabled");
    });

    applyBtnElement.addEventListener("click", () => {
      let deleteEditBtn = previewLiElement.querySelector(".action-btn.edit");
      let deleteApplyBtn = previewLiElement.querySelector(".action-btn.apply");

      deleteEditBtn.remove();
      deleteApplyBtn.remove();

      candidatesListElement.appendChild(previewLiElement);

      nextBtnElement.removeAttribute("disabled");
    });

    function createArticleElement(studentName, university, score) {
      let h4Element = document.createElement("h4");
      h4Element.textContent = studentName;

      let pUniElement = document.createElement("p");
      pUniElement.textContent = `University: ${university}`;

      let pScoreElement = document.createElement("p");
      pScoreElement.textContent = `Score: ${score}`;

      let articleElement = document.createElement("article");
      articleElement.appendChild(h4Element);
      articleElement.appendChild(pUniElement);
      articleElement.appendChild(pScoreElement);

      let editBtnElement = document.createElement("button");
      editBtnElement.classList.add("action-btn", "edit");
      editBtnElement.textContent = "edit";

      let applyBtnElement = document.createElement("button");
      applyBtnElement.classList.add("action-btn", "apply");
      applyBtnElement.textContent = "apply";

      let liElement = document.createElement("li");
      liElement.classList.add("application");
      liElement.appendChild(articleElement);
      liElement.appendChild(editBtnElement);
      liElement.appendChild(applyBtnElement);

      return liElement;
    };
  });
}