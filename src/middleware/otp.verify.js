import { User } from "../../database/models/user.model.js";
import { appError } from "../utils/appError.js";
import { catchError } from "./catchErrors.js";

export const otpVerify = catchError(async (req, res, next) => {
  const user = await User.findOne({ email: req.params.email });
  let otpMatch = user.otp == req.body.otp;
  let expiration = user.otpExpireDate > new Date();
  //   console.log(otpMatch && expiration);
  if (otpMatch && expiration) {
    return next();
  } else {
    next(new appError("invalid or expired otp", 400));
  }
});
