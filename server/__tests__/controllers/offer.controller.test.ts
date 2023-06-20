import request from "supertest";
import mongoose from "mongoose";

import { app, server } from "../../index";

import * as mocks from "../mocks";
import supertest from "supertest";

let token;
let connection: supertest.SuperTest<supertest.Test>;

beforeAll(async () => {
  connection = await request(app);
  const res = await connection.post("/login").send(mocks.validLoginCredentials);
  token = res.body.token;
});

afterAll(async () => {
  await mongoose.connection.close();
  await server.close();
});

describe.only("Offer routes: GET /offer", () => {
  it("should return 200 & valid content-type when GETting /offer", async () => {
    await app.get("/offer")
    .expect("Content-Type", /json/)
    .expect(200);
  });
});

describe("Offer routes: POST /offer", () => {
  it("should return 200 & valid content-type when POSTing /offer", async () => {
    await connection
      .post("/offer")
      .send(mocks.mockOffer)
      .expect(200)
      .expect("Content-Type", /json/);
  });

  it("should return the sent object as a response", async () => {
    const { body } = await connection.post("/offer").send(mocks.mockOffer);
    console.log(body);
    expect(body).toEqual(mocks.mockOffer);
    expect(body.author).toEqual(mocks.mockOffer.author);
    expect(body.message).toEqual(mocks.mockOffer.message);
    expect(body.comment).toEqual(mocks.mockOffer.comment);
    expect(body.type).toEqual(mocks.mockOffer.type);
    expect(body.title).toEqual(mocks.mockOffer.title);
  });
});

// describe("Offer routes: POST /offer", () => {
//   it("should return 200 & return the sent object as a response", async () => {
//     const { body } = await connection
//       .post("/offer")
//       .send(mocks.mockOffer)
//       .expect("Content-Type", /json/)
//       .expect(200)
//     expect(body[0].author).toEqual(mocks.mockOffer.author);
//     expect(body[0].message).toEqual(mocks.mockOffer.message);
//     expect(body[0].comment).toEqual(mocks.mockOffer.comment);
//     expect(body[0].type).toEqual(mocks.mockOffer.type);
//     expect(body[0].title).toEqual(mocks.mockOffer.title);
//   });

// it("should ");
