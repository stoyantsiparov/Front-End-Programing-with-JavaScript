window.addEventListener("load", solve);

function solve() {
    let btnAddElement = document.getElementById("add-btn");
    let expenseInputElement = document.getElementById("expense");
    let amountInputElement = document.getElementById("amount");
    let dateInputElement = document.getElementById("date");
    let previewListElement = document.getElementById("preview-list");
    let expenseListElement = document.getElementById("expenses-list");
    let btnDeleteElement = document.querySelector(".btn.delete");

    btnAddElement.addEventListener("click", () => {
        expense = expenseInputElement.value;
        amount = amountInputElement.value;
        date = dateInputElement.value;

        if (!expense || !amount || !date) {
            return;
        }
        let expenseLiElement = createArticleElement(expense, amount, date);
        previewListElement.appendChild(expenseLiElement);

        btnAddElement.setAttribute("disabled", "disabled");

        expenseInputElement.value = "";
        amountInputElement.value = "";
        dateInputElement.value = "";

        let btnEditElement = expenseLiElement.querySelector(".btn.edit");
        let btnOkElement = expenseLiElement.querySelector(".btn.ok");

        btnEditElement.addEventListener("click", () => {
            let pElementsNodeList = expenseLiElement.querySelectorAll("article p");
            let pElements = Array.from(pElementsNodeList);
            // Взимам типа за разхода след 6тия символ {substring(6)}, защото до променливата има 5 индекса {`Type: ${expense}`} 
            let typeExpense = pElements[0].textContent.substring(6);
            // Взимам колко пари са изхарчени по същия начин след 8мия символ, НО без последния {.substring(8, pElements[1].textContent.length - 1)}
            let amount = pElements[1].textContent.substring(8, pElements[1].textContent.length - 1);
            // Взимам датата след 6тия символ {substring(6)}, защото до променливата има 5 индекса {`Date: ${date}`} 
            let date = pElements[2].textContent.substring(6);

            expenseInputElement.value = typeExpense;
            amountInputElement.value = amount;
            dateInputElement.value = date;

            expenseLiElement.remove();

            btnAddElement.removeAttribute("disabled");
        });

        btnOkElement.addEventListener("click", () => {
            let expenseBtnsElement = expenseLiElement.querySelector(".buttons");
            expenseBtnsElement.remove();

            expenseListElement.appendChild(expenseLiElement);

            btnAddElement.removeAttribute("disabled");
        });
    });

    btnDeleteElement.addEventListener("click", () => {
        expenseListElement.innerHTML = "";
    });

    function createArticleElement(expense, amount, date) {
        let pTypeElement = document.createElement("p");
        pTypeElement.textContent = `Type: ${expense}`;

        let pAmountElement = document.createElement("p");
        pAmountElement.textContent = `Amount: ${amount}$`;

        let pDateElement = document.createElement("p");
        pDateElement.textContent = `Date: ${date}`;

        let articleElement = document.createElement("article");
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);

        let btnEditElement = document.createElement("button");
        btnEditElement.classList.add("btn", "edit");
        btnEditElement.textContent = "edit"

        let btnOkElement = document.createElement("button");
        btnOkElement.classList.add("btn", "ok");
        btnOkElement.textContent = "ok"

        let buttonsDivElement = document.createElement("div");
        buttonsDivElement.classList.add("buttons");
        buttonsDivElement.appendChild(btnEditElement)
        buttonsDivElement.appendChild(btnOkElement);

        let liExpenseElement = document.createElement("li");
        liExpenseElement.classList.add("expense-item")
        liExpenseElement.appendChild(articleElement);
        liExpenseElement.appendChild(buttonsDivElement);

        return liExpenseElement;
    }
}