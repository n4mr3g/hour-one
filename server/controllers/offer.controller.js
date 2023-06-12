const { Offer } = require("../models/index");
const Crypto = require("crypto");

const { randomNumber } = require("../utils/utils.js");

exports.postOffer = async (req, res) => {
  try {
    console.log("Saving offer to database...");
    const offer = req.body;
    const newOffer = await new Offer({
      ...offer,
      image: `https://i.pravatar.cc/${randomNumber()}u=1@pravatar.com`,
      authorId: Crypto.randomUUID(),
    });
    newOffer.save();
    res.status(200);
    res.send({ data: newOffer, error: null });
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send({
      data: "null",
      error: error.message,
    });
  }
};

exports.getOffer = async (req, res) => {
  try {
    console.log("getting all offers from db");
    const allOffers = await Offer.find();
    console.log(allOffers);
    res.status("200");
    res.send({
      data: allOffers,
      error: null,
    });
  } catch (error) {
    res.status(500);
    console.log(error);
    res.send({
      data: "null",
      error: error.message,
    });
  }
};
