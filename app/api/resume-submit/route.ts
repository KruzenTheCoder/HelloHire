import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { sendResumeConfirmation } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.formData();
    const firstName = body.get("firstName") as string;
    const lastName = body.get("lastName") as string;
    const email = body.get("email") as string;
    const role = body.get("role") as string;

    if (!firstName || !lastName || !email || !role) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { error } = await supabase
        .from("resume_submissions")
        .insert({
          name: `${firstName} ${lastName}`,
          email,
          role,
          status: "pending"
        });

      if (error) {
        console.error("Supabase insert error:", error);
      }
    }

    // Send confirmation email
    await sendResumeConfirmation(email, firstName);

    // Redirect back to page with success state (in a real app we'd handle this better with client-side fetch or a thank you page)
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}/resume-review?success=true`, { status: 303 });
  } catch (error) {
    console.error("Resume submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}