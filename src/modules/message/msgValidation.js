import joi from "joi";
const sendMessageVal = joi.object({
  content: joi.string().max(3000).required(),
  reciever: joi.string().hex().required(),
});
const deleteMessageVal = joi.object({
  id: joi.string().hex().required(),
});
export { sendMessageVal, deleteMessageVal };
