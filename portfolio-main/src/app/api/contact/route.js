import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.EMAIL_USER, EMAIL_PASS, e.EMAIL_USER,
      pass: process.EMAIL_USER, EMAIL_PASS, e.EMAIL_PASS, // App password
    },
  });

  await transporter.sendMail({
    from: process.EMAIL_USER, EMAIL_PASS, e.EMAIL_USER,
    to: process.EMAIL_USER, EMAIL_PASS, e.MY_EMAIL,
    replyTo: email,
    subject: `Portfolio Contact - ${name}`,
    text: message,
  });

  return Response.json({ success: true });
}