function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let trElements = document.querySelectorAll("table.container tbody tr");
      let searchFieldElement = document.getElementById("searchField");
      let searchField = searchFieldElement.value;

      for (const trElement of trElements) {
         let tdElements = trElement.querySelectorAll("td");
         let isSelected = false;

         trElement.classList.remove("select");

         for (const tdElement of tdElements) {
            if (tdElement.textContent.includes(searchField)) {
               isSelected = true;
               break;
            }
         }

         if (isSelected) {
            trElement.classList.add("select");
         }
      }

      searchFieldElement.value = "";
   }
}