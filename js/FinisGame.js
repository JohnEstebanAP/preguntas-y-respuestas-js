export const FinisGame = (user, puntaje, categoria) => {
  return new Promise((resolve, reject) => {
    //se limpia el html para agregar contenido nuevo
    clearHtml();
    //guardo el histarial del usuario en el local estorage
    LocaStorage(user, puntaje, categoria);
    //se muestra el puntaje Final
    scoreEnd(user, puntaje, categoria);
  });
};

function scoreEnd(user, puntaje) {
  const container = document.querySelector("#article-question");

  console.log("puntaje final", puntaje);

  const divScore = document.createElement("div");
  divScore.classList = "div-score";
  if (puntaje >= 20) {
    divScore.style.backgroundColor = "green";
  } else {
    divScore.style.backgroundColor = "red";
  }

  const h1User = document.createElement("h1");
  h1User.id = "h1-user";
  h1User.textContent = user;

  const h2Score = document.createElement("h2");
  h2Score.id = "h2-score";
  h2Score.textContent = `Puntaje Final: ${puntaje}`;

  divScore.appendChild(h1User);
  divScore.appendChild(h2Score);
  container.appendChild(divScore);
}

function clearHtml() {
  const container = document.querySelector("#article-question");
  container.textContent = "";
}

function LocaStorage(user, puntaje, categoria) {
  let recordUser = [];

  const dataUser = {
    name: user,
    score: puntaje,
    categori: categoria,
  };

  if (localStorage.getItem("recordUser") !== null) {
    recordUser = JSON.parse(localStorage.getItem("recordUser"));
  }

  //agrego la data del usuario a un arreglo
  recordUser.unshift(dataUser);

  //guardo el histarial del usuario en el local estorage
  localStorage.setItem("recordUser", JSON.stringify(recordUser));
}

