const modelo = require("./modelo");

async function adicionarContato(nome, email, telefone) {
    var contato = new modelo.Contato(nome, email, telefone);
    await modelo.inserir(contato);
}

async function buscarContato(nome) {
    var contato = new modelo.Contato(nome);
    return await modelo.buscar(contato);
}

async function atualizarContato(nome, email, telefone) {
    var contato = await buscarContato(nome);
    if (contato.email) {
        contato.email = email;
        contato.telefone = telefone;
        modelo.alterar(contato);
    } else console.log("Contato nao encontrado!");
}

async function removerContato(nome) {
    var contato = await buscarContato(nome);
    if (contato.email) {
        await modelo.deletar(contato);
    } else console.log("Contato nao encontrado!");
}

module.exports = {
    adicionarContato,
    buscarContato,
    atualizarContato,
    removerContato,
};
