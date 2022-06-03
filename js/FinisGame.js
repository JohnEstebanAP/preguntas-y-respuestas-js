export const FinisGame = (user, puntaje) => {
  return new Promise((resolve, reject) => {
    clearHtml();
    scoreEnd(user, puntaje);
  });
};

function scoreEnd(user, puntaje) {
  const container = document.querySelector("#article-question");


  console.log("puntaje final", puntaje);

  const divScore = document.createElement("div");
  divScore.classList = "div-score";
  if (puntaje >= 60) {
    divScore.style.backgroundColor = "green";
  } else {
    divScore.style.backgroundColor = "red";
  }

  const h1User = document.createElement("h1");
  h1User.id = "h1-user";
  h1User.textContent = user;

  const h2Score = document.createElement("h2");
  h2Score.id = "h2-score";
  h2Score.textContent = (`Puntaje Final: ${puntaje}`);

  divScore.appendChild(h1User);
  divScore.appendChild(h2Score);
  container.appendChild(divScore);
}

function clearHtml() {
  const container = document.querySelector("#article-question");
  container.textContent = "";
}
