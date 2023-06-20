import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/index";
import randomNumber from "../utils/utils";
import { User } from "../types/User";

const SECRET_KEY: string = process.env.SECRET_KEY || "thisIsNotSafe";

export async function create(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email: email });
    if (user) {
      return res.status(409).send({ error: "409", data: "User already exits" });
    }

    if (password === "") throw new Error();

    const hash = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      image: `https://i.pravatar.cc/200?u=${randomNumber()}@pravatar.com`,
    });
    const { id } = await newUser.save();
    const accessToken = jwt.sign({ id }, SECRET_KEY);
    res.status(201)
    res.send(JSON.stringify(accessToken));
  } catch (error) {
    res.status(400).send({ error, data: "Could not create user" });
  }
}

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const validatePass = await bcrypt.compare(password, user?.password);
    if (!validatePass) throw new Error();
    const accessToken = jwt.sign({ id: user.id }, SECRET_KEY);
    res.status(200);
    const userDataForClient =  composeUserDataForClient(user, accessToken);
    res.send(userDataForClient);
  } catch (error) {
    res.status(401);
    res.send({ error, data: "User not found" });
  }
}

function composeUserDataForClient(user: User, accessToken: string) {
  const { name, email, profilePicture, offers, favorites } = user;
  const newUser = { name, email, profilePicture, offers, favorites };
  const responseObject = {user: newUser, accessToken: accessToken}
  return responseObject;
}


export async function profile(req: Request, res: Response) {
  try {
    const user = req.user;
    if (!user) {
      throw new Error("User not found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ error, data: "Resource not found" });
  }
}
