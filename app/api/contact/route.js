import nodemailer from "nodemailer";

export async function POST(req, res) {
  const { partnerFormName, partnerFormComp, partnerFormNum, partnerFormEmail } =
    req.body;

  const user = "omcemailhandler@gmail.com";

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: user,
      pass: "omc!spA09",
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: user, // sender address
      to: "pkharitonov1@gmail.com", // list of receivers
      replyTo: partnerFormEmail,
      subject: "subject", // Subject line
      text: "message", // plain text body
      html: (
        <div>
          ${partnerFormComp} <br />
          <br />
          Thank you,
          <br />${partnerFormName}
        </div>
      ),
    });

    console.log("Message sent: ", mail.messageId);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "could not send the email" });
  }
}
