const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("End-Point: Get rickandmorty/onsearch/:id", () => {
  it("Responde con status 200", async () => {
    const response = await session(app).get("/rickandmorty/onsearch/4");
    expect(response.statusCode).toBe(200);
  }, 10000);
  xit(`Responde un objeto con las propiedades: "id", "name", "species", "gender" e "image"`, async () => {
    const response = await session(app).get("/rickandmorty/onsearch/4");
    expect(Object.keys(response.body)).toEqual([
      "id",
      "name",
      "species",
      "gender",
      "image",
    ]);
  });
  xit("Responde con status 500", async () => {
    const response = await agent.get("/rickandmorty/onsearch/4");
    expect(response.statusCode).toBe(200);
  });
});
