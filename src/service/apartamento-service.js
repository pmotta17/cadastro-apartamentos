async function criaApartamento(apartamento) {
    const url = "http://localhost:3000/apartamentos"

    try {
        return await fetch(url, {
            method: "POST",
            body: JSON.stringify(apartamento),
            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
        })
    } catch(erro) {
        alert(`Verifique se o servidor está online! erro: ${erro.message}`)
    }
};

async function buscaApartamentos() {
    const url = "http://localhost:3000/apartamentos"

    try {
        const apartamentos = await fetch(url);
        return await apartamentos.json();

    } catch(erro) {
        alert(`Verifique se o servidor está online! erro: ${erro.message}`)
    }
}

async function excluiApartamento(id) {
    const url = `http://localhost:3000/apartamentos/${id}`

    try {
        return await fetch(url, {
            method: "DELETE"
        });

    } catch(erro) {
        alert(`Verifique se o servidor está online! erro: ${erro.message}`)
    }
}

async function editaApartamento(id, aprtamentoAlterado) {
    const url = `http://localhost:3000/apartamentos/${id}`

    try {
        return await fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(aprtamentoAlterado)
        })
    } catch(erro) {
        alert(`Verifique se o servidor está online! erro: ${erro.message}`)
    }
};

async function buscaApartamento(id) {
    const url = `http://localhost:3000/apartamentos/${id}`

    try {
        const apartamentos = await fetch(url);
        return await apartamentos.json();

    } catch(erro) {
        alert(`Verifique se o servidor está online! erro: ${erro.message}`)
    }
}

export const apartamentosService = {
    criaApartamento,
    buscaApartamentos,
    excluiApartamento,
    editaApartamento,
    buscaApartamento,
}