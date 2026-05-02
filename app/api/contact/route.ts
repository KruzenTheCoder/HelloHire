import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = contactSchema.parse(body);

    // Use service role for server-side inserts
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { error } = await supabase
      .from("contact_inquiries")
      .insert(validated);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to submit inquiry" },
        { status: 500 }
      );
    }

    // TODO: Send email via Resend
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({...});

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Invalid request data" },
      { status: 400 }
    );
  }
}
