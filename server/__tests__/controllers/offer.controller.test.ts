import request from "supertest";
import mongoose from "mongoose";

import { app, server } from "../../index";

import * as mocks from "../mocks";
import supertest from "supertest";

// it('Should add new rating to db and return the entry', async () => {
//   const { body } = await request(server)
//     .post('/api/ratings')
//     .set('Authorization', 'Bearer ' + testToken)
//     .expect('Content-Type', /json/)
//     .send(mockAddRating)
//     .expect(200);
//   expect(body.data.rating.sellerId).toEqual(process.env.SECRET_UID);
//   expect(body.data.rating.buyerId).toEqual(mocks.Users[1].id);
//   expect(body.data.rating.rating).toEqual(1);
//   expect(typeof body.data.rating.id).toEqual('string');
// });

// .env file, to run the dev server in a different port
// For later, to run the server before testing

let token;
let connection: supertest.SuperTest<supertest.Test>;
beforeAll(async () => {
  connection = await request(app);
  const res = await connection.post("/login").send(mocks.validUserCredentials);
  token = res.body.token;
});

afterAll(async () => {
  // await app.close()
  // Close the server instance after each test
  await mongoose.connection.close();
  await server.close();
});

describe("Offer routes: GET /offer", () => {
  it("should return 200 & valid content-type when calling /offer", async () => {
    await app.get("/offer").expect("Content-Type", /json/).expect(200);
  });
});

describe("Offer routes: POST /offer", () => {
  it("should return 200 & return the sent object as a response", async () => {
    const { body } = await connection
      .post("/offer")
      .send(mocks.mockOffer)
      .expect("Content-Type", /json/)
      .expect(200)
    expect(body[0].author).toEqual(mocks.mockOffer.author);
    expect(body[0].message).toEqual(mocks.mockOffer.message);
    expect(body[0].comment).toEqual(mocks.mockOffer.comment);
    expect(body[0].type).toEqual(mocks.mockOffer.type);
    expect(body[0].title).toEqual(mocks.mockOffer.title);
  });

  // it("should ");
});
