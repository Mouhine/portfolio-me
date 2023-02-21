// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { transporter } from "./download";
const nodemailer = require("nodemailer");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const mailOptions = {
      from: req.body.messageInfo.email,
      to: "mouhinemohmade@gmail.com",
    };

    await transporter.sendMail({
      ...mailOptions,
      subject: req.body.messageInfo.Subject,
      text: req.body.messageInfo.message,
      html: `<p>${req.body.messageInfo.message}</p>`,
    });

    res.send("email was sent seccessfully");
  }
}
