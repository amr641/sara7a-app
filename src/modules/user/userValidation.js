import joi from "joi";
const signUpVal = joi.object({
  userName: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  confirmPassword: joi.string().valid(joi.ref("password")).required(),
});
const loginVal = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required(),
});
export { signUpVal, loginVal };
