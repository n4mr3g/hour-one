const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/index");
const SECRET_KEY = process.env.SECRET_KEY || "thisIsNotSafe";
const { randomNumber } = require("../utils/utils");
console.log(randomNumber());

exports.create = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user)
    return res.status(409).send({ error: "409", data: "User already exits" });

  try {
    if (password === "") throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      image: `https://i.pravatar.cc/200?u=${randomNumber()}@pravatar.com`,
    });

    const { id } = await newUser.save();

    const accessToken = jwt.sign({ id }, SECRET_KEY);
    res.status(201).send({ accessToken });
  } catch (error) {
    res.status(400).send({ error, data: "Could not create user" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const validatePass = await bcrypt.compare(password, user.password);
    if (!validatePass) throw new Error();
    const accessToken = jwt.sign({ id: user.id }, SECRET_KEY);
    res.status(200);
    res.send({ accessToken });
  } catch (error) {
    res.status(401);
    res.send({ error, data: "User not found" });
  }
};

exports.profile = async (req, res) => {
  try {
    const { id, name, email, image, offers, favourite } = req.user;
    const user = { id, name, email, image, offers, favourite };
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error, data: "Resource not found" });
  }
};

// exports.signup = async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(201);
//     res.send({
//       error: null,
//       data: {
//         user: newUser,
//       },
//     });
//   } catch (error) {
//     res.status(500);
//     res.send({ data: null, error: error });
//   }
// };

// exports.getAllUsers = (req, res) => {
//   res.status(500);
//   res.send({
//     data: null,
//     error: "This route is not yet created",
//   });
// };
