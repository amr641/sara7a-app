import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  otpExpireDate: {
    type: Date,
    default: new Date().setMinutes(new Date().getMinutes() + 5),
  },
  confirmEmail: {
    type: Boolean,
    default: false,
  },
});
export const User = model("User", userSchema);
