const jwt = require("jsonwebtoken");
const { User } = require("../models/index");
const SECRET_KEY = process.env.SECRET_KEY || "thisIsNotSafe";

const authMiddleware = async (req, res, next) => {
  const authHeaders = req.headers["authorization"];
  if (!authHeaders) return res.sendStatus(403);
  const token = authHeaders.split(" ")[1];

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    console.log(_id);
    const user = await User.findOne({ _id: id });
    console.log(user);
    if (!user) return res.sendStatus(401);
    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
};

module.exports = authMiddleware;
