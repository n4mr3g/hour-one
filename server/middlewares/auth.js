const jwt = require("jsonwebtoken");
const User = require("../models/index");
const SECRET_KEY = process.env.SECRET_KEY || "thisIsNotSafe";

const authMiddleware = async (req, res) => {
  const authHeaders = req.headers["authorization"];
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(" ")[1];
  console.log(token);
};

module.exports = authMiddleware;
