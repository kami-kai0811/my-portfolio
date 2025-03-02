import { ok } from 'assert';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.GMAIL_HOST, // 例: "smtp.gmail.com"
      port: Number(process.env.GMAIL_PORT), // 例: 465 または 587
      secure: Number(process.env.GMAIL_PORT) === 465, // ポート465なら secure:true
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailData = {
      from: email, // 送信元
      replyTo: email,
      to: process.env.GMAIL_USER, // 送信先
      subject: `【お問合せ】${name}様より`,
      text: `${message} Send from ${email}`,
      html: `
        <p>【名前】</p>
        <p>${name}</p>
        <p>【メッセージ内容】</p>
        <p>${message}</p>
        <p>【メールアドレス】</p>
        <p>${email}</p>
      `,
    };

    // sendMail を Promise 化して await する
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (error, info) => {
        if (error) {
          return reject(error);
        }
        resolve(info);
      });
    });

    // 成功時は必ず NextResponse を返す
    return NextResponse.json({ message: 'メール送信に成功しました', ok: true });
  } catch (error) {
    console.error('メール送信エラー:', error);
    // エラー時も必ず NextResponse を返す
    return NextResponse.json(
      { error: 'メール送信に失敗しました', ok: false },
      { status: 500 }
    );
  }
}
