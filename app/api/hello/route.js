import { mailOptions, transporter } from "@/app/config/nodemailer";

export async function POST(req) {
  const data = await req.json();
  console.log(data);

  try {
    console.log("succsess");
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      text: "test",
      html: `<h1>Заявка в партнёры</h1> <p>Имя: ${data.values.name}</p>  <p>Наименование организации: ${data.values.company}</p>  <p>Номер телефона: ${data.values.number}</p>  <p>Эл. почта: ${data.values.email}</p> <br/>`,
    });
  } catch (error) {
    console.log(error);
  }

  return new Response("OK", {
    status: 200,
  });
}
