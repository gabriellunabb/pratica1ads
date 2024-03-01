class Contato {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }

    toString() {
        return `Nome: ${this.nome} - Email: ${this.email} - Telefone: ${this.telefone}`;
    }
}

module.exports = Contato;
