import request from "supertest";

import app from "../../index";

import * as mocks from "../mocks";
import supertest from "supertest";

let server: any;
beforeAll(async () => {
  server = request(app);
  const res = await server
});

describe("Login routes: POST /login", () => {
  it("should return 200 & valid response", async () => {
    const { body } = await server
    .post("/login")
    .send(mocks.validUserCredentials)
    .expect("Content-Type", /json/)
    .expect()
    .expect(200);
  });
}
