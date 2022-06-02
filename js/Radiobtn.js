export function crearRadioBtn(articleQuestion,divQuestion, data){

    const divCheckedRadio1 = document.createElement("div");
    divCheckedRadio1.classList = "form-check"

    const inputQuestion1 = document.createElement("input");
    inputQuestion1.classList = "form-check-input";
    inputQuestion1.id = "flexRadioDefault1";
    inputQuestion1.type = "radio";
    inputQuestion1.name = "flexRadio";

    const labelQuestion1 = document.createElement("label");
    labelQuestion1.classList = "form-check-label"
    labelQuestion1.for = "flexRadioDefault1";
    labelQuestion1.id = "labelRadioDefault1";
    labelQuestion1.textContent = data.option1;
    
    const divCheckedRadio2 = document.createElement("div");
    divCheckedRadio2.classList = "form-check";

    const inputQuestion2 = document.createElement("input");
    inputQuestion2.classList = "form-check-input";
    inputQuestion2.id = "flexRadioDefault2";
    inputQuestion2.type = "radio";
    inputQuestion2.name = "flexRadio";

    const labelQuestion2 = document.createElement("label");
    labelQuestion2.classList = "form-check-label"
    labelQuestion2.id = "labelRadioDefault2";
    labelQuestion2.for = "flexRadioDefault2";
    labelQuestion2.textContent = data.option2;



    const divCheckedRadio3 = document.createElement("div");
    divCheckedRadio3.classList = "form-check"

    const inputQuestion3 = document.createElement("input");
    inputQuestion3.classList = "form-check-input";
    inputQuestion3.id = "flexRadioDefault3";
    inputQuestion3.type = "radio"
    inputQuestion3.name = "flexRadio"

    const labelQuestion3 = document.createElement("label");
    labelQuestion3.classList = "form-check-label"
    labelQuestion3.id = "labelRadioDefault3";
    labelQuestion3.for = "flexRadioDefault3";
    labelQuestion3.textContent = data.option3;

    const divCheckedRadio4 = document.createElement("div");
    divCheckedRadio4.classList = "form-check"

    const inputQuestion4 = document.createElement("input");
    inputQuestion4.classList = "form-check-input";
    inputQuestion4.id = "flexRadioDefault4";
    inputQuestion4.type = "radio"
    inputQuestion4.name = "flexRadio"

    const labelQuestion4 = document.createElement("label");
    labelQuestion4.classList = "form-check-label";
    labelQuestion4.id = "labelRadioDefault4";
    labelQuestion4.for = "flexRadioDefault4";
    labelQuestion4.textContent = data.option4;

    const divCheckedRadio5 = document.createElement("div");
    divCheckedRadio5.classList = "form-check"


    divCheckedRadio1.appendChild(inputQuestion1);
    divCheckedRadio1.appendChild(labelQuestion1);

    divCheckedRadio2.appendChild(inputQuestion2);
    divCheckedRadio2.appendChild(labelQuestion2);

    divCheckedRadio3.appendChild(inputQuestion3);
    divCheckedRadio3.appendChild(labelQuestion3);


    divCheckedRadio4.appendChild(inputQuestion4);
    divCheckedRadio4.appendChild(labelQuestion4);

    divQuestion.appendChild(divCheckedRadio1);
    divQuestion.appendChild(divCheckedRadio2);
    divQuestion.appendChild(divCheckedRadio3);
    divQuestion.appendChild(divCheckedRadio4);

    articleQuestion.appendChild(divQuestion);
    
  }