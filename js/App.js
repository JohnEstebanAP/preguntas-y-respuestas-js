import { data } from "./data.js";

export const app = () => {
  return new Promise((resolve, reject) => {
    const dupicarData = () => {
      dataOriginal = data.map((dato) => {
        return dato;
      });
    };
    
    function start(data) {
      const container = document.querySelector("#container");

      const divTitle = document.createElement("div");

      const title1 = document.createElement("h1");
      title1.textContent= "Juego de preguntas";

      const btnNext = document.createElement("button");
      //btnNext.addEventListener("click", kTitulos, false);
      btnNext.textContent = "Completar y continuar";
      btnNext.show = true;
      
      container.appendChild(divTitle);
      divTitle.appendChild(title1);
      container.appendChild(btnNext);

      /*

      const table = document.createElement("table");
      const tr = document.createElement("tr");
      const thName = document.createElement("th");
      const thLastName = document.createElement("th");
      const thAge = document.createElement("th");
      const thEmail = document.createElement("th");
      const thPhone = document.createElement("th");

      thName.textContent = "Nombre";
      thLastName.textContent = "Apellido";
      thAge.textContent = "Edad";
      thEmail.textContent = "Email";
      thPhone.textContent = "Telefono";

      table.append(tr);

      tr.appendChild(thName);
      tr.appendChild(thLastName);
      tr.appendChild(thAge);
      tr.appendChild(thEmail);
      tr.appendChild(thPhone);

      //Evento del click en los titulos
      tr.addEventListener("click", clickTitulos, false);

      container.append(table);

      data.forEach((dato) => {
        const tr = document.createElement("tr");
        const tdQuestion = document.createElement("td");
        const tdOption1 = document.createElement("td");
        const tdOption2 = document.createElement("td");
        const tdOption3 = document.createElement("td");
        const tdOption4 = document.createElement("td");
        const tdCategory = document.createElement("td");

        tdQuestion.textContent = dato.question  ;

        tr.appendChild(tdQuestion);

        table.appendChild(tr);
      });*/
    }

    start(data);
  });

/*
  
    //Se ordena los elementos de menor a mallor
    function ordenarAZ(data) {
      data.sort(function (a, b) {
        if (a.nombre > b.nombre) {
          return 1;
        }
        if (a.nombre < b.nombre) {
          return -1;
        }
        return 0;
      });
    }
    

    
    var status = 0;
    function clickTitulos() {
      if (status === 0) {

        return true;
      } else if (status === 1) {

        return true;
      } else {

        return true;
      }
      status++;
      return false;
    }*/
    
};


