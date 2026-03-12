document.addEventListener("DOMContentLoaded", function () {
  let groceryForm = document.getElementById("myShoppingList");
  let myUl = document.querySelector("ul");

  groceryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let groceryData = new FormData(this);

    let newLi = document.createElement("li");
    newLi.innerText = groceryData.get("qt") + ":" + groceryData.get("product");

    myUl.appendChild(newLi);

    this.reset();
  });
});

/* document.addEventListener("DOMContentLoaded", () => {
  const groceryForm = document.getElementById("myShoppingList");
  const myUl = document.querySelector("ul");

  groceryForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let groceryData = new FormData(this);

    let newLi = document.createElement("li");
    newLi.innerText = groceryData.get("qt") + ":" + groceryData.get("product");

    myUl.appendChild(newLi);
    this.reset();
  });
});
 */