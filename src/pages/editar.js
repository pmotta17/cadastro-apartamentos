import { apartamentosService } from "../service/apartamento-service.js";
import { Apartamento } from "../utils/Apartamento.js";

const formulario = document.forms.namedItem("editar")
const url = new URL(window.location);
const id = url.searchParams.get("id");

function preencheCamposFormulario(apartamento) {
    formulario.nome.value = apartamento.nome;
    formulario.url_foto.value = apartamento.url_foto;
    formulario.cep.value = apartamento.cep;
    formulario.logradouro.value = apartamento.logradouro;
    formulario.numero.value = apartamento.numero;
    formulario.complemento.value = apartamento.complemento;
    formulario.bairro.value = apartamento.bairro;
    formulario.cidade.value = apartamento.cidade;
    formulario.estado.value = apartamento.estado;
}

window.onload = () => {
    apartamentosService.buscaApartamento(id)
    .then(apartamento => {
        preencheCamposFormulario(apartamento)
    })
}

window.voltar = () => {
    window.location.href = "apartamentos.html"
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const apartamentoAlterado = new Apartamento(formulario);

    apartamentosService.editaApartamento(id, apartamentoAlterado)
    .finally(() => window.location.href = "apartamentos.html")
})