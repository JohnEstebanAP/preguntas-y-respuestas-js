import { data } from "./data.js";
import { crearRadioBtn } from "./Radiobtn.js";

export const app = () => {
  return new Promise((resolve, reject) => {
    const dupicarData = () => {
      dataOriginal = data.map((dato) => {
        return dato;
      });
    };
    
    function start(data) {
      const container = document.querySelector("#container");
      container.classList="container"

      const divImgQuestion = document.createElement("figure");
      divImgQuestion.classList="figure";

      const imgQuestion = document.createElement("img");
      imgQuestion.id="img-question";
      imgQuestion.src ="/img/puzle.png";

      const divTitle = document.createElement("div");
      divTitle.id = "div-title1";
      divTitle.classList="container"

      const title1 = document.createElement("h1");
      title1.id = "title1";
      title1.textContent= "Juego de preguntas";

      const articleQuestion = document.createElement("article");
      articleQuestion.id = "article-question"
      articleQuestion.classList="container"
    
      const categoryQuestion = document.createElement("h3");
      categoryQuestion.textContent= "Categoria";
      categoryQuestion.id = "title-category";
      
      const question = document.createElement("P");
      question.textContent = "pregunta";


      

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
      articleQuestion.appendChild(categoryQuestion);
      articleQuestion.appendChild(question);
        /* 
            data.forEach((dato) => {
              console.log(dato.question);
            }); */

      crearRadioBtn(articleQuestion, data[0]);

      articleQuestion.appendChild(btnNext);


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


