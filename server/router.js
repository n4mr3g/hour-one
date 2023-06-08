const express = require("express");
const router = express.Router();

const mocks = require("./mocks");

router.get("/explore", (req, res) => {
  res.send({ data: mocks, error: null });
});

module.exports = { router };
