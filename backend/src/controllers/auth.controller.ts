import { Request, Response } from "express";
import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const authRefresh = async (req: Request, res: Response) => {
  const user = await User.find();
  console.log(user);

  res.json({
    success: true,
    data: user,
  });
};

export const authSignIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const comparedPassword = bcrypt.compare(password, user?.password || "");
    const token = jwt.sign({ userId: user?._id }, "tima1021", {
      expiresIn: "1h",
    });

    if (!comparedPassword) {
      res.status(200).json({
        success: false,
        message: " not Authenticated",
      });
    }
    res.status(200).json({
      success: true,
      message: "Authenticated",
      token: token,
    });
  } catch (error) {
    console.log(error);

    res.status(444).json({
      success: false,
      error: error,
    });
  }
};
export const authSignUp = async (req: Request, res: Response) => {
  const { email, password, phoneNumber, address } = req.body;
  try {
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);

    const hashedPassword = await bcrypt.hash(password, salt);

    const createdUser = await User.create({
      email: email,
      password: hashedPassword,
      phoneNumber: phoneNumber,
      address: address,
    });
    res.status(200).json({
      success: true,
      data: createdUser,
    });
  } catch (error) {
    res.status(404).json({
      succes: false,
      error: error,
    });
  }
};
export const authResetPassReq = (req: Request, res: Response) => {
  res.send("auth/reset-password-request post huselt");
};
export const authVerify = (req: Request, res: Response) => {
  res.send("auth/verify-reset-password get huselt");
};
export const authResetPass = (req: Request, res: Response) => {
  res.send("auth/reset-password post huselt");
};
