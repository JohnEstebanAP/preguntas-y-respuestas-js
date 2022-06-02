import { data } from "./data.js";
import { crearRadioBtn } from "./Radiobtn.js";


var dataCategory = []

export const app = () => {
  return new Promise((resolve, reject) => {
    start();
  });

  function start() {
    //Filtro la data por categorias
    const listCategory = [
      "General",
      "Matematicas",
      "Programacion",
      "Logica",
      "Historia",
    ];
    
    dataCategory = data.filter(
      (dato) => dato.category === listCategory[0]
    );
    QuestionsLocaStorage();
    show(dataCategory[ordenQuestionAleatorio()]);
  }

  function show(data) {
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

    const categoryQuestion = document.createElement("h3");
    categoryQuestion.textContent = data.category;
    categoryQuestion.id = "title-category";

    const question = document.createElement("P");
    question.textContent = data.question;
    question.id = "question"

    const btnNext = document.createElement("button");
    btnNext.classList = "btn btn-dark";
    btnNext.id = "btn-next";
    btnNext.textContent = "Completar y continuar";
    btnNext.show = true;
    btnNext.addEventListener("click", clickBtnNext, false);

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

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function ordenQuestionAleatorio() {
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
    return ordenAleatorio;
  }
  function QuestionsLocaStorage() {
    if (
      localStorage.getItem("order") === "null" ||
      localStorage.getItem("order") === null
    ) {
      const order = [false, false, false, false];
      localStorage.setItem("order", JSON.stringify(order));
      console.log("se agrego el orden de los elementos del localstorage");
    } else {
      let orden = JSON.parse(localStorage.getItem("order"));
      const order = orden.filter((dato) => dato === true);
      if (order.length === 4) {
        localStorage.removeItem("order");
        QuestionsLocaStorage();
        console.log("se elimino el orden de los elementos del localstorage");
      }
    }
  }

  function clickBtnNext() {
    const option1 = document.querySelector("#flexRadioDefault1");
    const option2 = document.querySelector("#flexRadioDefault2");
    const option3 = document.querySelector("#flexRadioDefault3");
    const option4 = document.querySelector("#flexRadioDefault4");
    if (option1.checked) {
    }
    if (option2.checked) {
    }
    if (option3.checked) {
    }
    if (option4.checked) {
    }

    QuestionsLocaStorage();
    nextQuestion(dataCategory[ordenQuestionAleatorio()])
  }

  function nextQuestion(data) {
    const category = document.querySelector("#title-category");
    const question = document.querySelector("#question")
    const option1 = document.querySelector("#flexRadioDefault1");
    const option2 = document.querySelector("#flexRadioDefault2");
    const option3 = document.querySelector("#flexRadioDefault3");
    const option4 = document.querySelector("#flexRadioDefault4");

    const labelOption1 = document.querySelector("#labelRadioDefault1");
    const labelOption2 = document.querySelector("#labelRadioDefault2");
    const labelOption3 = document.querySelector("#labelRadioDefault3");
    const labelOption4 = document.querySelector("#labelRadioDefault4");

    question.textContent = data.question;
    category.textContent = data.category;
    option1.textContent = data.option1;
    option1.textContent = data.option3;
    option1.textContent = data.option3;
    option1.textContent = data.option4;

    labelOption1.textContent = data.option1;
    labelOption2.textContent = data.option3;
    labelOption3.textContent = data.option3;
    labelOption4.textContent = data.option4;
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
