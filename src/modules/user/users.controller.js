import { User } from "../../../database/models/user.model.js";
import { catchError } from "../../middleware/catchErrors.js";
// import jwt from "jsonwebtoken";

const signUp = catchError(async (req, res) => {
  const user = await User.insertMany(req.body);
  user.password = undefined;
  res.status(201).json({ message: "success", user: user.userName });
});
const confirmEmail = catchError(async (req, res) => {
  await User.findOneAndUpdate(
    { email: req.params.email },
    {
      confirmEmail: true,
    }
  );
  res.status(200).json({ message: "email confirmed" });
});
export { signUp, confirmEmail };
