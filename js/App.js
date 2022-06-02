import { data } from "./data.js";
import { crearRadioBtn } from "./Radiobtn.js";

export const app = () => {
  return new Promise((resolve, reject) => {
    function ordenQuestion() {
      if (localStorage.getItem("order") === 'null' || localStorage.getItem("order") === null ) {
        const order = [false, false, false, false];
        localStorage.setItem("order", JSON.stringify(order));
        console.log("se agrego el orden de los elementos del localstorage");
      } else {
        let orden = JSON.parse(localStorage.getItem("order"));
        const order =  orden.filter((dato) => dato === true);
        if (order.length === 4) {
          localStorage.removeItem("order");
          ordenQuestion();
          console.log("se elimino el orden de los elementos del localstorage");
        }
      }
    }

    function start(data) {
      const container = document.querySelector("#container");
      container.classList = "container";

      const divImgQuestion = document.createElement("figure");
      divImgQuestion.classList = "figure";

      const imgQuestion = document.createElement("img");
      imgQuestion.id = "img-question";
      imgQuestion.src = "/img/puzle.png";

      const divTitle = document.createElement("div");
      divTitle.id = "div-title1";
      divTitle.classList = "container";

      const title1 = document.createElement("h1");
      title1.id = "title1";
      title1.textContent = "Juego de preguntas";

      const articleQuestion = document.createElement("article");
      articleQuestion.id = "article-question";
      articleQuestion.classList = "container";

      const divQuestion = document.createElement("div");
      divQuestion.classList = "card";

      //console.log(dataOriginal);

      const categoryQuestion = document.createElement("h3");
      categoryQuestion.textContent = data.category;
      categoryQuestion.id = "title-category";

      const question = document.createElement("P");
      question.textContent = data.question;

      const btnNext = document.createElement("button");
      btnNext.classList = "btn btn-dark";
      btnNext.id = "btn-next";

      //btnNext.addEventListener("click", kTitulos, false);
      btnNext.textContent = "Completar y continuar";
      btnNext.show = true;

      divImgQuestion.appendChild(imgQuestion);
      container.appendChild(divImgQuestion);
      container.appendChild(divTitle);
      divTitle.appendChild(title1);
      container.appendChild(articleQuestion);
      divQuestion.appendChild(categoryQuestion);
      divQuestion.appendChild(question);
      articleQuestion.appendChild(divQuestion);

      crearRadioBtn(articleQuestion, divQuestion, data);

      articleQuestion.appendChild(btnNext);
    }

    //Filtro la data por categorias
    const listCategory = [
      "General",
      "Matematicas",
      "Programacion",
      "Logica",
      "Historia",
    ];
    const dataCategory = data.filter(
      (dato) => dato.category === listCategory[0]
    );
    ordenQuestion();
    let orden = JSON.parse(localStorage.getItem("order"));
    let ordenAleatorio = random(0, 4);
      while (true) {
      if (orden[ordenAleatorio] === false) {
        orden[ordenAleatorio] = true;
        break;
      } else {
        ordenAleatorio = random(0, 4);
      }
    } 

    localStorage.setItem("order", JSON.stringify(orden));
    console.log(orden);
    console.log(ordenAleatorio);


   start(dataCategory[ordenAleatorio]);
  });

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  /*
            data.forEach((dato) => {
              console.log(dato.question);
            }); */

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
