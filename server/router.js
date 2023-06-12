const express = require("express");
const router = express.Router();

const offerController = require("./controllers/offer.controller.js");
const userController = require("./controllers/user.controller.js");
const authMiddleware = require("./middlewares/auth.js");

router.get("/offer", offerController.getOffer);
router.post("/offer", offerController.postOffer);

router.post("/signup", userController.create);
router.post("/login", userController.login);
router.get("/me", authMiddleware, userController.profile);
// router.get("/user", userController.getAllUsers); //TODO this in implemented
// router.get("/user/:id", userController.getOneUser);
module.exports = { router };
