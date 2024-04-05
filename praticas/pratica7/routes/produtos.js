var express = require("express");

var controllerProdutos = require("../controllers/controller_produtos");

var router = express.Router();

router.get("/", controllerProdutos.listarTodos);
router.get("/:id", controllerProdutos.buscarPorId, controllerProdutos.exibir);
router.post("/", controllerProdutos.validarEntrada, controllerProdutos.criar);
router.put(
    "/:id",
    controllerProdutos.buscarPorId,
    controllerProdutos.validarEntrada,
    controllerProdutos.editar
);
router.delete(
    "/:id",
    controllerProdutos.buscarPorId,
    controllerProdutos.apagar
);

module.exports = router;
