import { NextRequest, NextResponse } from 'next/server';
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

export async function POST(request: NextRequest){
  const body = await request.json();
  const { firstName, lastName, email, message } = body;

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ message: "Missing information" });
  }

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

  try{
    await transporter.sendMail({
      from: `${firstName} ${lastName} <${process.env.GMAIL_USER}>`,
      to: process.env.MY_EMAIL,
      subject: `New Message from my portfolio`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        `
      });

    return NextResponse.json({
      status: "success",
      message: "send message successfully",
    });

  } catch(error){
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}