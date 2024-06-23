function attachEvents() {
  const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

  const studentsTbodyElement = document.querySelector("#results tbody")
  const submitBtn = document.getElementById("submit");

  submitBtn.addEventListener("click", () => {
    const firstNameElement = document.querySelector("input[name=firstName]");
    const lastNameElement = document.querySelector("input[name=lastName]");
    const facultyNumberElement = document.querySelector("input[name=facultyNumber]");
    const gradeElement = document.querySelector("input[name=grade]");

    const newStudent = {
      firstName: firstNameElement.value,
      lastName: lastNameElement.value,
      facultyNumber: facultyNumberElement.value,
      grade: gradeElement.value,
    }

    fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newStudent),
    })
      .then(res => res.json())
      .then(data => {
        studentsTbodyElement.appendChild(createStudentElement(data))

        firstNameElement.value = "";
        lastNameElement.value = "";
        facultyNumberElement.value = "";
        gradeElement.value = "";
      });
  });

  studentsTbodyElement.innerHTML = "";
  fetch(baseUrl)
    .then(res => res.json())
    .then(data => {
      Object.values(data)
        .forEach(student => studentsTbodyElement.appendChild(createStudentElement(student)));
    });


  function createStudentElement(students) {
    const trElement = document.createElement("tr");

    const createTd = value => {
      const tdElement = document.createElement("td");
      tdElement.textContent = value;

      return tdElement;
    };

    trElement.appendChild(createTd(students.firstName));
    trElement.appendChild(createTd(students.lastName));
    trElement.appendChild(createTd(students.facultyNumber));
    trElement.appendChild(createTd(students.grade));

    return trElement;
  }
}

attachEvents();