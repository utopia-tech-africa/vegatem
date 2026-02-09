import ContactEmail from "@/emails/email";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  organization: z.string(),
  interest: z.string(),
  message: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json();
  const data = contactSchema.parse(body);

  const email = <ContactEmail {...data} />;

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: [process.env.CONTACT_TO_EMAIL!],
      replyTo: data.email,
      subject: `New Contact Form Submission — ${data.name}`,
      react: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 400 },
    );
  }
}
