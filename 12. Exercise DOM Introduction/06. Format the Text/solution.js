function solve() {
  let outputElement = document.getElementById("output");
  let textareaElement = document.getElementById("input");

  let text = textareaElement.value;

  let result = text
    .split(".")
    .filter(sentence => sentence)
    .reduce((result, sentance, i) => {
      let resultIndex = Math.floor(i / 3);
      if (!result[resultIndex]) {
        result[resultIndex] = [];
      }

      result[resultIndex].push(sentance.trim());

      return result;
    }, [])
    .map(element => `<p>${element.join(". ")}.</p>`)
    .join("\n");

  outputElement.innerHTML = result;
}