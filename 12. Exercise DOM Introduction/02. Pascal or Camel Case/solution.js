function solve() {
  let textElement = document.getElementById("text");
  let namingConventionElement = document.getElementById("naming-convention");
  let resultElement = document.getElementById("result");

  let text = textElement.value;
  let namingConvention = namingConventionElement.value;

  let convertToPascalCase = (text) => text
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");

  let convertor = {
    "Pascal Case": convertToPascalCase,
    "Camel Case": (text) => convertToPascalCase(text).charAt(0).toLowerCase() + convertToPascalCase(text).slice(1),
  }

  if (!convertor[namingConvention]) {
    resultElement.textContent = "Error!";
    return;
  }

  resultElement.textContent = convertor[namingConvention](text);
}