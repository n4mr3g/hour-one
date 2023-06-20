require("dotenv").config();
import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/index");
const SECRET_KEY = process.env.SECRET_KEY || "thisIsNotSafe";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token: string | undefined = req.headers.authorization?.split(" ")[1];
    const jwtVer = jwt.verify(token, SECRET_KEY);
    const user = await UserModel.findOne({ _id: jwtVer.id }).select({
      password: 0,
    });
    if (!user) return res.sendStatus(401);
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.sendStatus(401);
  }
};

export default authMiddleware;
