import { Router } from "express";
import * as mc from "./message.controller.js";

export const messageRouter = Router();
messageRouter.post("/", mc.sendMessage);
messageRouter.get("/", mc.getAllMessages);
messageRouter.delete("/:id", mc.deleteMessage);
