import { data } from "./data.js";
import { crearRadioBtn } from "./Radiobtn.js";

var order = [false, false, false, false, false];
var dataCategory = [];
var data1;
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

export const app = () => {
  return new Promise((resolve, reject) => {
    //Guardo la data y la recupero del localStorage
    //QuestionsLocaStorage();
    //Filtro la data por categorias
    nextCategori()

    const index = ordenQuestionAleatorio();
    data1 = dataCategory[index];

    //SE Carga la estretura es el docoment tipo HTML
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
    categoryQuestion.textContent = data1.category;
    categoryQuestion.id = "title-category";

    const question = document.createElement("P");
    question.textContent = data1.question;
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

    crearRadioBtn(articleQuestion, divQuestion, data1);

    articleQuestion.appendChild(btnNext);
  });
};

function ordenQuestionAleatorio() {
  //let orden = JSON.parse(localStorage.getItem("order"));
  let ordenAleatorio = random(0, 4);
  while (true) {
    if (order[ordenAleatorio] === false) {
      order[ordenAleatorio] = true;
      break;
    } else {
      ordenAleatorio = random(0, 4);
    }
  }

  //localStorage.setItem("order", JSON.stringify(orden));
  return ordenAleatorio;
}
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clickBtnNext() {
  const option1 = document.querySelector("#flexRadioDefault1");
  const option2 = document.querySelector("#flexRadioDefault2");
  const option3 = document.querySelector("#flexRadioDefault3");
  const option4 = document.querySelector("#flexRadioDefault4");

  try {
    const respuesta = data1.answer;
    switch (respuesta) {
      case "1":
        if (option1.checked) {
          console.log(option1.checked);
          respuestaCorrecta++;
        } else {
          respuestaIncorrecta++;
        }

        break;
      case "2":
        if (option2.checked) {
          respuestaCorrecta++;
        } else {
          respuestaIncorrecta++;
        }

        break;
      case "3":
        if (option3.checked) {
          respuestaCorrecta++;
        } else {
          respuestaIncorrecta++;
        }

        break;
      case "4":
        if (option4.checked) {
          respuestaCorrecta++;
        } else {
          respuestaIncorrecta++;
        }
        break;
      default:
        console.log("todo se fue a la mierda");
        break;
    }

    if (
      option1.checked ||
      option2.checked ||
      option3.checked ||
      option4.checked
    ) {
      puntaje = respuestaCorrecta * 10 - respuestaIncorrecta * 10;
      console.log("puntaje", puntaje);
      console.log("categoria", categoria);
      console.log("category", dataCategory);
      nextCategori();
      nextQuestion();
      
    } else {
      respuestaIncorrecta--;
    }
  } catch (err) {
    console.log("Error Precesando la pregunta:", err);
  }
}

function nextCategori(){
    const orden = order.filter((dato) => dato === true);
    if (orden.length === 5) {
      if (categoria < 4) {
        categoria++;
        order = [false, false, false, false, false];
      } else {
        finisGame();
      }
    }
    dataCategory = data.filter(
        (dato) => dato.category === listCategory[categoria]
      );  
}

function nextQuestion() {
  //QuestionsLocaStorage();
  const index = ordenQuestionAleatorio();
  console.log("numero pregunta ", order)
  data1 = dataCategory[index];

  const formCard = document.querySelector(".card");
  formCard.reset();

  const category = document.querySelector("#title-category");
  const question = document.querySelector("#question");

  const labelOption1 = document.querySelector("#labelRadioDefault1");
  const labelOption2 = document.querySelector("#labelRadioDefault2");
  const labelOption3 = document.querySelector("#labelRadioDefault3");
  const labelOption4 = document.querySelector("#labelRadioDefault4");

  question.textContent = data1.question;
  category.textContent = data1.category;

  labelOption1.textContent = data1.option1;
  labelOption2.textContent = data1.option2;
  labelOption3.textContent = data1.option3;
  labelOption4.textContent = data1.option4;
}

/* function finisGame() {
  const formCard = document.querySelector(".card");
  formCard.reset();
} */

/* function QuestionsLocaStorage() {
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
} */
