
import { app } from "./app.js";

   //restaurara data
   const data = LocalStorage();
   var status = 0;
   var dataOriginal;
export const Record = () => {
  return new Promise((resolve, reject) => {
    initRecor();
  });
};

function LocalStorage() {
    let recordUser = [];

    //restauro la data guardada en el local storage
    if (localStorage.getItem("recordUser") !== null) {
      recordUser = JSON.parse(localStorage.getItem("recordUser"));
    }

    return recordUser;
}
  

function initRecor() {
  //SE Carga la estretura es el docoment tipo HTML
  const container = document.querySelector("#container");
  container.classList = "container";

  const divImgQuestion = document.createElement("figure");
  divImgQuestion.classList = "figure";

  const imgQuestion = document.createElement("img");
  imgQuestion.id = "img-question";
  imgQuestion.src = "/img/quiz.png";

  // Crea un formulario
  const formLogin = document.createElement("form");
  formLogin.classList = "form-card card";

  const divTitle = document.createElement("div");
  divTitle.id = "div-title-login";
  divTitle.classList = "container";

  const divfrom = document.createElement("div");
  divfrom.classList = "div-form";

  const title1 = document.createElement("h1");
  title1.id = "title1";
  title1.textContent = "Historial";

  dupicarData();
  llenartabla(divfrom, data);

  const btnNext = document.createElement("button");
  btnNext.classList = "btn btn-dark";
  btnNext.id = "btn-next";
  btnNext.textContent = "INGRESAR";
  btnNext.type = "button";
  btnNext.addEventListener("click", clickBtnNext, false);

  const btnRecord = document.createElement("button");
  btnRecord.classList = "btn btn-dark";
  btnRecord.id = "btn-record";
  btnRecord.textContent = "Historial";
  btnRecord.type = "button";
  btnRecord.addEventListener("click", clickBtnNext, false);

  
  container.appendChild(divImgQuestion);
  divImgQuestion.appendChild(imgQuestion);
  container.appendChild(formLogin);
  formLogin.appendChild(divTitle);
  divTitle.appendChild(title1);
  divfrom.appendChild(btnNext);
  divfrom.appendChild(btnRecord);
  formLogin.appendChild(divfrom);
}

function clickBtnNext() {
  const user = document.querySelector("#input-user");
  const helpText = document.querySelector("#emailHelp");

  if (user.value != "") {
    helpText.textContent = "";

    //se limpia la pantalla
    //clearHtml();
    //Iniciamos el juego
    stargame(user.value);

  } else {
    helpText.textContent = "Por favor ingrese un usuario";
  }
}

const stargame = async (user) => {
    try {
      //const Start = app(user.value);
      const Start = await app(user);
      Start(user);  
  
    } catch (error) {
      console.log(error);
    }
};

function clearHtml(){
    const container = document.querySelector("#container");
    container.textContent=""
  
}



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

  //Se ordena los elementos de mallor a menor
  function ordenarZA(data) {
    data.sort(function (a, b) {
      if (a.nombre < b.nombre) {
        return 1;
      }
      if (a.nombre > b.nombre) {
        return -1;
      }
      return 0;
    });
  }


  function clickTitulos() {
    if (status === 0) {
      ordenarAZ(data);
    } else if (status === 1) {
      ordenarZA(data);
    } else {
      status = 0;
      llenartabla(dataOriginal);
      return true;
    }
    status++;
    llenartabla(data);
    return false;
  }

  const dupicarData = () => {
    dataOriginal = data.map((dato) => {
      return dato;
    });
  };

  function llenartabla(divForm, data) {
    const container = divForm;
    

    container.innerHTML = "";

    const table = document.createElement("table");
    const tr = document.createElement("tr");
    const thName = document.createElement("th");
    const thScore = document.createElement("th");
    const thCategory = document.createElement("th");
  
    thName.textContent = "Nombre";
    thScore.textContent = "Puntos";
    thCategory.textContent = "Categoria";


    table.append(tr);

    tr.appendChild(thName);
    tr.appendChild(thScore);
    tr.appendChild(thCategory);


    //Evento del click en los titulos
    tr.addEventListener("click", clickTitulos, false);

    container.append(table);

    data.forEach((dato) => {
      const tr = document.createElement("tr");
      const tdName = document.createElement("td");
      const tdScore = document.createElement("td");
      const tdCategory = document.createElement("td");

      tdName.textContent = dato.name;
      tdScore.textContent = dato.score;
      tdCategory.textContent = dato.categori;

      tr.appendChild(tdName);
      tr.appendChild(tdScore);
      tr.appendChild(tdCategory);

      table.appendChild(tr);
    });
  }

  
