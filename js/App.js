import { data } from "./data.js";
import { crearRadioBtn } from "./Radiobtn.js";

var dataCategory = [];
var preguntaActual = [];
var categoria = 0;
var respuestaCorrecta = 0;
var respuestaIncorrecta = 0;
var puntaje = 0;
const listCategory = [
  "General",
  "Matematicas",
  "Programacion",
  "Logica",
  "Historia",
];

if (categoria === 0) {
  dataCategory = data.filter(
    (dato) => dato.category === listCategory[categoria]
  );
}
export const app = () => {
  return new Promise((resolve, reject) => {
    start();
  });

  function start() {
    //Filtro la data por categorias

    QuestionsLocaStorage();
    preguntaActual = dataCategory[ordenQuestionAleatorio()];
    show(preguntaActual);
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

    const divQuestion = document.createElement("form");
    divQuestion.classList = "card";

    const categoryQuestion = document.createElement("h3");
    categoryQuestion.textContent = data.category;
    categoryQuestion.id = "title-category";

    const question = document.createElement("P");
    question.textContent = data.question;
    question.id = "question";

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
      const order = [false, false, false, false, false];
      localStorage.setItem("order", JSON.stringify(order));
      console.log("se agrego el orden de los elementos del localstorage");

  
    } else {
      let orden = JSON.parse(localStorage.getItem("order"));
      const order = orden.filter((dato) => dato === true);

      if (order.length === 5) {
        localStorage.removeItem("order");
        QuestionsLocaStorage();
        console.log("se elimino el orden de los elementos del localstorage");

        if (categoria < 4) {
          categoria++;
        } else {
          finisGame();
        }
      }
    }

    dataCategory = data.filter(
      (dato) => dato.category === listCategory[categoria]
    );
    console.log(categoria);
    console.log(localStorage);
  }

  function clickBtnNext() {
    const option1 = document.querySelector("#flexRadioDefault1");
    const option2 = document.querySelector("#flexRadioDefault2");
    const option3 = document.querySelector("#flexRadioDefault3");
    const option4 = document.querySelector("#flexRadioDefault4");

    switch (preguntaActual.answer) {
      case 1:
        option1.checked ? respuestaCorrecta++ : respuestaIncorrecta--;
        break;
      case 2:
        option2.checked ? respuestaCorrecta++ : respuestaIncorrecta--;
        break;
      case 3:
        option3.checked ? respuestaCorrecta++ : respuestaIncorrecta--;
        break;
      case 4:
        option4.checked ? respuestaCorrecta++ : respuestaIncorrecta--;
        break;
      default:
    }
    puntaje = respuestaCorrecta * 10 - respuestaIncorrecta * 10;

    console.log("puntaje", puntaje);
    QuestionsLocaStorage();
    preguntaActual = dataCategory[ordenQuestionAleatorio()];
    nextQuestion(preguntaActual);
  }

  function nextQuestion(data) {
    const formCard = document.querySelector(".card");
    formCard.reset();

    const category = document.querySelector("#title-category");
    const question = document.querySelector("#question");

    const labelOption1 = document.querySelector("#labelRadioDefault1");
    const labelOption2 = document.querySelector("#labelRadioDefault2");
    const labelOption3 = document.querySelector("#labelRadioDefault3");
    const labelOption4 = document.querySelector("#labelRadioDefault4");

    question.textContent = data.question;
    category.textContent = data.category;

    labelOption1.textContent = data.option1;
    labelOption2.textContent = data.option2;
    labelOption3.textContent = data.option3;
    labelOption4.textContent = data.option4;
  }
  function finisGame() {
    const formCard = document.querySelector(".card");
    formCard.reset();
  }
};
