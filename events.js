let helloBtn = document.getElementById("helloBtn");
let loginBtn = document.getElementById("loginBtn");
let divEvent = document.getElementById("divEvent");
let myList = document.getElementById("list");
let myForm = document.getElementById("form");
let logoutBtn = document.getElementById("logout");
let catBtn = document.getElementById("cat-fact");
let catFact = document.getElementById("cat-fact");
let dogBtn = document.getElementById("dog-img");
let dogFact = document.getElementById("dog-fact");
let rickBtn = document.getElementById("rickandmortypeople");
let rickList = document.getElementById("rick-list");

function helloW() {
  alert("hello mundo");
}

function login() {
  if (localStorage.getItem("user_login")) {
    alert("Olá " + localStorage.getItem("user_login"));
  } else {
    let user = prompt("qual a teu UserName?");

    // 'user_login' funciona como nome da key. pode ter qualquer nome.
    // o user é a variavel que muda a cada refresh.

    localStorage.setItem("user_login", user);
  }
}

// uma função pode servir vários botoes
function changeToGreen() {
  this.style.backgroundColor = "green";
}

helloBtn.addEventListener("click", helloW);
loginBtn.addEventListener("click", login);
// loginBtn.addEventListener('click', helloW);
divEvent.addEventListener("click", changeToGreen);
loginBtn.addEventListener("click", changeToGreen);
helloBtn.addEventListener("click", changeToGreen);

logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("user_login");
});

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key == "l" || event.key == "L") {
    alert("evento de teclado");
  }
});

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // traz um objecto com todos os inputs do formulário
  let data = new FormData(this);
  // acede ao input do fotmulario que tem no name newAnimal
  let animal = data.get("newAnimal");

  let newLi = document.createElement("li");
  newLi.innerText = animal;

  myList.appendChild(newLi);

  this.reset();
});

catBtn.addEventListener("click", function () {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => {
      catFact.innerText = data.fact;
    });
});

dogBtn.addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      dogFact.innerHTML = ""; // limpar imagem anterior
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Random dog";
      dogFact.appendChild(img);
    })
    .catch((err) => console.error("Erro no fetch do dog API:", err));
});

/* rickmortyBtn.addEventListener("click", function () {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      rickmortyFact.innerText = data.rickmortyFact;
    })
    .catch((err) => console.error("Erro no fetch do rickmorty API:", err));
});

 */
/* 
rickBtn.addEventListener("click", function () {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);

      for (let element of data.results) {
       console.log(element.name);

       let li = document.createElement("li");
       li.innerText = element.name;

       rickList */
       
       /*  let RMLI = document.createElement("li");
        RMLI.innerText = element.name;

        rickList.appendChild(RMLI);
 */      
      /*  let random = Math.floor(Math.random() * data.results.length);
      let character = data.results[random];

      let RMLI = document.createElement("li");
      RMLI.innerText = character.name;

      myList.appendChild(RMLI);

    })
    .catch((err) => console.error("Erro no fetch do rickmorty API:", err)); */

/*     
    });
});
 */


rickBtn.addEventListener("click", function () {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      rickList.innerText = ""; // limpa antes de mostrar tudo

      data.results.forEach((character) => {
        const card = document.createElement("div");
        card.style.border = "1px solid #ccc";
        card.style.padding = "10px";
        card.style.margin = "10px 0";

        card.innerHTML = `
          <h3>${character.name}</h3>
          <img src="${character.image}" width="150">
          <p><strong>Status:</strong> ${character.status}</p>
          <p><strong>Espécie:</strong> ${character.species}</p>
          <p><strong>Género:</strong> ${character.gender}</p>
          <p><strong>Origem:</strong> ${character.origin.name}</p>
          <p><strong>Localização atual:</strong> ${character.location.name}</p>
        `;

        rickList.appendChild(card);
      });
    })
    .catch((err) => console.error("Erro no fetch do rickmorty API:", err));
});