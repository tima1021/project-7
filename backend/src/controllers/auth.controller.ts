import { Request, Response } from "express";
import { User } from "../models/user.model.js";

export const authRefresh = (req: Request, res: Response) => {
  res.send("auth/refresh get huselt");
};
export const authSignIn = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const user = await User.find({ email });
    console.log(user);

    res.json({
      success: true,
      data: user,
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
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    res.status(444).json({
      success: false,
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
