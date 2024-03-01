const readline = require("readline-sync");
const controller = require("./controller");

function menu() {
    console.log("1. Adicionar Contato");
    console.log("2. Listar Contatos");
    console.log("3. Buscar Contato");
    console.log("4. Atualizar Contato");
    console.log("5. Remover Contato");
    console.log("6. Sair");
}

function escolherOpcao() {
    const opcao = readline.question("Entre com a opcao: ");
    switch (opcao) {
        case "1":
            controller.adicionarContato();
            break;
        case "2":
            controller.listarContatos();
            break;
        case "3":
            controller.buscarContato();
            break;
        case "4":
            controller.atualizarContato();
            break;
        case "5":
            controller.removerContato();
            break;
        case "6":
            process.exit(0);
        default:
            console.log("tente novamente ");
            break;
    }
}

function main() {
    while (true) {
        menu();
        escolherOpcao();
    }
}

main();
