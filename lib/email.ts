import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendResumeConfirmation(email: string, name: string) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set. Skipping email send.");
    return { success: true };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "HelloHire <hello@hellohire.co.za>",
      to: [email],
      subject: "Resume Received - HelloHire",
      html: `
        <h2>Hi ${name},</h2>
        <p>We've successfully received your resume. Our expert recruiters will review it and get back to you within 48 hours.</p>
        <p>In the meantime, consider <a href="${process.env.NEXT_PUBLIC_SITE_URL}/book">booking a 1:1 coaching call</a> to accelerate your job search!</p>
        <br/>
        <p>Best,<br/>The HelloHire Team</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error };
  }
}
