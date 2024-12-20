// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import type { SendMailOptions } from "nodemailer";

type EmailData = {
  name: string;
  email: string;
  tel?: string;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, tel, message }: EmailData = req.body;

    if (!email || !name) {
      return res.status(400).json({
        error: "Missing required fields: name and email are required",
      });
    }

    const transport = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const emailText = `Nová zpráva z kontaktního formuláře na webu web.bestaudio.cz
Jméno a příjmení: ${name}
e-mail: ${email}
Telefon: ${tel || "Neuvedeno"}

Zpráva:
${message || "Žádná zpráva"}`;

    const mailOptions: SendMailOptions = {
      from: {
        name: process.env.SMTP_FROM as string,
        address: process.env.SMTP_USER as string,
      },
      replyTo: email,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL as string,
      subject: "Nová zpráva z kontaktního formuláře",
      text: emailText,
      headers: {
        "X-Priority": "3",
        "X-MSMail-Priority": "Normal",
        Importance: "Normal",
        "X-Mailer": "NextJS-SMTP",
      },
    };

    await transport.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({
      error: "Failed to send email",
      details: (error as Error).message,
    });
  }
}
