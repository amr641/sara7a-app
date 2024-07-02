import nodemailer from "nodemailer";
export const sendEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "amrgad395@gmail.com",
      pass: "lcqaskmrnstaetzu",
    },
  });

  const info = await transporter.sendMail({
    from: '"Route assignment👻" <amrgad395@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "you just signed up in sara7a app ✔", // Subject line
    text: "Hello world?", // plain text body
    html: `<h1 style="background-color:black;color=white">good luck Route</h1><p><a>your OTP is ${otp}</a></p>`,
    // html body
  });

  console.log("Message sent: %s", info.messageId);
};
