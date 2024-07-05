import { Router } from "express";
import * as mc from "./message.controller.js";
import validate from "../../middleware/validate.js";
import { deleteMessageVal, sendMessageVal } from "./msgValidation.js";
import { messageAuth } from "../../middleware/auth.js";

export const messageRouter = Router();

messageRouter.post("/", validate(sendMessageVal), mc.sendMessage);
messageRouter.get("/", mc.getAllMessages);
messageRouter.delete(
  "/:id",
  validate(deleteMessageVal),
  messageAuth,
  mc.deleteMessage
);
