const express = require("express");
const router = express.Router();

const controller = require("./controllers/offer.controller");

router.get("/offer", controller.getOffer);
router.post("/offer", controller.postOffer);

module.exports = { router };
