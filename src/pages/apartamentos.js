import { apartamentosService } from "../service/apartamento-service.js";
import { templateCardApartamento } from "../utils/templateCardApartamentos.js";


const apartamentos_container = document.getElementById("apartamentos");

apartamentosService.buscaApartamentos().then(apartamentos => {
    apartamentos.forEach(apartamento => apartamentos_container.innerHTML += templateCardApartamento(apartamento));
});