import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();

export const login = async (req, res) => {
  const { username, password } = req.boby;
  const user = await db.one(`SELECT * FROM user WHERE username=$1`, username);

  if (user && user.password === password) {
    const payload = {
      id: user.id,
      username,
    };
    const { SECRET = "" } = process.env;
    const token = jwt.sign(payload, SECRET);

    res.status(400).json({ msg: "Username or password incorrect" });
  } else {
    res.status(400).json({ msg: "Username or password incorrect" });
  }
};
