export function Apartamento(formulario) {
    this.nome = formulario.nome.value;
    this.url_foto = formulario.url_foto.value;
    this.cep = formulario.cep.value;
    this.logradouro = formulario.logradouro.value;
    this.numero = formulario.numero.value;
    this.complemento = formulario.complemento.value;
    this.bairro = formulario.bairro.value;
    this.cidade = formulario.cidade.value;
    this.estado = formulario.estado.value;
}