import { app } from "./app.js";
import { Record } from "./Record.js";

export const login = () => {
  return new Promise((resolve, reject) => {
    initLogin();
  });
};

function initLogin() {
  //SE Carga la estretura es el docoment tipo HTML
  const container = document.querySelector("#container");
  container.classList = "container";

  const divImgQuestion = document.createElement("figure");
  divImgQuestion.classList = "figure";

  const imgQuestion = document.createElement("img");
  imgQuestion.id = "img-question";
  imgQuestion.src = "https://github.com/JohnEstebanAP/preguntas-y-respuestas-js/blob/master/img/quiz.png?raw=true";

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
  title1.textContent = "Ingreso";

  const labelUser = document.createElement("label");
  labelUser.textContent = "Nombre de usuario";
  labelUser.id = "label-login";
  labelUser.for = "input-user";

  const inputUser = document.createElement("input");
  inputUser.id = "input-user";

  const helpText = document.createElement("div");
  helpText.id = "emailHelp";
  helpText.classList = "form-text";

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
  btnRecord.addEventListener("click", clickBtnRecord, false);

  container.appendChild(divImgQuestion);
  divImgQuestion.appendChild(imgQuestion);
  container.appendChild(formLogin);
  formLogin.appendChild(divTitle);
  divTitle.appendChild(title1);
  divfrom.appendChild(labelUser);
  divfrom.appendChild(inputUser);
  divfrom.appendChild(helpText);
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
    clearHtml();
    //Iniciamos el juego
    stargame(user.value);
  } else {
    helpText.textContent = "Por favor ingrese un usuario";
  }
}

function clickBtnRecord() {
  //se limpia la pantalla
  clearHtml();
  //Iniciamos el juego
  starRecord();
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

const starRecord = async () => {
  try {
    const StartRecor = await Record();
    StartRecor();
  } catch (error) {
    console.log(error);
  }
};

function clearHtml() {
  const container = document.querySelector("#container");
  container.textContent = "";
}
