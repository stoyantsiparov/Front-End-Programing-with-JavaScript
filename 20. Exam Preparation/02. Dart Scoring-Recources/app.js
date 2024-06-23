window.addEventListener("load", solve);

function solve() {
  let addBtnElement = document.getElementById("add-btn");
  let nameInputElement = document.getElementById("player");
  let scoreInputElement = document.getElementById("score");
  let roundInputElement = document.getElementById("round");
  let sureListElement = document.getElementById("sure-list");
  let scoreboardListElement = document.getElementById("scoreboard-list");
  let clearBtnElement = document.querySelector(".btn.clear");

  addBtnElement.addEventListener("click", () => {
    let playerName = nameInputElement.value;
    let score = scoreInputElement.value;
    let round = roundInputElement.value;

    if (!playerName || !score || !round) {
      return;
    }

    let dartLiElement = createArticleElement(playerName, score, round);
    sureListElement.appendChild(dartLiElement);

    addBtnElement.setAttribute("disabled", "disabled");

    nameInputElement.value = "";
    scoreInputElement.value = "";
    roundInputElement.value = "";

    let btnEditElement = dartLiElement.querySelector(".btn.edit");
    let btnOkElement = dartLiElement.querySelector(".btn.ok");

    btnEditElement.addEventListener("click", () => {
      let pElementNodeList = dartLiElement.querySelectorAll("article p");
      let pElement = Array.from(pElementNodeList);

      let playerName = pElement[0].textContent;
      let score = pElement[1].textContent.substring(7);
      let round = pElement[2].textContent.substring(7);

      nameInputElement.value = playerName;
      scoreInputElement.value = score;
      roundInputElement.value = round;

      dartLiElement.remove();

      addBtnElement.removeAttribute("disabled");
    });

    btnOkElement.addEventListener("click", () => {
      let deleteEditBtnElement = dartLiElement.querySelector(".btn.edit");
      let deleteOkBtnElement = dartLiElement.querySelector(".btn.ok");

      deleteEditBtnElement.remove();
      deleteOkBtnElement.remove();

      scoreboardListElement.appendChild(dartLiElement);

      addBtnElement.removeAttribute("disabled");
    });

    clearBtnElement.addEventListener("click", () => {
      location.reload();
    });

    function createArticleElement(playerName, score, round) {
      let pPlayerElement = document.createElement("p");
      pPlayerElement.textContent = playerName;

      let pScoreElement = document.createElement("p");
      pScoreElement.textContent = `Score: ${score}`;

      let pRoundElement = document.createElement("p");
      pRoundElement.textContent = `Round: ${round}`;

      let articleElement = document.createElement("article");
      articleElement.appendChild(pPlayerElement);
      articleElement.appendChild(pScoreElement);
      articleElement.appendChild(pRoundElement);

      let editBtnElement = document.createElement("button");
      editBtnElement.classList.add("btn", "edit");
      editBtnElement.textContent = "еdit";

      let okBtnElement = document.createElement("button");
      okBtnElement.classList.add("btn", "ok");
      okBtnElement.textContent = "оk";

      let liElement = document.createElement("li");
      liElement.classList.add("dart-item");
      liElement.appendChild(articleElement);
      liElement.appendChild(editBtnElement);
      liElement.appendChild(okBtnElement);

      return liElement;
    };
  });
}