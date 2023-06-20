// require("dotenv").config();
import request from "supertest";
import mongoose from "mongoose";
import { app, server } from "../../index";
import { UserModel } from "../../models";

import * as mocks from "../mocks";
import supertest from "supertest";

let token: string;
let connection: supertest.SuperTest<supertest.Test>;

beforeAll(async () => {
  connection = await request(app);
  await connection.post("/signup").send(mocks.userCreationData.valid);
  const res = await connection.post("/login").send(mocks.validLoginCredentials);
  token = res.body.accessToken;
  console.log(token, "token=========");
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await server.close();
});

describe("Offer routes: POST /offer", () => {
  it.only("should return 200 & valid content-type when POSTing /offer", async () => {
    console.log(token, "the tokkeennnenen");
    await connection
      .post("/offer")
      .set({ Authorization: `Bearer ${token}` })
      .send(mocks.mockOffer)
      .expect(200);
  });

  it("should return the sent object as a response", async () => {
    const { body } = await connection.post("/offer").send(mocks.mockOffer);
    expect(body).toEqual(mocks.mockOffer);
    expect(body.author).toEqual(mocks.mockOffer.author);
    expect(body.message).toEqual(mocks.mockOffer.message);
    expect(body.comment).toEqual(mocks.mockOffer.comment);
    expect(body.type).toEqual(mocks.mockOffer.type);
    expect(body.title).toEqual(mocks.mockOffer.title);
  });
});

describe("Offer routes: GET /offer", () => {
  it("should return 200 & valid content-type when GETting /offer", async () => {
    await app.get("/offer").expect("Content-Type", /json/).expect(200);
  });
});
