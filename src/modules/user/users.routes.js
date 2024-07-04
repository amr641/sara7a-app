import { Router } from "express";
import { checkEmail, logIn } from "../../middleware/auth.js";
import { confirmEmail, signUp } from "./users.controller.js";

export const userRouter = Router();
userRouter.post("/signUp", checkEmail, signUp);
userRouter.post("/logIn", logIn);
userRouter.get("/confirmEmail/:token", confirmEmail);
