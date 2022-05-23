const request = require("supertest");
let server;

describe("/api/index", () => {
  beforeEach(() => {
    server = require("../index");
  });
  afterEach(async () => {
    await server.close();
  });

  describe("GET /", () => {
    it("it should return all 'Travis CI' string", async () => {
      const res = await request(server).get("/api/index");

      expect(res.status).toBe(200);
      expect(res.body.message).toBe("Travis CI");
    });
  });
});
