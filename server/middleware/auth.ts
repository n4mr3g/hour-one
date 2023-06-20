require("dotenv").config();
import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/index");
// const SECRET_KEY = process.env.SECRET_KEY || "thisIsNotSafe";
const SECRET_KEY = "thisIsNotSafe";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token: string | undefined = req.headers.authorization?.split(" ")[1];
    console.log("authHeaders:  ", req.headers);
    console.log(req.headers.authorization, "hehehjrlekjr");

    // if (!authHeaders) return res.sendStatus(403);

    const jwtVer = jwt.verify(token, SECRET_KEY);
    console.log(jwtVer, 'JWTVER!!!!!!!!!!!!!!!');
    console.log(jwtVer, 'JWTVER!!!!!!!!!!!!!!!');
    console.log(jwtVer, 'JWTVER!!!!!!!!!!!!!!!');
    console.log(jwtVer, 'JWTVER!!!!!!!!!!!!!!!');
    console.log(jwtVer, 'JWTVER!!!!!!!!!!!!!!!');
    const user = await UserModel.findOne({ _id: jwtVer.id }).select({
      password: 0,
    });

    if (!user) return res.sendStatus(401);

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(401);
  }
};

export default authMiddleware;
