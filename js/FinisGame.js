export const FinisGame = (user, puntaje) => {
    return new Promise((resolve, reject) => {
      clearHtml()
    });
  };



function clearHtml(){
    const container = document.querySelector("#container");
    container.textContent=""
  
}