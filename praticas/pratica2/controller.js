const Contato = require("./model");
const readline = require("readline-sync");

var contatos = [];

function adicionarContato() {
    const nome = readline.question("nome: ");
    const email = readline.question("email: ");
    const telefone = readline.question("telefone: ");
    const novoContato = new Contato(nome, email, telefone);
    contatos.push(novoContato);
}

function listarContatos() {
    contatos.forEach((c) => console.log(c.toString()));
}

function buscarContato() {
    const nome = readline.question("nome: ");
    const busca = contatos.find((c) => c.nome === nome);
    if (busca) console.log(busca.toString());
    else console.log("n achou");
}

function atualizarContato() {
    const nome = readline.question("nome: ");
    const busca = contatos.findIndex((c) => c.nome === nome);
    if (busca >= 0) {
        const novoEmail = readline.question("novo email: ");
        const novoTelefone = readline.question("novo telefone: ");
        contatos[busca].email = novoEmail;
        contatos[busca].telefone = novoTelefone;
    } else console.log("n achou");
}

function removerContato() {
    const nome = readline.question("nome: ");
    const busca = contatos.findIndex((c) => c.nome === nome);
    if (busca >= 0) {
        contatos.splice(busca, 1);
    } else console.log("n achou");
}

module.exports = {
    adicionarContato,
    atualizarContato,
    buscarContato,
    listarContatos,
    removerContato,
};
