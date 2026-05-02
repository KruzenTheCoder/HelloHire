import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") || "/";

  if (code) {
    // TODO: Exchange code for session using Supabase
    // const supabase = createClient();
    // const { error } = await supabase.auth.exchangeCodeForSession(code);
    // if (!error) return NextResponse.redirect(new URL(next, request.url));
  }

  // Redirect to home on error
  return NextResponse.redirect(new URL("/", request.url));
}
