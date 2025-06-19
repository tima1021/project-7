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

authRouter.get("/refresh", authRefresh);
authRouter.post("/sign-in/:email", authSignIn);
authRouter.post("/sign-up", authSignUp);
authRouter.post("/reset-password-request", authResetPassReq);
authRouter.post("/verify-reset-password-request", authVerify);
authRouter.post("/reset-password", authResetPass);

export default authRouter;
