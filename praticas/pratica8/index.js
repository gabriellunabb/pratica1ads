const controller = require("./controller");
const readline = require("readline-sync");

function menu() {
    console.log(
        "1. Adicionar contato; 2 - Buscar contato; 3 - Atualizar contato; 4 - Remover contato; 5 - Sair."
    );
}

async function escolherOpcao(opcao) {
    switch (opcao) {
        case 1:
            var nome = readline.question("Entre com o nome: ");
            var email = readline.question("Entre com o email: ");
            var telefone = readline.question("Entre com o telefone: ");
            await controller.adicionarContato(nome, email, telefone);
            break;
        case 2:
            var nome = readline.question("Entre com o nome: ");
            var contato = await controller.buscarContato(nome);
            if (contato.email) {
                console.log(contato.id, contato.nome, contato.email, contato.telefone);
            } else console.log("Contato nao encontrado!")
            break;
        case 3:
            var nome = readline.question("Entre com o nome: ");
            var email = readline.question("Entre com o novo email: ");
            var telefone = readline.question("Entre com o novo telefone: ");
            await controller.atualizarContato(nome, email, telefone);
            break;
        case 4:
            var nome = readline.question("Entre com o nome: ");
            await controller.removerContato(nome);
            break;
        case 5:
            process.exit();
    }
}

async function main() {
    while (true) {
        menu();
        await escolherOpcao(
            Number.parseInt(readline.question("Entre com a opcao: "))
        );
    }
}

main();
