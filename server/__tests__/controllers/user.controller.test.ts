import request from "supertest";
import mongoose from "mongoose";
import { app, server } from "../../index";

import * as mocks from "../mocks";
import supertest from "supertest";

// let token;

let connection: supertest.SuperTest<supertest.Test>;
beforeAll(async () => {
  connection = await request(app);
});

afterAll(async () => {
  // await app.close()
  // Close the server instance after each test
  await mongoose.connection.close();
  await server.close();
});

describe("Login routes: POST /login", () => {
  it("should return 200 & valid response type", async () => {
    await connection
      .post("/login")
      .send(mocks.validLoginCredentials)
      .expect(200)
      .expect("Content-Type", /text/);
  });

  it("should return 401 with invalid login credentials", async () => {
    await connection
      .post("/login")
      .send(mocks.invalidLoginCredentials)
      .expect(401);
  });
});

describe("Signup routes: POST /signup", () => {
  it("should return 201 when creating a new user", async () => {
    await connection
      .post("/signup")
      .send(mocks.userCreationData.valid)
      .expect(201)
      .expect("Content-Type", /text/);
  });

  it("should return 401 when trying to sign up with short password", async () => {
    await connection
      .post("/signup")
      .send(mocks.userCreationData.shortPassword)
      .expect(401);
  });
});
