function search() {
   let townsListElement = document.getElementById("towns");
   let resultElement = document.getElementById("result");
   let searchText = document.getElementById("searchText").value;

   let matchCount = 0;
   let townElements = Array.from(townsListElement.children);
   for (const townElement of townElements) {
      if (townElement.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         townElement.style.textDecoration = "underline";
         townElement.style.fontWeight = "bold";
         matchCount++;
      } else {
         townElement.style.textDecoration = "none";
         townElement.style.fontWeight = "normal";
      }
   }

   resultElement.textContent = `${matchCount} matches found`;
}
