import { validar } from "./validacion.js";

const barra = document.querySelector(".barra__lista");
const barraItems = barra.childNodes;

const inputs = document.querySelectorAll(".contacto__input");

document.querySelector(".toggle").onclick = () => {barra.classList.toggle('active')};
barraItems.forEach(barraAux => barraAux.onclick = () => {
    barra.classList.remove('active')
});

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        validar(input.target);
    });
})