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
        case "1": {
            const nome = readline.question("Nome: ");
            const email = readline.question("Email: ");
            const telefone = readline.question("Telefone: ");
            controller.adicionarContato(nome, email, telefone);
            break;
        }
        case "2":
            controller
                .listarContatos()
                .forEach((c) => console.log(c.toString()));
            break;
        case "3": {
            const nome = readline.question("Nome: ");
            controller.buscarContato(nome);
            break;
        }
        case "4": {
            const nome = readline.question("Nome: ");
            const novoEmail = readline.question("Novo email: ");
            const novoTelefone = readline.question("Novo telefone: ");
            controller.atualizarContato(nome, novoEmail, novoTelefone);
            break;
        }
        case "5": {
            const nome = readline.question("Nome: ");
            controller.removerContato(nome);
            break;
        }
        case "6":
            process.exit(0);
        default:
            console.log("Tente novamente!");
            break;
    }
}

function main() {
    while (true) {
        menu();
        escolherOpcao();
        readline.question("Pressione ENTER para continuar...");
    }
}

main();
