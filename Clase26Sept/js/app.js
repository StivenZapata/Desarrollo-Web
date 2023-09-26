import { personas } from "./persona.js";
import { pagina } from "./dom.js";

const sectionMain = document.createElement("div");
const parrafoPrincipal = document.createElement("p");
parrafoPrincipal.innerHTML = personas[0].primerNombre + " " + personas[0].apellido;
sectionMain.classList.add("main");

document.body.appendChild(parrafoPrincipal);


const seccion = `
<section  class = "main">
  <p>Dentro De Seccion</p>
</section>
`;


sectionMain.innerHTML = seccion;
document.body.appendChild(sectionMain);


