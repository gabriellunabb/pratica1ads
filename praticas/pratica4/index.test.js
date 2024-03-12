const supertest = require("supertest");

const app = require("./index");

const req = supertest(app);

test("Deve retornar 200 com GET", async () => {
    const res = await req.get("/");
    expect(res.status).toBe(200);
});

test("Deve retornar 201 com POST", async () => {
    const res = await req.post("/");
    expect(res.status).toBe(201);
});

test("Deve retornar 200 com PUT", async () => {
    const res = await req.put("/");
    expect(res.status).toBe(200);
});

test("Deve retornar 200 com DELETE", async () => {
    const res = await req.delete("/");
    expect(res.status).toBe(204);
});