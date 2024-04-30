var produtos = [];

function listarTodos(req, res) {
    res.json(produtos);
}

function buscarPorId(req, res, next) {
    req.produto = produtos.find((p) => p.id == req.params.id);
    if (req.produto) {
        next();
    } else {
        res.status(404).json({ msg: "Produto n encontrado" });
    }
}

function validarEntrada(req, res, next) {
    var { nome, preco } = req.body;
    if (nome && preco) {
        next();
    } else {
        res.status(422).json({ msg: "Nome e preco sao obrigatorios" });
    }
}

function exibir(req, res) {
    res.send(req.produto);
}

function criar(req, res) {
    var { nome, preco } = req.body;
    var produto = { id: produtos.length + 1, nome: nome, preco: preco };
    produtos.push(produto);
    res.status(201).send(produto);
}

function editar(req, res) {
    var { produto } = req;
    var { nome, preco } = req.body;
    produto.nome = nome;
    produto.preco = preco;
    res.send(produto);
}

function apagar(req, res) {
    const { produto } = req;

    produtos.splice(produtos.indexOf(produto), 1);
    res.status(204).end();
}

module.exports = {
    buscarPorId,
    listarTodos,
    validarEntrada,
    exibir,
    criar,
    editar,
    apagar,
};
