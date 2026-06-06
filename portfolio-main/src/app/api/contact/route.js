import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // App password
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.MY_EMAIL,
    replyTo: email,
    subject: `Portfolio Contact - ${name}`,
    text: message,
  });

  return Response.json({ success: true });
}