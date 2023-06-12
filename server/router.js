const express = require("express");
const router = express.Router();

const offerController = require("./controllers/offer.controller");
const userController = require("./controllers/user.controller");

router.get("/offer", offerController.getOffer);
router.post("/offer", offerController.postOffer);

router.get("/user", userController.getAllUsers); //TODO this in implemented
router.post("/user", userController.createUser);
router.get("/user/:id", userController.getOneUser);

module.exports = { router };
