import jwt from "jsonwebtoken";
import { User } from "../../database/models/user.model.js";
import { sendEmail } from "../email/email.js";
import { appError } from "../utils/appError.js";
import bcrypt from "bcrypt";
import { Message } from "../../database/models/message.model.js";
import { catchError } from "./catchErrors.js";

const checkEmail = async (req, res, next) => {
  const emailExistence = await User.findOne({ email: req.body.email });
  if (emailExistence)
    return next(new appError("email already exist please sign in", 409));
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  req.body.otp = Math.floor(Math.random() * 1000000000).toString();
  sendEmail(req.body.email, req.body.otp);
  next();
};
const logIn = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user || !bcrypt.compareSync(req.body.password, user.password))
    return next(new appError("incorrect email or password", 401));
  jwt.sign(
    { userId: user.id, name: user.userName },
    "route",
    (error, token) => {
      res.status(200).json({ message: "logged in", token });
    }
  );
};
// const messageAuth = catchError(async (req, res, next) => {
//   const message = await Message.findById(req.params.id);
//   let authorize = message.reciever == req.user.userId;
//   if (message && authorize) next();
// });
const messageAuth = catchError(async (req, res, next) => {
  const message = await Message.findById(req.params.id);
  if (message) {
    let authorize = message.reciever == req.user.userId;
    if (authorize) {
      return next();
    }
    res.status(403).json({ message: "you have access only on you messages" });
  }
});
export { checkEmail, logIn, messageAuth };
