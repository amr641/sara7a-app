import { Message } from "../../../database/models/message.model.js";
import { catchError } from "../../middleware/catchErrors.js";
import { appError } from "../../utils/appError.js";
// send message
const sendMessage = catchError(async (req, res) => {
  const message = await Message.insertMany(req.body);
  res.status(201).json({ message: "success" });
});
// get all user messages
const getAllMessages = catchError(async (req, res) => {
  const messages = await Message.find(
    { reciever: req.user.userId },
    { reciever: 0, __v: 0 }
  );
  res.status(200).json({ messages: messages });
});

const deleteMessage = catchError(async (req, res) => {
  const messages = await Message.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "success", messages });
});

export { sendMessage, getAllMessages, deleteMessage };
