function generateReport() {
    let thElements = document.querySelectorAll("table thead th");
    let trElements = document.querySelectorAll("table tbody tr");
    let outputElement = document.getElementById("output");

    let columnSorting = Array
        .from(thElements)
        .map(thElement => {
            let checkboxElement = thElement.querySelector("input");

            return {
                name: thElement.textContent.toLocaleLowerCase().trim(),
                active: checkboxElement.checked,
            };
        });

    let reportData = Array
        .from(trElements)
        .map(trElement => {
            let tdElements = trElement.querySelectorAll("td");

            let data = Array
                .from(tdElements)
                .reduce((result, tdElement, i) => {
                    if (!columnSorting[i].active) {
                        return result;
                    }

                    let columnName = columnSorting[i].name;
                    result[columnName] = tdElement.textContent;

                    return result;
                }, {})

            return data;
        });

    outputElement.value = JSON.stringify(reportData, null, 2);
}