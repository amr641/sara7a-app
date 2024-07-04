import nodemailer from "nodemailer";
import { emailTemplate } from "./emailtemaplate.js";
import jwt from "jsonwebtoken";
export const sendEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amrgad395@gmail.com",
      pass: "lcqaskmrnstaetzu",
    },
  });
  jwt.sign({ email: email }, "route", async (err, token) => {
    const info = await transporter.sendMail({
      from: '"Route assignment👻" <amrgad395@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "you just signed up in sara7a app ✔", // Subject line
      text: "Hello world?", // plain text body
      html: emailTemplate(token),
      // html body
    });
    console.log("Message sent: %s", info.messageId);
  });
};
