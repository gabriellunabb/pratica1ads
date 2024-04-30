const { conectarDb } = require("./database");

class Contato {
    constructor(nome, email, telefone) {
        this.id = null;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

async function inserir(contato) {
    const db = await conectarDb();
    const collection = db.collection("contatos");
    const result = await collection.insertOne({
        nome: contato.nome,
        email: contato.email,
        telefone: contato.telefone,
    });
    contato.id = result.insertedId;
}

async function alterar(contato) {
    const db = await conectarDb();
    const collection = db.collection("contatos");
    await collection.updateOne(
        { _id: contato.id },
        {
            $set: {
                nome: contato.nome,
                email: contato.email,
                telefone: contato.telefone,
            },
        }
    );
}

async function deletar(contato) {
    const db = await conectarDb();
    const collection = db.collection("contatos");
    await collection.deleteOne({ nome: contato.nome });
}

async function buscar(contato) {
    const db = await conectarDb();
    const collection = db.collection("contatos");
    const result = await collection.findOne({ nome: contato.nome });
    if (result) {
        contato.id = result._id;
        contato.nome = result.nome;
        contato.email = result.email;
        contato.telefone = result.telefone;
    }
    return contato;
}

module.exports = { Contato, inserir, alterar, deletar, buscar };
