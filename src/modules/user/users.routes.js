import { Router } from "express";
import { checkEmail, logIn } from "../../middleware/auth.js";
import { confirmEmail, signUp } from "./users.controller.js";
import validate from "../../middleware/validate.js";
import { loginVal, otpVal, signUpVal } from "./userValidation.js";
import { otpVerify } from "../../middleware/otp.verify.js";

export const userRouter = Router();
userRouter.post("/signUp", validate(signUpVal), checkEmail, signUp);
userRouter.post("/logIn", validate(loginVal), logIn);
userRouter.post(
  "/confirmEmail/:email",
  validate(otpVal),
  otpVerify,
  confirmEmail
);
