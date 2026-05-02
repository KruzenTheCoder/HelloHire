import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { roleRequestSchema } from "@/lib/validations/roleRequest";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = roleRequestSchema.parse(body);

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Create or find employer
    const { data: employer, error: empError } = await supabase
      .from("employers")
      .insert({
        company_name: validated.company_name,
        contact_name: validated.contact_name,
        contact_email: validated.contact_email,
      })
      .select()
      .single();

    if (empError) {
      console.error("Employer insert error:", empError);
      return NextResponse.json(
        { error: "Failed to create employer record" },
        { status: 500 }
      );
    }

    // Create role request
    const { error: roleError } = await supabase
      .from("role_requests")
      .insert({
        employer_id: employer.id,
        role_title: validated.role_title,
        role_type: validated.role_type,
        skills_required: validated.skills_required,
        experience_level: validated.experience_level,
        salary_budget_usd_month: validated.salary_budget_usd_month,
        description: validated.description,
      });

    if (roleError) {
      console.error("Role request error:", roleError);
      return NextResponse.json(
        { error: "Failed to create role request" },
        { status: 500 }
      );
    }

    // TODO: Send email via Resend

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Role request API error:", err);
    return NextResponse.json(
      { error: "Invalid request data" },
      { status: 400 }
    );
  }
}
