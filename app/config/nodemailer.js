import nodemailer from "nodemailer";

const email = "anoomc@yandex.com";
const pass = "ilgidyyzlbbhrqzd";

export const transporter = nodemailer.createTransport({
  pool: true,
  host: "smtp.yandex.com",
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: "anoomc@anoomc.ru",
};
