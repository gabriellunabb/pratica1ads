const Contato = require("./model");

var contatos = [];

function adicionarContato(nome, email, telefone) {
    const novoContato = new Contato(nome, email, telefone);
    contatos.push(novoContato);
}

function listarContatos() {
    return contatos;
}

function buscarContato(nome) {
    const busca = contatos.find((c) => c.nome === nome);
    if (busca) console.log(busca.toString());
    else console.log("Contato nao encontrado!");
}

function atualizarContato(nome, novoEmail, novoTelefone) {
    const busca = contatos.findIndex((c) => c.nome === nome);
    if (busca >= 0) {
        contatos[busca].email = novoEmail;
        contatos[busca].telefone = novoTelefone;
    } else console.log("Contato nao encontrado!");
}

function removerContato(nome) {
    const busca = contatos.findIndex((c) => c.nome === nome);
    if (busca >= 0) {
        contatos.splice(busca, 1);
    } else console.log("Contato nao encontrado!");
}

module.exports = {
    adicionarContato,
    atualizarContato,
    buscarContato,
    listarContatos,
    removerContato,
};
