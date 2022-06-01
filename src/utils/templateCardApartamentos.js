import { apartamentosService } from "../service/apartamento-service.js"


export function templateCardApartamento(apartamento) {
    return `
    <div class="card mb-3">
        <img src="${apartamento.url_foto}" class="card-img-top figure-img img-fluid rounded" width=400px alt="${apartamento.nome}">
        <div class="card-body">
            <h5 class="card-title">${apartamento.nome}</h5>
            <p class="card-text">Endereço Completo: ${apartamento.logradouro} - ${apartamento.numero} - ${apartamento.complemento} - ${apartamento.bairro} - ${apartamento.cidade} - ${apartamento.estado}</p>
            <button class="btn btn-warning" onclick="editarApartamento(${apartamento.id})">Editar</button>
            <button class="btn btn-danger" onclick="excluirApartamento(${apartamento.id})">Excluir</button>
        </div>
    </div>`
}

window.editarApartamento = (id) => {
    window.location.href = `editar.html?id=${id}`
}

window.excluirApartamento = (id) => {
    if (window.confirm("Deseja mesmo excluir esse apartamento?")) {
        apartamentosService.excluiApartamento(id)
    }
}

//<div class="card" style="width: 18rem;">
//        <img src="${apartamento.url_foto}" class="card-img-top" alt="${apartamento.nome}">
 //</img>       <div class="card-body">
//            <h5 class="card-title">${apartamento.nome}</h5>
//            <p class="card-text">Endereço Completo: ${apartamento.logradouro} - ${apartamento.numero} - ${apartamento.complemento} - ${apartamento.bairro} - ${apartamento.cidade} - ${apartamento.estado}</p>
//            <button class="btn btn-warning" onclick="editarApartamento(${apartamento.id})">Editar</button>
//            <button class="btn btn-danger" onclick="excluirApartamento(${apartamento.id})">Excluir</button>
//        </div>
//    </div>`