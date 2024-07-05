import { User } from "../../../database/models/user.model.js";
import { catchError } from "../../middleware/catchErrors.js";
import jwt from "jsonwebtoken";

const signUp = catchError(async (req, res) => {
  const user = await User.insertMany(req.body);
  //   user.password = undefined;
  res.status(201).json({ message: "success", user });
});
const confirmEmail = catchError(async (req, res) => {
  jwt.verify(req.params.token, "route", async (err, decoded) => {
    await User.findOneAndUpdate(
      { email: decoded.email },
      { confirmEmail: true }
    );
    res.status(200).json({ message: "email confirmed", email: decoded.email });
  });
  const user = await User.findOneAndUpdate({});
});
export { signUp, confirmEmail };
