const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("GET rickandmorty/{id}", () => {
  it("Responde con status: 200", async () => {
    const response = await session(app).get("/rickandmorty/onsearch/4");
    expect(response.statusCode).toBe(200);
  }, 100000);
  it(`Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"`, async () => {
    const response = await agent.get("/rickandmorty/onsearch/4");
    expect(Object.keys(response.body)).toEqual([
      "id",
      "name",
      "species",
      "gender",
      "image",
    ]);
  }, 100000);
  it("Si hay un error responde con status: 500", async () => {
    await agent.get("/rickandmorty/onsearch/IDqueNoExiste").expect(500);
  }, 100000);
});
