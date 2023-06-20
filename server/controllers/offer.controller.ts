const { OfferModel } = require("../models/index");
import { Request, Response } from "express";
const Crypto = require("crypto");
const randomNumber = require("../utils/utils.ts");

export async function postOffer(req: Request, res: Response) {
  try {
    console.log("Saving offer to database...");

    // const authHeader: string = req.headers['Authorization']?.toString() || '';
    // let [bearer, token]: string[] = [];
    // if (authHeader !== '') {
    // [bearer, token] = authHeader.split(' ');
    // }

    // if (token) {
    const offer = req.body;
    const newOffer = new OfferModel({
      ...offer,
      image: `https://i.pravatar.cc/200?u=${100}@pravatar.com`,
      authorId: Crypto.randomUUID(),
    });
    const savedOffer = await newOffer.save();
    res.setHeader("Content-Type", "application/json");
    res.status(200);
    res.send(savedOffer);
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send({
      data: "null",
      error: (error as Error).message,
    });
  }
}
export async function getOffers(req: Request, res: Response) {
  try {
    console.log("getting all offers from db");
    const allOffers = await OfferModel.find({});
    res.status(200);
    res.send(allOffers);
  } catch (error) {
    res.status(500);
    console.error(error);
    res.send({
      data: "null",
      error: (error as Error).message,
    });
  }
}
