import request from "supertest";
import mongoose from "mongoose";
import { app, server } from "../../index";
import * as mocks from "../mocks";
import supertest from "supertest";

let connection: supertest.SuperTest<supertest.Test>;
beforeAll(async () => {
  connection = request(app);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  server.close();
});

describe("Signup routes: POST /signup", () => {
  it("should return 201 when creating a new user", async () => {
    await connection
    .post("/signup")
    .send(mocks.userCreationData.valid)
    .expect(201)
  });

  it("should return 409 when creating an already existing user", async () => {
    await connection
    .post("/signup")
    .send(mocks.userCreationData.valid)
    .expect(409)
  });

  it("should return 401 when trying to sign up with short password", async () => {
    await connection
    .post("/signup")
    .send(mocks.userCreationData.shortPassword)
    .expect(401);
  });

  it("should return 401 when trying to sign up with invalid email", async () => {
    await connection
    .post("/signup")
    .send(mocks.userCreationData.invalidEmail)
    .expect(401);
  });
});

describe("Login routes: POST /login", () => {
  it("should return 200 when logging in", async () => {
    await connection
      .post("/login")
      .send(mocks.validLoginCredentials)
      .expect(200)
  });

  it("should return 401 with invalid login credentials", async () => {
    await connection
      .post("/login")
      .send(mocks.invalidLoginCredentials)
      .expect(401);
  });
});
