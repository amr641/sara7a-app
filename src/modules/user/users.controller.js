import { User } from "../../../database/models/user.model.js";
import { catchError } from "../../middleware/catchErrors.js";

const signUp = catchError((req, res) => {
  const user = User.insertMany(req.body);
  //   user.password = undefined;
  res.status(201).json({ message: "success" });
});
export { signUp };
