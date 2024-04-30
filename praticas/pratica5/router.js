const express = require("express");

const router = express.Router();

const produtos = [{ id: 1, nome: "uva", preco: 20.0 }];

router.use(express.json());

router.get("/produtos", (req, res) => {
    res.send(produtos);
});

router.get("/produtos/:id", (req, res) => {
    var produto = buscarProduto(req, res);
    res.send(produto);
});

router.post("/produtos", (req, res) => {
    var produto = parseProduto(req,res);

    produto.id = produtos.length + 1;
    produtos.push(produto);
    res.status(201).send(produto);
});

router.put("/produtos/:id", (req, res) => {
    var produto = buscarProduto(req, res);
    var novoProduto = parseProduto(req, res);

    produto.nome = novoProduto.nome;
    produto.preco = novoProduto.preco;
    res.status(200).send(produto);
});

router.delete("/produtos/:id", (req, res) => {
    var produto = buscarProduto(req, res);

    produtos.splice(produtos.indexOf(produto), 1);
    res.status(204).send();
});

function buscarProduto(req, res) {
    var produto = produtos.find((p) => p.id == req.params.id);
    if (!produto) {
        res.status(404).send({
            msg: "Produto não encontrado",
        });
    }
    return produto;
}

function parseProduto(req, res) {
    var novoProduto = { nome: req.body.nome, preco: req.body.preco };
    if (!novoProduto.nome || !novoProduto.preco) {
        res.status(422).send({
            msg: "Nome e/ou preço do produto não informados",
        });
    }
    return novoProduto;
}

module.exports = router;
