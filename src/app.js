import { apartamentosService } from "./service/apartamento-service.js";
import { Apartamento } from "./utils/Apartamento.js";

const formulario_cadastro = document.forms.namedItem("cadastro")

formulario_cadastro.addEventListener("submit", (e) => {
    e.preventDefault();

    const apartamento = new Apartamento(formulario_cadastro);

    apartamentosService.criaApartamento(apartamento);
})