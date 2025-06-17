import express from "express";
import {
  authRefresh,
  authResetPass,
  authResetPassReq,
  authSignIn,
  authSignUp,
  authVerify,
} from "../controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.get("/", authRefresh);
authRouter.post("/", authSignIn);
authRouter.post("/", authSignUp);
authRouter.post("/", authResetPassReq);
authRouter.post("/", authVerify);
authRouter.post("/", authResetPass);

export default authRouter;
