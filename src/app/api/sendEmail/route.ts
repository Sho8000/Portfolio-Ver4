import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function GET(){
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  console.log(process.env.GMAIL_USER,process.env.GMAIL_APP_PASS)

  try{
    await transporter.sendMail({
      from: `"Hello" <${process.env.GMAIL_USER}>`,
      to: process.env.MY_EMAIL,
      subject: `New contact message from Hello`,
      text: "message is here from yoshikichi8000",
    });
    return NextResponse.json({ "send":"email"});

  } catch(error){
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}