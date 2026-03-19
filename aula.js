// selecionar elementos pelo ID

// let banner = document.getElementById('banner');
// console.log(banner.src);

// outros seletores

// let squareElements = document.getElementsByClassName('square');
// console.log(squareElements);

// seletor querySelector

// let firstSquare = document.querySelector('.square');
// console.log(firstSquare);

// ---------''-----

/* let yammi_text = document.querySelector("span");

function changeTaste() {
  if (yammi_text.innerText == "Yammi") {
    yammi_text.innerText = "Yack";
  } else {
    yammi_text.innerText = "Yammi";
  }
}

let mySilkyChickens = document.querySelector("h1");
function changeLang() {
  // manipular o texto
  if (mySilkyChickens.innerText == "Silky Chickens") {
    mySilkyChickens.innerText = "Galinhas Sedosas";
  } else {
    mySilkyChickens.innerText = "Silky Chickens";
  }
}

function changeColor() {
  // mudar o atributo style
  mySilkyChickens.style.backgroundColor = "green";
}

let trees = document.getElementById("container");
let img = document.querySelector("img");

function changeStyle() {
  // mudar o atributo style
  trees.style.textAlign = "center";
  img.style.width = "150px";
  img.style.borderRadius = "50%";
}

let mySilkieChickens = document.querySelector("h1");
function changeLang() {
  // manipular o texto
  if (mySilkieChickens.innerText == "Silkie Chickens") {
    mySilkieChickens.innerText = "Galinhas Sedosas";
  } else {
    mySilkieChickens.innerText = "Silkie Chickens";
  }
}

function mudaCor() {
  // mudar o atributo style
  if (mySilkieChickens.style.backgroundColor == "green") {
    mySilkieChickens.style.backgroundColor = "blue";
  } else {
    mySilkieChickens.style.backgroundColor = "green";
  }
}

// manipular os atributos
// 1ª versão
function mudaImagem() {
  const banner = document.getElementById("banner");

  if (
    banner.getAttribute("src") ==
    "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80%22"
  ) {
    banner.setAttribute(
      "src",
      "https://www.infoescola.com/wp-content/uploads/2017/04/galinha-101572393.jpg",
    );
  } else {
    banner.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80%22",
    );
  }
}
 */
// 2ª Versão

/* function eggOrChicken() {
    let imageegg = document.querySelector('img');
  if (
    imageegg.getAttribute("src") ==
    "https://devsprouthosting.com/images/egg.jpg"
  ) {
    imageegg.setAttribute(
      "src",
      "https://devsprouthosting.com/images/chicken.jpg",
    );
  } else {
    imageegg.setAttribute(
      "src",
      "https://devsprouthosting.com/images/egg.jpg",
    );
  }
} */

/* function mudaCorLista() {
  //seleccção
  let myLis = document.getElementsByClassName("toclevel-1");
 
  //manipulação
  for(let element of myLis){
    element.style.backgroundColor = 'green';
  }
 
} */

/* function changeOrder() {
  let items = document.getElementsByTagName("li");

  for (let element of items) {
    if (element.classList.contains("highlight")) {
      element.classList.remove("highlight");
      element.classList.add("NO_highlight");
    } else {
      element.classList.remove("NO_highlight");
      element.classList.add("highlight");
    }
  }
} */

/* let myLoginElement = document.createElement("h3");
myLoginElement.innerText = "olá Sara, login efectuado!";

//indicar quem é o pai (onde o novo elemento vai encaixar)
let myLoginParent = document.getElementById("login-message");
myLoginParent.appendChild(myLoginElement);
 */
/* //resultado de uma consulta à base de dados que deu login ok
function login() {
  //criar o novo elemento
  let myLoginElement = document.createElement("h3");
  myLoginElement.innerText = "olá Sara, login efectuado!";

  //indicar quem é o pai (onde o novo elemento vai encaixar)
  let myLoginParent = document.getElementById("login-message");
  myLoginParent.appendChild(myLoginElement);

  //remove
  myLoginParent.previousElementSibling.remove();
}
 */

let helloBtn = document.getElementById("helloBtn");
let loginBtn = document.getElementById("loginBtn");
let divEvent = document.getElementById("divEvent");
let myList = document.getElementById("list");
let myForm = document.getElementById("form");

function helloW() {
  alert("hello mundo!");
}

function login() {
  let pass = prompt("qual é a pass?");
}

function changeToGreen() {
  this.style.backgroundColor = "green";
}

helloBtn.addEventListener("mouseout", helloW);
loginBtn.addEventListener("click", login, { once: true });
loginBtn.addEventListener("click", helloW);
divEvent.addEventListener("click", changeToGreen);
loginBtn.addEventListener("click", changeToGreen);
helloBtn.addEventListener("click", changeToGreen);

document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key == "l" || event.key == "L") {
    alert("evento de teclado!" + event.key);
  }
});

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //traz um objecto com TODOS os inputs do formulário
  let data = new FormData(this);

  //acede ao input do formulário que tem no name newAnimal
  let animal = data.get("newAnimal");

  let newLi = document.createElement("li");
  newLi.innerText = animal;

  myList.appendChild(newLi);

  this.reset();
});

//loginBtn.addEventListener("click", login);
//loginBtn.addEventListener("click", helloW);

let logoutBtn = document.getElementById('logout');
 
logoutBtn.addEventListener('click', function(){
  localStorage.removeItem('user_login')
})
 
 