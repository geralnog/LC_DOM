/* alert('helloo world2'); */

/* 3. No Js declara o seguinte array: const colors = ['red',
'orange', 'yellow', 'green', 'blue', 'indigo', 'violet’];
4. Selecciona os <span> e itera de modo a que a cada
um seja assignada uma das cores do array.
 */

/* const colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)"
]; */

/* function createBtns() {
  const headings = document.querySelectorAll("div");

  for (let headings of headings) {
    let randomRGB = function () {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    };

    const rgbColor = randomRGB(); // ✅ call the function
    headings.style.backgroundColor = rgbColor;
    headings.style.height = "300px";
    headings.style.width = "400px";
  }
}
 */

/* function createBtns() {
    for (let i = 0; i < 100; i++) {
  let mybuttons = document.createheadings("button");

  mybuttons.innerText = "Novo Botão";

  let container = document.getheadingsById("container");
  container.appendChild(mybuttons);
}
} */


let paragraph = document.createElement("p");
function createBtns() {
  const headings = document.querySelector("div");

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  let randomColor = `rgb(${r}, ${g}, ${b})`;

  headings.style.backgroundColor = randomColor;
  headings.style.height = "300px";
  headings.style.width = "400px";

  paragraph.innerText = randomColor;
  headings.appendChild(paragraph);
}
