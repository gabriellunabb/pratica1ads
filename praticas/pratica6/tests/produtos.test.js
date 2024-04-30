const supertest = require("supertest");

const app = require("../app");

const req = supertest(app);

describe("API Produtos", () => {
    it("POST deve retornar 201", async () => {
        var res = await req.post("/produtos").send({ nome: "uva", preco: 20.0 });
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("id", 1);
        expect(res.body).toHaveProperty("nome", "uva");
        expect(res.body).toHaveProperty("preco", 20.0);
    });

    it("POST deve retornar 422", async () => {
        var res = await req.post("/produtos").send();
        expect(res.status).toBe(422);
        expect(res.body).toHaveProperty("msg", "Nome e preco sao obrigatorios");
    });

    it("GET deve retornar 200 e Array", async () => {
        var res = await req.get("/produtos").send();
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it("GET deve retornar 200", async () => {
        var res = await req.get("/produtos/1").send();
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("id", 1);
        expect(res.body).toHaveProperty("nome", "uva");
        expect(res.body).toHaveProperty("preco", 20.0);
    });

    it("GET deve retornar 404", async () => {
        var res = await req.get("/produtos/999").send();
        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty("msg", "Produto n encontrado");
    });

    it("PUT deve retornar 200", async () => {
        var res = await req
            .put("/produtos/1")
            .send({ nome: "uva verde", preco: 18.0 });
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("id", 1);
        expect(res.body).toHaveProperty("nome", "uva verde");
        expect(res.body).toHaveProperty("preco", 18.0);
    });

    it("PUT deve retornar 404", async () => {
        var res = await req
            .put("/produtos/999")
            .send({ nome: "uva verde", preco: 18.0 });
        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty("msg", "Produto n encontrado");
    });

    it("DELETE deve retornar 200", async () => {
        var res = await req.delete("/produtos/1");
        expect(res.status).toBe(204);
        expect(res.body).toEqual({});
    });

    it("DELETE deve retornar 404", async () => {
        var res = await req.delete("/produtos/999");
        expect(res.status).toBe(404);
        expect(res.body).toHaveProperty("msg", "Produto n encontrado");
    });
});
