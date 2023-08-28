import nodemailer from "nodemailer";

const email = process.env.NEXT_PUBLIC_EMAIL_USER;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  pool: true,
  host: process.env.NEXT_PUBLIC_EMAIL_HOST,
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO,
};
